from gym import Env
from gym.spaces import Box, Discrete
import gym
from numpy import random
import numpy as np


class JSSE(Env):
    def __init__(self, no_customers, queue_length, no_of_queues, net_flow_out_rate):
        # dog runs from 0 to 50, returns from 50 to 0
        self.observation_space = Box(low=0.1, high=5, shape=(queue_length*no_of_queues + 2,))

        # amount of distance travelled
        self.action_space = gym.spaces.Discrete(no_of_queues)

        # current state
        self.state = np.zeros(queue_length*no_of_queues + 2)

        # no. of rounds
        self.rounds = no_customers

        # reward collected
        self.collected_reward = 0

        self.no_customers = no_customers
        self.queue_length = queue_length
        self.no_of_queues = no_of_queues
        self.net_flow_out_rate = net_flow_out_rate

        self.queue_counter = np.zeros(no_of_queues, dtype=np.int8).tolist()
        self.customers = random.lognormal(-0.35,0.83, no_customers).clip(min=0.1,max=5)
        self.arrival_time = random.exponential(self.net_flow_out_rate, no_customers)
        self.queues = np.zeros((4, queue_length))
        self.customer_counter = 0
        self.total_waiting_time = 0
        self.waiting_list = []

        self.state[-1] = 1
        self.state[-2] = self.customers[0]

    def step(self, action):
        done = False
        info = {}
        rw = 0
        #self.rounds -= 1
        #self.update_queue()

        try:
            self.push(action)
        except Exception as e:
            self.total_waiting_time += 1000.0

        self.customer_counter += 1


        if self.customer_counter == self.no_customers:
            done = True
            self.collected_reward = -self.total_waiting_time/self.no_customers
        self.update_queue()

        if self.customer_counter == self.no_customers:
            obs = np.concatenate((self.queues.flatten(),[0, self.customer_counter]))
            #obs = np.concatenate((self.queues.flatten(), [0]))
        else:
            obs = np.concatenate((self.queues.flatten(),[self.customers[self.customer_counter], self.customer_counter]))
            #obs = np.concatenate((self.queues.flatten(), [self.customers[self.customer_counter]]))
        return obs, self.collected_reward, done, info

    def push(self, action):
        self.total_waiting_time += np.sum(self.queues[action])
        self.waiting_list.append(np.sum(self.queues[action]))
        self.queues[action][self.queue_counter[action]] = self.customers[self.customer_counter]
        self.queue_counter[action] += 1


    def update_queue(self):  # update the queue when each customer comes

        for i in range(self.no_of_queues):

            if self.queues[i][0] > 0:
                self.queues[i][0] -= self.arrival_time[self.customer_counter - 1]

            while self.queues[i][0] < 0:
                negative = self.queues[i][0]
                self.queues[i] = np.append(np.delete(self.queues[i], 0), 0)
                self.queue_counter[i] -= 1
                if self.queues[i][0] > 0:
                    self.queues[i][0] += negative

    def reset(self):
        self.state = np.zeros(self.queue_length * self.no_of_queues + 2)
        self.queue_counter = np.zeros(self.no_of_queues, dtype=np.int8).tolist()
        self.customers = random.lognormal(-0.35, 0.83, self.no_customers).clip(min= 0.1, max=5)
        self.arrival_time = random.exponential(self.net_flow_out_rate, self.no_customers)
        self.queues = np.zeros((4, self.queue_length))
        self.total_waiting_time = 0
        self.waiting_list = []
        self.customer_counter = 0
        self.collected_reward = 0
        self.state[-1] = 1
        self.state[-2] = self.customers[0]
        #self.state[-1] = self.customers[0]
        return self.state