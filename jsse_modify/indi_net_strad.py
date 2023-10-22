import numpy.random as random
import numpy as np
#random.seed(65)
import matplotlib.pyplot as pp
import torch
import torch.nn as nn

class DuelingDQN(nn.Module):
    def __init__(self, input_shape, n_actions):
        super(DuelingDQN, self).__init__()

        self.conv = nn.Sequential(
            nn.Linear(input_shape[0], 64),
            nn.ReLU(),
            #nn.Linear(input_shape[0], 32),
            #nn.ReLU(),
        )

        self.fc_adv = nn.Sequential(
            nn.Linear(64, 32),
            nn.ReLU(),
            nn.Linear(32, n_actions)
        )
        self.fc_val = nn.Sequential(
            nn.Linear(64, 32),
            nn.ReLU(),
            nn.Linear(32, 1)
        )


    def forward(self, x):
        fx = x.float() / 5
        conv_out = self.conv(fx).view(fx.size()[0], -1)
        val = self.fc_val(conv_out)
        adv = self.fc_adv(conv_out)
        return val + (adv - adv.mean(dim=1, keepdim=True))


no_customers = 200
queue_length = 100
no_of_queues = 4
net_flow_out_rate = 0.1        #rate at which customers come verses customers average serve time (ie. the smaller the rate, the more busy the shop is)
no_experiments = 100

net = DuelingDQN([no_of_queues* queue_length + 2], no_of_queues)
net.load_state_dict(torch.load('dueling_dqn200_14000000.pt'))

lists_waiting_time_strad = []

indi_strad = []
total_waiting_time = 0

def dqn(queues, service_time, customer_counter):
    with torch.no_grad():
        a =  [np.concatenate((queues.flatten(),[service_time, customer_counter]))]
        #a = [np.concatenate((queues.flatten(), [service_time]))]
        state = torch.tensor(a)
        q_values = net.forward(state)
    return np.argmax(q_values)

def abline(slope, intercept):
    """Plot a line from slope and intercept"""
    axes = pp.gca()
    x_vals = np.array(axes.get_xlim())
    y_vals = intercept + slope * x_vals
    pp.plot(x_vals, y_vals, '--')

def push(queue, queue_no, serve_time):               #push one customer into queue
    global total_waiting_time
    total_waiting_time += np.sum(queue[queue_no])
    indi_strad.append(np.sum(queue[queue_no]))
    queue[queue_no][queue_counter[queue_no]] = serve_time
    queue_counter[queue_no] += 1


def update_queue():                                     #update the queue when each customer comes

    for i in range(no_of_queues):

        if queues[i][0] > 0:
            queues[i][0] -= arrival_time[customer_counter-1]


        while queues[i][0] < 0:
            negative = queues[i][0]
            queues[i] = np.append(np.delete(queues[i],0),0)
            queue_counter[i] -= 1
            if queues[i][0] > 0:
                queues[i][0] += negative


for i in range(no_experiments):
    total_waiting_time = 0                                  #reset everything and perform the experiment again but with different strategy
    queues = np.zeros((4, queue_length))
    np.random.seed(i + 5000)
    #customers = random.rand(no_customers)
    #customers = random.exponential(1, no_customers)
    #customers += 0.1
    customers = random.lognormal(-0.35,0.83, no_customers).clip(min=0.1,max=5.0)

    np.random.seed(i + 1000)
    arrival_time = random.exponential(net_flow_out_rate, no_customers)
    customer_counter = 0
    queue_counter = np.zeros(no_of_queues, dtype=np.int8).tolist()
    #queue_counter = [0,0,0,0]
    for customer in customers:
        update_queue()
        action = dqn(queues, customers[customer_counter], customer_counter)
        push(queues, action, customers[customer_counter])
        customer_counter += 1
        #print(queue_counter)
        d = [a[:15] for a in queues]
        print(d)
    lists_waiting_time_strad.append(total_waiting_time)




#print(np.mean(lists_waiting_time_strad))


q25, q75 = np.percentile(indi_strad, [25, 75])
print(f'mean: {np.mean(indi_strad)}, std: {np.std(indi_strad)}, median: {np.median(indi_strad)}, IQR: {q75-q25}')
bin_width = 2 * (q75 - q25) * len(indi_strad) ** (-1 / 3)
bins = round((max(indi_strad) - min(indi_strad)) / bin_width)
pp.hist(indi_strad, density=True, bins=np.int(60))
pp.xlabel("waiting time using QueQat")
pp.ylabel("relative density of customers")
pp.show()
