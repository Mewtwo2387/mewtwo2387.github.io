from multiprocessing.sharedctypes import Value
import networkx as nx
import matplotlib.pyplot as plt
import random
import numpy as np
import math
import gym
from gym import Env

class Covid(Env):
    def __init__(self):
        
        self.G = nx.Graph()
        self.N = 1000 #number of peepos
        self.I = 10 #initial infected peepos
        self.T = 0 #initial peepo that can infect others
        self.U = 0 #initial amount of peepo uninfected
        self.H = self.N - self.I -self.T - self.U #initial amount of healthy peepo

        self.Deaths = 0
        self.TotalI = 0
        self.vaccines_per_day = 10 

        self.Infected = ['T']*(self.T) + ['I']*(self.I) + ['H']*(self.H) +['U']*(self.U)
        self.IData = [self.I]
        self.TData = [self.T]
        self.HData = [self.H]
        self.UData = [self.U]
        self.DData = [self.Deaths]

        self.number_of_groups = 3
        self.Ci = [1, 1, 1] #infect chance per day if connected (H -> E)
        self.Ct = [0.2, 0.2, 0.2] #chance of E -> I per day
        self.Cu = [0.2, 0.2, 0.2] #uninfected chance per day (I -> U)
        self.Cs = [1, 1, 1]    
        self.Ch = [0.03, 0.03, 0.03] #U -> H
        self.Cd = [0.02,0.02,0.02]

        self.D = 1000
        self.done = False
        self.current_D = 0
        #number of days of simulation
        self.group_prob = [0.3,0.6,0.1]
        self.group_color = ['red','green','blue']
        self.group_connect_prob = [[0.02, 0.003, 0.001],
                            [0.003, 0.01, 0.001],
                            [0.001, 0.001, 0.005]]

        self.indi_para = np.zeros((self.N,8))
        #0: Ci, 1: Ct, 2: Cu, 3: Cs, 4: Group, 5: Vaccines, 6: Ch, 7: Cd
        self.init_group = [[], [], []]

        self.colors = []
        self.G.add_nodes_from(range(self.N))


        self.firstvaccine = 0
        self.secondvaccine = 0

        for i in range(self.N):
            a = random.uniform(0,1)
            for j in range(len(self.group_prob)):
                if(a<=self.group_prob[j]):
                    self.indi_para[i][4] = j
                    self.indi_para[i][0] = self.Ci[j]
                    self.indi_para[i][1] = self.Ct[j]
                    self.indi_para[i][2] = self.Cu[j]
                    self.indi_para[i][3] = self.Cs[j]
                    self.indi_para[i][6] = self.Ch[j]
                    self.indi_para[i][7] = self.Cd[j]
                    self.colors.append(self.group_color[j])
                    self.init_group[j].append(i)
                    break
                else:
                    a -= self.group_prob[j]

        self.group = self.init_group




        for i in range(self.N):
            for j in range(self.N):
                if(random.uniform(0,1)<=self.group_connect_prob[int(self.indi_para[i][3])][int(self.indi_para[j][3])] and i!=j):
                    self.G.add_edges_from([(i,j)])
            



    def action(self, vaccine_prob):
        vaccine_per_group = []
        for i in range(len(vaccine_prob)):
            try:
                size = min(math.floor(self.vaccines_per_day*vaccine_prob[i]), len(self.group[i]))
                chosen = np.random.choice(self.group[i],size= math.floor(self.vaccines_per_day*vaccine_prob[i]),replace=False)
            except ValueError as e:
                continue

            for j in chosen:
                if self.indi_para[j][5]==0:
                    self.firstvaccine+=1
                    #print(j, ' took first vaccine (',firstvaccine,' people took first vaccine)')
                    self.indi_para[j][0] = 0.48
                    self.indi_para[j][3] = 0.5
                    self.indi_para[j][5] = 1
                    self.indi_para[j][7] = 0.015
                elif self.indi_para[j][5]==1:
                    self.secondvaccine+=1
                    #print(j, ' took second vaccine (',secondvaccine,' people took second vaccine)')
                    self.indi_para[j][0] = 0.05
                    self.indi_para[j][3] = 0.2
                    self.indi_para[j][5] = 2
                    self.indi_para[j][7] = 0.01
                    self.group[i].remove(j)

                    
                

        

    def update(self):
        for i in range(self.N):
            if(self.Infected[i]=='T'):
                for j in self.G.edges(i):
                    if(random.uniform(0,1)<= (self.indi_para[i][3] * self.indi_para[j[1]][0] * 0.2) and (self.Infected[j[1]]=='H')):
                        self.Infected[j[1]] = 'I'
                        self.I+=1
                        self.TotalI+=1
                        self.H-=1
                        #print(i,' infected ', j[1] , '(Healthy:',H,' Infected:' ,I,', Can trasmit:',T,', Uninfected:', U,')')
                if(random.uniform(0,1)<=self.indi_para[i][2]):
                    self.Infected[i] = 'U'
                    self.U+=1
                    self.T-=1
                    self.I-=1
                    #print(i , 'uninfected (Healthy:',H,' Infected:' ,I,', Can trasmit:',T,', Uninfected:', U,')')
                elif(random.uniform(0,1)<=self.indi_para[i][7]):
                    self.Infected[i] = 'D'
                    self.I-=1
                    self.T-=1
                    self.Deaths+=1
                    #print(i , 'died (Healthy:',H,' Infected:' ,I,', Can trasmit:',T,', Uninfected:', U,')')
            elif(self.Infected[i]=='I'):
                if(random.uniform(0,1)<=self.indi_para[i][1]):
                    self.Infected[i] = 'T'
                    self.T+=1
                    #print(i , 'can now transmit virus (Healthy:',H,' Infected:' ,I,', Can trasmit:',T,', Uninfected:', U,')')
                elif(random.uniform(0,1)<=self.indi_para[i][7]):
                    self.Infected[i] = 'D'
                    self.I-=1
                    self.Deaths+=1
                    #print(i , 'died (Healthy:',H,' Infected:' ,I,', Can trasmit:',T,', Uninfected:', U,')')
            elif(self.Infected[i]=='U'):
                if(random.uniform(0,1)<=self.indi_para[i][6]):
                    self.Infected[i] = 'H'
                    self.H+=1
                    self.U-=1
                    #print(i , 'can now be infected again (Healthy:',H,' Infected:' ,I,', Can trasmit:',T,', Uninfected:', U,')')

        self.IData.append(self.I)
        self.TData.append(self.T)
        self.HData.append(self.H)
        self.UData.append(self.U)
        self.DData.append(self.Deaths)

                    
    def step(self,action):
        self.action(action)
        self.update()
        self.current_D += 1
        if self.current_D == self.D or self.I == 0:
            self.done = True
        return [self.TotalI, self.Deaths], -self.TotalI - self.Deaths, self.done, {}



    def render(self):
        print('TOTAL CASE: ', self.TotalI)
        plt.plot(self.IData)
        plt.plot(self.TData)
        plt.plot(self.HData)
        plt.plot(self.UData)
        plt.plot(self.DData)
        plt.show()
        
    def reset(self):
        self.N = 1000 #number of peepos
        self.I = 10 #initial infected peepos
        self.T = 0 #initial peepo that can infect others
        self.U = 0 #initial amount of peepo uninfected
        self.H = self.N - self.I -self.T - self.U #initial amount of healthy peepo

        self.Deaths = 0
        self.TotalI = 0

        self.Infected = ['T']*(self.T) + ['I']*(self.I) + ['H']*(self.H) +['U']*(self.U)
        self.IData = [self.I]
        self.TData = [self.T]
        self.HData = [self.H]
        self.UData = [self.U]
        self.DData = [self.Deaths]

        self.firstvaccine = 0
        self.secondvaccine = 0

        self.group = self.init_group











