from seirsplus.models import *
from seirsplus.networks import *
from seirsplus.sim_loops import *
from seirsplus.utilities import *

numNodes = 1000
baseGraph    = networkx.barabasi_albert_graph(n=numNodes, m=9)
G_normal     = custom_exponential_graph(baseGraph, scale=100)
G_distancing = custom_exponential_graph(baseGraph, scale=10)
# Quarantine interactions:
G_quarantine = custom_exponential_graph(baseGraph, scale=5)
model = SEIRSNetworkModel(G=G_normal, beta=0, gamma=0.01, sigma=1, initE=1000,xi=0.1)
checkpoints = {'t':[500,1500,2000,3500,4000,5500,6000,7500],'beta':[0.01,0,0.01,0,0.01,0,0.01,0],'gamma':[0,0.01,0,0.01,0,0.01,0,0.01],'xi':[0,0.1,0,0.1,0,0.1,0,0.1]}
# model = SEIRSNetworkModel(G=G_normal, beta=1, sigma=1/5.1, gamma=1/7, xi=0.1, initE=10)
# checkpoints = {'t':       [50, 100 ,200, 300, 400, 500, 600,605,610,615,620,630,800,1000,1300], 
#              'G':       [G_distancing, G_normal, G_normal, G_normal, G_normal, G_normal, G_normal, G_normal, G_normal, G_normal, G_normal, G_normal, G_normal, G_normal, G_normal], 
#              'p':       [0.1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1,1,1,1, 0.1,0], 
#              'beta':       [1, 1, 50, 10, 50, 10, 50,10,50,10,50,200,1000,10,1000],
#              'gamma':[1/7,1/7,1/7,1/7,1/7,1/7,1,1/7,1,1/7,1,10,0.01,1/7,10],
#              'xi': [0.1,0.1,0.9, 0.3, 0.9, 0.3, 2,2,2,2,2,2,1000,0.1,1000],
#              'theta_E': [0.02, 0.02, 0.02,0.02, 0.02, 0.02, 0.02, 0.02,0.02, 0.02, 0.02,0,0,0.02,0], 
#              'theta_I': [0.02, 0.02, 0.02,0.02, 0.02, 0.02, 0.02, 0.02,0.02, 0.02, 0.02,0,0,0.02,0], 
#              'phi_E':   [0.2, 0.2, 0.2,0.2, 0.2, 0.2, 0.2, 0.2,0.2, 0.2, 0.2,0.2,0.2,0.2,0.2], 
#              'phi_I':   [0.2, 0.2, 0.2,0.2, 0.2, 0.2, 0.2, 0.2,0.2, 0.2, 0.2,0.2,0.2,0.2,0.2]
#              }

model.run(T=8000, checkpoints=checkpoints)
model.figure_infections()
model.figure_basic()
cgkutc
