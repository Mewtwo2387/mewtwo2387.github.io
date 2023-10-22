from seirsplus.models import *
from seirsplus.networks import *
from seirsplus.sim_loops import *
from seirsplus.utilities import *
import networkx
import matplotlib.pyplot as pyplot

household_data = {
                   'age_distn':{'0-9': 0.121, '10-19': 0.131, '20-29': 0.137, '30-39': 0.133, '40-49': 0.124, '50-59': 0.131, '60-69': 0.115, '70-79': 0.070, '80+'  : 0.038  },
                   'household_size_distn':{ 1: 0.284, 2: 0.345, 3: 0.151, 4: 0.128, 5: 0.058, 6: 0.023, 7: 0.011 },
                   'household_stats':{ 'pct_with_under20': 0.337,                      # percent of households with at least one member under 60
                                       'pct_with_over60': 0.380,                       # percent of households with at least one member over 60
                                       'pct_with_under20_over60':  0.034,              # percent of households with at least one member under 20 and at least one member over 60
                                       'pct_with_over60_givenSingleOccupant': 0.110,   # percent of households with a single-occupant that is over 60
                                       'mean_num_under20_givenAtLeastOneUnder20': 1.91 # number of people under 20 in households with at least one member under 20
                                     }
                 }

numNodes = 10
INIT_EXPOSED = 1
#baseGraph,individualAgeBracketLabels, households    = generate_demographic_contact_network(N=numNodes, demographic_data=household_data, 
#distancing_scales=[0.7], isolation_groups=[])

demographic_graphs, individual_ageGroups, households = generate_demographic_contact_network(
                                                            N=numNodes, demographic_data=household_country_data('US'), 
                                                            distancing_scales=[0.7], isolation_groups=[])
#SEE HOW TO SET DIFFERENT AGE GROUP

print('aaaa')
G_baseline   = demographic_graphs['baseline']
G_quarantine = demographic_graphs['distancingScale0.7']

households_indices = [household['indices'] for household in households]
network_info(G_baseline, "Baseline", plot=True)
print('bbbb')
#model = SEIRSNetworkModel(G=G_normal, beta=1, gamma=0.01, sigma=1, initE=1,xi=0.1)


steps = 10
running = True
while(running and model.t < steps):
   print('cccc')
   running = model.run_iteration()



