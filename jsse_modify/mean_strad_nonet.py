import numpy.random as random
import numpy as np
#random.seed(65)
import matplotlib.pyplot as pp


no_customers = 200
queue_length = 200
no_of_queues = 4
net_flow_out_rate = 0.1        #rate at which customers come verses customers average serve time (ie. the smaller the rate, the more busy the shop is)
no_experiments = 100


lists_waiting_time_random = []
lists_waiting_time_strad = []
lists_waiting_time_dqn = []
indi_random = []
#indi_strad = []
crazy = []
total_waiting_time = 0

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


def random_assign(queue, serve_time):                  #assign customer to any possible queue when one queue is full already
    if queue_counter[0] < queue_length:
        push(queue, 0, serve_time)
    elif queue_counter[1] < queue_length:
        push(queue, 1, serve_time)
    elif queue_counter[2] < queue_length:
        push(queue, 2, serve_time)
    elif queue_counter[3] < queue_length:
        push(queue, 3, serve_time)
"""
def random_strad(queue, serve_time):                    # a reasonable strategy to test against
    if serve_time >= 0.75 and queue_counter[0] < queue_length:
        push(queue, 0, serve_time)
    elif serve_time >= 0.5 and queue_counter[1] < queue_length:
        push(queue, 1, serve_time)
    elif serve_time >= 0.25 and queue_counter[2] < queue_length:
        push(queue, 2, serve_time)
    elif serve_time >= 0 and queue_counter[3] < queue_length:
        push(queue, 3, serve_time)
    else:
        random_assign(queue, serve_time)
"""
def random_strad(queue, serve_time):                    # a random strategy to test against
    available = []
    for i in range(no_of_queues):
        if queue_counter[i] < queue_length:
            available.append(i)
    choice = random.choice(available)
    push(queue, choice, serve_time)

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
"""
def stratified_strad(queue, serve_time, ending):                # a more reasonable strategy to test against
    if ending <= no_customers * 0.7:
        if serve_time >= 1.38629 and queue_counter[0] < queue_length:
            push(queue, 0, serve_time)
        elif serve_time >= 0.69315 and queue_counter[1] < queue_length:
            push(queue, 1, serve_time)
        elif serve_time >= 0.28768  and queue_counter[2] < queue_length:
            push(queue, 2, serve_time)
        elif serve_time >= 0  and queue_counter[3] < queue_length:
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
"""
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

    total_waiting_time = 0
    queues = np.zeros((4, queue_length))
    np.random.seed(i+5000)
    #customers = random.rand(no_customers)
    #ustomers = random.exponential(1, no_customers)
    #customers += 0.1
    customers = random.lognormal(-0.35,0.83, no_customers)
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
    customers = random.lognormal(-0.35,0.83, no_customers)

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
        #print(queue_counter)
        #print(queues)
        ##print(arrival_time[customer_counter-1])

    lists_waiting_time_strad.append(total_waiting_time)



print(np.mean(lists_waiting_time_strad)/no_customers)
print(np.mean(lists_waiting_time_random)/no_customers)

print(crazy)
print(len(crazy))
#print(lists_waiting_time_random)
#print(np.mean(lists_waiting_time))
#print(np.std(lists_waiting_time))
fig, ax = pp.subplots()
ax.scatter(lists_waiting_time_strad, lists_waiting_time_random, c='black',)              #plot the scatter graph
abline(1,0)
pp.xlabel("performance for sorting strategy")
pp.ylabel("performance for random strategy")
#pp.scatter(lists_waiting_time_strad, lists_waiting_time_random)
pp.show()

