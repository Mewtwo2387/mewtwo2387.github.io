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
error = 0.1
error_std = 0.5

net = DuelingDQN([no_of_queues* queue_length + 2], no_of_queues)
net.load_state_dict(torch.load('dueling_dqn200_14000000.pt'))


lists_waiting_time_random = []
lists_waiting_time_strad = []
lists_waiting_time_dqn = []
indi_random = []
#indi_strad = []
crazy = []
total_waiting_time = 0

def dqn(queues, service_time, customer_counter):

    with torch.no_grad():
        a =  [np.concatenate((queues.flatten(),[service_time, customer_counter]))]
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
    queue[queue_no][queue_counter[queue_no]] = serve_time
    queue_counter[queue_no] += 1

def estimated_push(estimated_queue, queue_no, serve_time):               #push one customer into queue
    estimated_queue[queue_no][estimated_queue_counter[queue_no]] = serve_time
    estimated_queue_counter[queue_no] += 1


def random_assign(queue, serve_time):                  #assign customer to any possible queue when one queue is full already
    if queue_counter[0] < queue_length:
        push(queue, 0, serve_time)
    elif queue_counter[1] < queue_length:
        push(queue, 1, serve_time)
    elif queue_counter[2] < queue_length:
        push(queue, 2, serve_time)
    elif queue_counter[3] < queue_length:
        push(queue, 3, serve_time)

def random_strad(queue, serve_time):                    # a random strategy to test against
    available = []
    for i in range(no_of_queues):
        if queue_counter[i] < queue_length:
            available.append(i)
    choice = random.choice(available)
    push(queue, choice, serve_time)

def temporary_shortest(queue, serve_time):
    push(queue, np.argmin(queue_counter), serve_time)


def stratified_strad(queue, serve_time, ending):                # a more reasonable strategy to test against
    if ending <= no_customers * 0.70:
        if serve_time >= 1.38629 + 0.1 and queue_counter[0] < queue_length:
            push(queue, 0, serve_time)
        elif serve_time >= 0.69315 + 0.1and queue_counter[1] < queue_length:
            push(queue, 1, serve_time)
        elif serve_time >= 0.28768 + 0.1 and queue_counter[2] < queue_length:
            push(queue, 2, serve_time)
        elif serve_time >= 0 + 0.1 and queue_counter[3] < queue_length:
            push(queue, 3, serve_time)
        else:
            random_assign(queue, serve_time)
    else:
        current_1 = np.sum(queue[0])
        current_2 = np.sum(queue[1])
        current_3 = np.sum(queue[2])
        current_4 = np.sum(queue[3])
        currents = [current_1,current_2,current_3, current_4]
        push(queue,np.argmin(currents),serve_time)

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

def update_estimated_queue():

    for i in range(no_of_queues):

        if queues_estimated[i][0] > 0:
            queues_estimated[i][0] -= arrival_time[customer_counter-1]


        while queues_estimated[i][0] < 0:
            negative = queues_estimated[i][0]
            queues_estimated[i] = np.append(np.delete(queues_estimated[i],0),0)
            estimated_queue_counter[i] -= 1
            if queues_estimated[i][0] > 0:
                queues_estimated[i][0] += negative

