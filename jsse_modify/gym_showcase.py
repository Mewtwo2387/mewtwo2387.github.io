from enviro import custom_gym_conv
from numpy import random as random
import numpy as np
import torch
no_customers = 10
queue_length = 4
no_of_queues = 4
net_flow_out_rate = 0.1

env = custom_gym_conv.JSSE(no_customers, queue_length,no_of_queues, net_flow_out_rate)
env.reset()

print(f'customers service time: {env.customers}')
print(f'customer interarrvial time:{env.arrival_time}')
print(env.queues)
print(" ")
print(f'service time of next customer: {env.state[-2]}')



for i in range(env.no_customers):
    action = random.randint(low=0, high=4)



    state ,_,_,_ = env.step(action)
    obs = env.queues
    next_customer = state[-2]


    print(f'customer is assigned to queue {action}')

    if env.customer_counter < env.no_customers:
        print(f"{env.arrival_time[env.customer_counter-1]} units time later")


    print(obs)
    print(f"this customer arrived: {next_customer}")

    print(" ")




"""
b = torch.tensor([1,3,3])
c = torch.tensor([5,3,3])
a = [b, c]
print(a)
print(torch.stack(a))

"""
