import gym
from gym.spaces import Box,Discrete
from gym import Env
from matplotlib.font_manager import list_fonts
import numpy as np
class Elevator(Env):
    def __init__(self,floors=5,lifts=3,transport_t=2,stop_t=2,person_t=1,max_load=15,exit_rate=[1,1,1,1,1],enter_rate=5):
        self.no_floors = floors 
        self.no_lifts = lifts
        self.action_space = [Discrete(self.no_floors) for _ in range(self.no_lifts)]
        self.observation_space = Box(low=0, high=self.no_floors, shape=(self.no_lifts+self.no_floors))
        self.transport_t = transport_t
        self.stop_t = stop_t
        self.person_t = person_t
        self.max_load = max_load
        self.exit_rate = exit_rate
        self.enter_rate = enter_rate
        self.lift_location = np.zeros(lifts)
        self.lift_direction = np.full(lifts,False)
        self.people_waiting = np.zeros(floors)
        self.time = 0
    

    def _get_obs(self):
        return {}
    

    def step(self,action):
        done = False
        self.time+=1
        for i in range(self.no_lifts):
            if(action[i]>self.lift_location[i]):
                self.lift_location[i]+=1
            elif(action[i]<self.lift_location[i]):
                self.lift_location[i]-=1
            else:
                ...


        obs = ...
        reward = ...

        info = {}
    

    def action(self):
        ...
    
