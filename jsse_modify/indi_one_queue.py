import numpy.random as random
import numpy as np
import matplotlib.pyplot as pp



no_customers = 200
no_of_queues = 4
queue_length = 1
net_flow_out_rate = 0.1
#base_service_time = 0.1
#base_waiting_time = 0
no_of_experiments = 50
all_time = np.array([])
total_mean = []



def push(queue, queue_no, serve_time):
    global total_waiting_time
    global customer_counter
    # total_waiting_time += np.sum(queue[queue_no])
    # individual_time.append(np.sum(queue[queue_no]))
    # print(f'cus_no: {customer_counter}, additional waiting {np.sum(queue[queue_no])}')
    queue[queue_no] = serve_time


def update_queue():
    global base_waiting_time
    global total_waiting_time
    global customer_counter

    order = np.argsort(np.array(queues))      #sorting customer in the cashier end
    for cus in queue_tracker:
        individual_time[cus] += arrival_time[customer_counter - 1] #identity everyone in the single queue and accumulate their waiting time
    for i in order:

        # print(queues[i])
        if queues[i] > 0:
            queues[i] -= arrival_time[customer_counter - 1]
        ##print(arrival_time[incoming_cus])
        # print(queues[i])
        while queues[i] < 0:
            negative = queues[i]
            if single_queue != []:
                queues[i] = single_queue[0]

                single_queue.pop(0)
                individual_time[queue_tracker[0]] += negative
                queue_tracker.pop(0)
                """
                if single_queue != []:
                    for cus in queue_tracker:
                        individual_time[cus] += np.min(queues)
                """

            else:
                queues[i] = 0
            if queues[i] > 0:
                queues[i] += negative


for i in range(no_of_experiments):
    queues = np.zeros(no_of_queues).tolist()

    np.random.seed(i+5000)
    customers = random.lognormal(-0.35, 0.83, no_customers).clip(min=0.1,max=5.0)

    np.random.seed(i+1000)
    arrival_time = random.exponential(net_flow_out_rate, no_customers)
    # arrival_time = np.append(arrival_time,0)
    # customers = np.append(customers,0)

    #print(f'customers service time: {customers}')
    #print(f'customer interarrvial time:{arrival_time}')
    # arrival_time[10] = 0.8

    customer_counter = -1
    #service_counter = 0

    # queue_counter = [0,0,0,0]
    individual_time = np.zeros(no_customers)

    single_queue = []
    queue_tracker = []
    for customer in customers:

        update_queue()
        customer_counter += 1
        try:
            blank = queues.index(0)

            if single_queue == []:
                push(queues, blank, customers[customer_counter])

                #print(queues)
                #print(single_queue)
                #print(f'{arrival_time[customer_counter-1]} seconds later')
                #print('')
                continue

        except Exception as e:
            # print(e)
            pass

        # individual_time[i] += np.min(queues)

        single_queue.append(customer)
        queue_tracker.append(customer_counter)


        #print(queues)
        #print(single_queue)
        #print(f'{arrival_time[customer_counter-1]} seconds later')
        #print(" ")
        # print(f'{np.sum(single_queue)} waited')

    while single_queue != []:
        update_queue()

    # print(queue_tracker)

    # print(queues)
    # print(single_queue)

    # print(f'{np.sum(single_queue)} waited')
    #print(f'individual_waiting time: {individual_time}')
    all_time = np.concatenate((all_time, individual_time))
    total_mean.append(np.sum(individual_time))
# push(queues, 0,  customers[0], queue_counter[0])
# print(queues)
# print(queue_counter)
# print(arrival_time)
#print(f'total waiting time {np.sum(individual_time)}')
# print(customer_lost)


# print(np.sum(customers))
# pp.scatter(individual_time, np.zeros_like(individual_time) + 0, s=1)
# print(individual_time)


q25, q75 = np.percentile(all_time, [25, 75])
print(f'Below is statistic for individual waiiting time')
print(f'mean: {np.mean(all_time)}, std: {np.std(all_time)}, median: {np.median(all_time)}, IQR: {q75- q25}')
print(" ")
print(f'Below is statistic for total waiting time')
p25, p75 = np.percentile(total_mean, [25, 75])
print(f'mean: {np.mean(total_mean)}, std: {np.std(total_mean)}, median: {np.median(total_mean)}, IQR: {p75- p25}')
bin_width = 2 * (q75 - q25) * len(all_time) ** (-1 / 3)
bins = round((max(all_time) - min(all_time)) / bin_width)
pp.hist(all_time, density=True, bins=np.int(60))

pp.xlabel("waiting time using one queue")
pp.ylabel("number of customers")
pp.xlim(0.00, 50.00)

#pp.show()
