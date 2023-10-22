import numpy as np
import random
a = np.array(['♢','♣','♤','♥'])
b = np.array(['2','3','4','5','6','7','8','9','10','J','Q','K','A'])

cards = np.arange(0,52)
np.random.shuffle(cards)

hand = [[],[],[],[],[],[]]
for i in range(36):
    hand[i%6] = np.append(hand[i%6],cards[i])

for i in range(6):
    print("player ",i)
    for j in range(6):
        print(a[int(hand[i][j]%4)],b[int(hand[i][j]//4)])
c = cards[36]
print("good card",a[int(c%4)],b[int(c//4)])


player = 0
firstplayer = 0
card = [0,0,0,0,0,0]
for i in range(6,0,-1):
    card[player] = hand[player][0]
    print('player ',player,':',a[int(card[player]%4)],b[int(card[player]//4)])
    hand[player] = np.delete(hand[player],0)
    
    player+=1
    if(player==6):
        player = 0
    while (player!=firstplayer):
        exist = False
        for j in range(i):
            if(card[firstplayer]%4==hand[player][j]%4):
                card[player] = hand[player][j]
                hand[player] = np.delete(hand[player],j)
                exist = True
                break
        if(not exist):
            card[player] = hand[player][0]
            hand[player] = np.delete(hand[player],0)
        print('player ',player,':',a[int(card[player]%4)],b[int(card[player]//4)])
        player+=1
        if(player==6):
            player = 0
    
    value = 0
    for i in range(6):
        if(card[i]%4==c%4):
            if((100 + card[i]//4)>value):
                bestcard = i
                value = 100 + card[i]//4
        elif(card[i]%4==card[firstplayer]%4):
            if((card[i]//4)>value):
                bestcard = i
                value = card[i]//4
    print('player ',bestcard,' won with ',a[int(card[bestcard]%4)],b[int(card[bestcard]//4)])
    firstplayer = bestcard
    player = bestcard
    
    
            
                