for i in range(no_experiments):

    total_waiting_time = 0
    queues = np.zeros((4, queue_length))
    np.random.seed(i + 5000)
    #customers = random.rand(no_customers)
    #ustomers = random.exponential(1, no_customers)
    #customers += 0.1
    customers = random.lognormal(-0.35,0.83, no_customers).clip(min=0.1, max=5)
    np.random.seed(i + 1000)
    arrival_time = random.exponential(net_flow_out_rate, no_customers)
    #print(arrival_time)
    customer_counter = 0                        #follow which customer we are dealing with
    queue_counter = np.zeros(no_of_queues, dtype=np.int8).tolist()
    #queue_counter = [0,0,0,0]
    for customer in customers:                  #perform the experiment with the random strategy
        update_queue()
        try:
            blank = queue_counter.index(0)
            push(queues, blank, customers[customer_counter])
            customer_counter += 1
            #print(queues)
            #print(arrival_time[customer_counter - 1])

            continue
        except Exception as e:                   #avoid error while taking the list.index()
            #print(e)
            pass
        if all(x == queue_length for x in queue_counter):
            customer_counter += 1
            continue

        if customers[customer_counter] > 5:
            crazy.append(customers[customer_counter])
        random_strad(queues, customers[customer_counter])
        #stratified_strad(queues, customers[customer_counter])
        customer_counter += 1

        #print(queues)
        ##print(arrival_time[customer_counter-1])

    lists_waiting_time_random.append(total_waiting_time)



    total_waiting_time = 0                                  #reset everything and perform the experiment again but with different strategy
    queues = np.zeros((4, queue_length))
    np.random.seed(i + 5000)
    #customers = random.rand(no_customers)
    #customers = random.exponential(1, no_customers)
    #customers += 0.1
    customers = random.lognormal(-0.35,0.83, no_customers).clip(min=0.1, max=5)

    np.random.seed(i + 1000)
    arrival_time = random.exponential(net_flow_out_rate, no_customers)
    customer_counter = 0
    queue_counter = np.zeros(no_of_queues, dtype=np.int8).tolist()

    #queue_counter = [0,0,0,0]
    for customer in customers:
        update_queue()
        try:
            blank = queue_counter.index(0)
            push(queues, blank, customers[customer_counter])
            customer_counter += 1
            #print(queues)
            #print(arrival_time[customer_counter - 1])

            continue
        except Exception as e:
            #print(e)
            pass
        if all(x == queue_length for x in queue_counter):
            customer_counter += 1
            continue

        #random_strad(queues, customers[customer_counter])
        stratified_strad(queues, customers[customer_counter], customer_counter)
        #print(queue_counter)

        customer_counter += 1

        #print(queues)
        ##print(arrival_time[customer_counter-1])

    lists_waiting_time_strad.append(total_waiting_time)

    total_waiting_time = 0  # reset everything and perform the experiment again but with different strategy
    queues = np.zeros((4, queue_length))
    queues_estimated = np.zeros((4, queue_length))
    np.random.seed(i + 5000)
    customers = random.lognormal(-0.35, 0.83, no_customers).clip(min=0.1,max=5)

    np.random.seed(i + 1000)
    arrival_time = random.exponential(net_flow_out_rate, no_customers)
    customer_counter = 0
    queue_counter = np.zeros(no_of_queues, dtype=np.int8).tolist()
    estimated_queue_counter = np.zeros(no_of_queues, dtype=np.int8).tolist()
    # queue_counter = [0,0,0,0]
    for customer in customers:
        update_queue()
        update_estimated_queue()
        #estimated_service_time = np.random.uniform(low= customers[customer_counter] * (1 - error), high= customers[customer_counter] * (1 + error))
        estimated_service_time = np.random.normal(customers[customer_counter], error_std, 1).clip(min=0.1, max = 5.0)[0]
        action = dqn(queues_estimated, estimated_service_time, customer_counter)


        estimated_push(queues_estimated, action, estimated_service_time)
        push(queues, action, customers[customer_counter])
        customer_counter += 1
        #print(queue_counter)
        #print(estimated_queue_counter)
        #print(" ")

        """
        d = [a[:15] for a in queues]
        print(d)
        print(" ")
        d = [a[:15] for a in queues_estimated]
        print(d)
        """
    lists_waiting_time_dqn.append(total_waiting_time)


print("statistics for total waiting time:")
q125, q175 = np.percentile(lists_waiting_time_strad, [25, 75])
q225, q275 = np.percentile(lists_waiting_time_random, [25, 75])
q325, q375 = np.percentile(lists_waiting_time_dqn, [25, 75])
print(f'sorting strategy, mean: {np.mean(lists_waiting_time_strad)} std: {np.std(lists_waiting_time_strad)} median: {np.median(lists_waiting_time_strad)} IQR: {q175-q125}')
print(f'random strategy, mean: {np.mean(lists_waiting_time_random)} std: {np.std(lists_waiting_time_random)} median: {np.median(lists_waiting_time_random)} IQR: {q275-q225}')
print(f'trained queqat, mean: {np.mean(lists_waiting_time_dqn)} std: {np.std(lists_waiting_time_dqn)} median: {np.median(lists_waiting_time_dqn)} IQR: {q375-q325}')

dqn_vs_strad_won = 0
for i in range(no_experiments):
    if lists_waiting_time_dqn[i] < lists_waiting_time_strad[i]:
        dqn_vs_strad_won += 1

print(f'trained queqat is better than sorting {dqn_vs_strad_won * 100/no_experiments}% of times')

dqn_vs_rand_won = 0
for i in range(no_experiments):
    if lists_waiting_time_dqn[i] < lists_waiting_time_random[i]:
        dqn_vs_rand_won += 1

print(f'trained queqat is better than random strategy {dqn_vs_rand_won * 100/no_experiments}% of times')
#print(crazy)
#print(len(crazy))
#print(lists_waiting_time_random)
#print(np.mean(lists_waiting_time))
#print(np.std(lists_waiting_time))

"""
fig, ax = pp.subplots()
ax.scatter(lists_waiting_time_strad, lists_waiting_time_dqn, c='black',)              #plot the scatter graph
abline(1,0)
pp.xlabel("performance for sorting strategy")
pp.ylabel("performance for random strategy")
#pp.scatter(lists_waiting_time_strad, lists_waiting_time_random)
pp.show()
"""
