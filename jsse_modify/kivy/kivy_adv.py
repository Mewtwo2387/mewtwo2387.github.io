import kivy
from kivy.app import App
from kivy.uix.widget import Widget
from kivy.properties import ObjectProperty
from kivy.uix.label import Label
from kivy.uix.floatlayout import FloatLayout
from kivy.uix.anchorlayout import AnchorLayout
from kivy.uix.popup import Popup
from kivy.app import App
from kivy.lang import Builder
from kivy.uix.screenmanager import ScreenManager, Screen
from kivy.properties import ObjectProperty
from kivy.core.window import Window
from lib import dqn_model
import numpy as np
import torch
import torch.nn as nn
from kivy.uix.checkbox import CheckBox
import time

#Window.fullscreen = True
no_of_queues = 4
max_queue_length = 100
ex_time = 0
m = 2
c = 2
assigned = 0
start_time = time.time()
final_time = time.time()
class DuelingDQN(nn.Module):
    def __init__(self, input_shape, n_actions):
        super(DuelingDQN, self).__init__()

        self.conv = nn.Sequential(
            nn.Linear(input_shape[0], 64),
            nn.ReLU(),
            #nn.Linear(input_shape[0], 32),
            #nn.ReLU(),
        )

        self.fc_adv = nn.Sequential(
            nn.Linear(64, 32),
            nn.ReLU(),
            nn.Linear(32, n_actions)
        )
        self.fc_val = nn.Sequential(
            nn.Linear(64, 32),
            nn.ReLU(),
            nn.Linear(32, 1)
        )


    def forward(self, x):
        fx = x.float() / 5
        conv_out = self.conv(fx).view(fx.size()[0], -1)
        val = self.fc_val(conv_out)
        adv = self.fc_adv(conv_out)
        return val + (adv - adv.mean(dim=1, keepdim=True))


net = DuelingDQN([no_of_queues* max_queue_length + 2], no_of_queues)
net.load_state_dict(torch.load('dueling_dqn1.pt'))

queues = np.zeros((no_of_queues, max_queue_length))
queue_counter = np.zeros(no_of_queues, dtype=np.int8).tolist()
customer_counter = 0

class MainGrid(Widget):
    items = ObjectProperty(None)

    def process(self):
        global ex_time
        global assigned
        global customer_counter
        global net


        ex_time = self.cal_ex_time()
        assigned = self.assign_queue()
        return P().open()

    def cal_ex_time(self):
        global m
        global c

        return int(self.items.text)*m + c

    def assign_queue(self):
        #state = torch.tensor(self.create_state()).detach().numpy()
        #q_values = net.forward(state)
        with torch.no_grad():
            state = torch.tensor(self.create_state())
            q_values = net.forward(state)
            print(q_values)
            print([a[:10] for a in queues])

        return np.argmax(q_values)

    def create_state(self):
        return [np.concatenate((queues.flatten(),[ex_time, customer_counter]))]

class P(Popup):
    def __init__(self):
        global assigned
        global queues
        global no_of_queues
        global time
        global queue_counter
        global ex_time

        global start_time
        global final_time

        super().__init__()
        self.ids.queue_no.text = f"Please go to queue number {assigned}"
        print(start_time)
        print(time.time() - start_time)

    def restore(self):
        pass
    def reset(self):
        global start_time
        self.update_queue()
        self.push(assigned)
        start_time = time.time()
    def update_queue(self):

        for i in range(no_of_queues):

            if queues[i][0] > 0:
                queues[i][0] -= time.time() - start_time

            while queues[i][0] < 0:
                negative = queues[i][0]
                queues[i] = np.append(np.delete(queues[i], 0), 0)
                queue_counter[i] -= 1
                if queues[i][0] > 0:
                    queues[i][0] += negative

    def push(self, action):
        #self.total_waiting_time += np.sum(self.queues[action])
        #self.waiting_list.append(np.sum(self.queues[action]))
        queues[action][queue_counter[action]] = ex_time
        queue_counter[action] += 1


class AdvApp(App):
    def build(self):
        return MainGrid()




if __name__ == "__main__":
    AdvApp().run()