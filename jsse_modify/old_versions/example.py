import random

a = random.randint(4, 6)
done = False

obs = 0 #small: 0, larger:1
print(a)
intermediate_reward = 0

def step(action):    #game logic
    global done
    global intermediate_reward


    if action == a:
        done = True
    if action > a:
        intermediate_reward -= 1
        return 1, intermediate_reward, done
    elif action < a:
        intermediate_reward -= 1
        return 0, intermediate_reward, done
    else:
        return 0, intermediate_reward, done

def strategy(obs):        #player
    action = random.randint(4,6)
    return action


while not done:      #start game
    b = strategy(obs)
    obs, intermediate_reward, done = step(b)
    print(obs)
    print(" ")
    

print(intermediate_reward)


