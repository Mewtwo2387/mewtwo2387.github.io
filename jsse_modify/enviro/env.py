import numpy.random as random
import numpy as np
#random.seed(65)
import matplotlib.pyplot as pp

no_customers = 500
queue_length = 500
no_of_queues = 4
net_flow_out_rate = 0.18832         #rate at which customers come verses customers average serve time (ie. the smaller the rate, the more busy the shop is)
no_experiments = 100


lists_waiting_time_strad = []

indi_strad = []
total_waiting_time = 0

def abline(slope, intercept):
    """Plot a line from slope and intercept"""
    axes = pp.gca()
    x_vals = np.array(axes.get_xlim())
    y_vals = intercept + slope * x_vals
    pp.plot(x_vals, y_vals, '--')

def push(queue, queue_no, serve_time, total_waiting_time, waiting_time_list):               #push one customer into queue

    total_waiting_time += np.sum(queue[queue_no])
    waiting_time_list.append(np.sum(queue[queue_no]))
    queue[queue_no][queue_counter[queue_no]] = serve_time
    queue_counter[queue_no] += 1
    return total_waiting_time, waiting_time_list, queue, queue_counter

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
    np.random.seed(i + 3000)
    #customers = random.rand(no_customers)
    #customers = random.exponential(1, no_customers)
    #customers += 0.1
    customers = random.lognormal(1,0.05, no_customers)

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
        customer_counter += 1

        #print(queues)
        ##print(arrival_time[customer_counter-1])

    lists_waiting_time_strad.append(total_waiting_time)




"""
print(f'mean: {np.mean(indi_strad)}, std: {np.std(indi_strad)}, median: {np.median(indi_strad)}')
print(np.mean(lists_waiting_time_strad))


q25, q75 = np.percentile(indi_strad, [25, 75])
bin_width = 2 * (q75 - q25) * len(indi_strad) ** (-1 / 3)
bins = round((max(indi_strad) - min(indi_strad)) / bin_width)
pp.hist(indi_strad, density=True, bins=np.int(60))
pp.xlabel("waiting time using one queue")
pp.ylabel("number of customers")
pp.show()
"""