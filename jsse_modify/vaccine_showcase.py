from enviro import environment
from numpy import random as random
import numpy as np
import torch


done = False
simulation = environment.Covid()
for days in range(simulation.D):
    #print('DAY ',days,'/',D)
    obs, reward, done, _ = simulation.step([0.3,0.3,0.4])
    if done:
        break
    #action([0.0,0.0,0.0])

simulation.render()
simulation.reset()
print(np.array(simulation.group).shape)