from multiprocessing.sharedctypes import Value
import networkx as nx
import matplotlib.pyplot as plt
import random
import numpy as np
import math
firstvaccine = 0
secondvaccine = 0
def action(vaccine_prob):
    global vaccines_per_day
    global group
    global indi_para
    global firstvaccine
    global secondvaccine
    vaccine_per_group = []
    for i in range(len(vaccine_prob)):
        try:
            size = min(math.floor(vaccines_per_day*vaccine_prob[i]), len(group[i]))
            chosen = np.random.choice(group[i],size= math.floor(vaccines_per_day*vaccine_prob[i]),replace=False)
        except ValueError as e:
            continue

        for j in chosen:
            if indi_para[j][5]==0:
                firstvaccine+=1
                #print(j, ' took first vaccine (',firstvaccine,' people took first vaccine)')
                indi_para[j][0] = 0.48
                indi_para[j][3] = 0.5
                indi_para[j][5] = 1
                indi_para[j][7] = 0.015
            elif indi_para[j][5]==1:
                secondvaccine+=1
                #print(j, ' took second vaccine (',secondvaccine,' people took second vaccine)')
                indi_para[j][0] = 0.05
                indi_para[j][3] = 0.2
                indi_para[j][5] = 2
                indi_para[j][7] = 0.01
                group[i].remove(j)

                
            

    

def update():
    global Infected
    global I
    global H
    global U
    global T
    global indi_para
    global G
    global N
    global Deaths
    global TotalI
    for i in range(N):
        if(Infected[i]=='T'):
            for j in G.edges(i):
                if(random.uniform(0,1)<= (indi_para[i][3] * indi_para[j[1]][0] * 0.2) and (Infected[j[1]]=='H')):
                    Infected[j[1]] = 'I'
                    I+=1
                    TotalI+=1
                    H-=1
                    #print(i,' infected ', j[1] , '(Healthy:',H,' Infected:' ,I,', Can trasmit:',T,', Uninfected:', U,')')
            if(random.uniform(0,1)<=indi_para[i][2]):
                Infected[i] = 'U'
                U+=1
                T-=1
                I-=1
                #print(i , 'uninfected (Healthy:',H,' Infected:' ,I,', Can trasmit:',T,', Uninfected:', U,')')
            elif(random.uniform(0,1)<=indi_para[i][7]):
                Infected[i] = 'D'
                I-=1
                T-=1
                Deaths+=1
                #print(i , 'died (Healthy:',H,' Infected:' ,I,', Can trasmit:',T,', Uninfected:', U,')')
        elif(Infected[i]=='I'):
            if(random.uniform(0,1)<=indi_para[i][1]):
                Infected[i] = 'T'
                T+=1
                #print(i , 'can now transmit virus (Healthy:',H,' Infected:' ,I,', Can trasmit:',T,', Uninfected:', U,')')
            elif(random.uniform(0,1)<=indi_para[i][7]):
                Infected[i] = 'D'
                I-=1
                Deaths+=1
                #print(i , 'died (Healthy:',H,' Infected:' ,I,', Can trasmit:',T,', Uninfected:', U,')')
        elif(Infected[i]=='U'):
            if(random.uniform(0,1)<=indi_para[i][6]):
                Infected[i] = 'H'
                H+=1
                U-=1
                #print(i , 'can now be infected again (Healthy:',H,' Infected:' ,I,', Can trasmit:',T,', Uninfected:', U,')')
                

G = nx.Graph()

#G.add_edges_from(
#    [('A', 'B'), ('A', 'C'), ('D', 'B'), ('E', 'C'), ('E', 'F'),
#     ('B', 'H'), ('B', 'G'), ('B', 'F'), ('C', 'G')])
#
#val_map = {'A': 1.0,
#           'D': 0.5714285714285714,
#           'H': 0.0}
#
#values = [val_map.get(node, 0.25) for node in G.nodes()]
#
# Specify the edges you want here
#red_edges = [('A', 'C'), ('E', 'C')]



N = 1000 #number of peepos
I = 10 #initial infected peepos
T = 0 #initial peepo that can infect others
U = 0 #initial amount of peepo uninfected
H = N - I - T - U #initial amount of healthy peepo
Deaths = 0
TotalI = 0
vaccines_per_day = 10

number_of_groups = 3
Ci = [1, 1, 1] #infect chance per day if connected (H -> E)
Ct = [0.2, 0.2, 0.2] #chance of E -> I per day
Cu = [0.2, 0.2, 0.2] #uninfected chance per day (I -> U)
Cs = [1, 1, 1]    
Ch = [0.03, 0.03, 0.03] #U -> H
Cd = [0.02,0.02,0.02]

D = 1000
#number of days of simulation
group_prob = [0.3,0.6,0.1]
group_color = ['red','green','blue']
group_connect_prob = [[0.002, 0.0003, 0.0001],
                      [0.0003, 0.001, 0.0001],
                      [0.0001, 0.0001, 0.0005]]

#node_group = []
indi_para = np.zeros((N,8))
#0: Ci, 1: Ct, 2: Cu, 3: Cs, 4: Group, 5: Vaccines, 6: Ch, 7: Cd
group = [[], [], []]

colors = []
G.add_nodes_from(range(N))
"""
for i in range(N):
    a = random.uniform(0,1)
    for j in range(len(group_prob)):
        if(a<=group_prob[j]):
            node_group.append(j)
            colors.append(group_color[j])
            break
        else:
            a -= group_prob[j]
"""

for i in range(N):
    a = random.uniform(0,1)
    for j in range(len(group_prob)):
        if(a<=group_prob[j]):
            indi_para[i][4] = j
            indi_para[i][0] = Ci[j]
            indi_para[i][1] = Ct[j]
            indi_para[i][2] = Cu[j]
            indi_para[i][3] = Cs[j]
            indi_para[i][6] = Ch[j]
            indi_para[i][7] = Cd[j]
            colors.append(group_color[j])
            group[j].append(i)
            break
        else:
            a -= group_prob[j]




for i in range(N):
    for j in range(N):
        if(random.uniform(0,1)<=group_connect_prob[int(indi_para[i][3])][int(indi_para[j][3])] and i!=j):
            G.add_edges_from([(i,j)])
    

red_edges = []




edge_colours = ['black' if not edge in red_edges else 'red' for edge in G.edges()]
black_edges = [edge for edge in G.edges() if edge not in red_edges]
#print(G.edges())
pos = nx.circular_layout(G)

"""
nx.draw_networkx_nodes(G, pos, cmap=plt.get_cmap('jet'), node_size = 500, node_color=colors)
nx.draw_networkx_labels(G, pos)
nx.draw_networkx_edges(G, pos, edgelist=red_edges, edge_color='r', arrows=True)
nx.draw_networkx_edges(G, pos, edgelist=black_edges, arrows=False)
plt.show()
"""

Infected = ['T']*(T) + ['I']*(I) + ['H']*(H) +['U']*(U)
IData = [I]
TData = [T]
HData = [H]
UData = [U]
DData = [Deaths]
for days in range(D):
    #print('DAY ',days,'/',D)
    update()
    action([0.3,0.6,0.1])
    #action([0.0,0.0,0.0])

                
    IData.append(I)
    TData.append(T)
    HData.append(H)
    UData.append(U)
    DData.append(Deaths)

print('TOTAL CASE: ', TotalI)
print('DEATH: ', Deaths)
plt.plot(IData)
plt.plot(TData)
plt.plot(HData)
plt.plot(UData)
plt.plot(DData)
plt.show()
