from flask import Flask, redirect, url_for, render_template, request
from lib import dqn_model
import numpy as np
import torch
import torch.nn as nn
import time

no_of_queues = 4
max_queue_length = 100
m = 0.6/5
c_cash = 0.4
c_card = 0.3
assigned = 0
start_time = time.time()
final_time = time.time()
time_scale = 50

app = Flask(__name__)

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
net.load_state_dict(torch.load('dueling_dqn200_14000000.pt', map_location=torch.device('cpu')))

queues = np.zeros((no_of_queues, max_queue_length))
queue_counter = np.zeros(no_of_queues, dtype=np.int8).tolist()
customer_counter = 0

@app.route("/", methods=["POST", "GET"])  # this sets the route to this page
def home():
    global start_time
    if request.method == "POST" and request.form["nm"] != " ":
        update_queue()
        start_time = time.time()
        number_of_items = request.form["nm"]
        if request.form["payment"] == "cash":
            estimated_time = cal_ex_time(number_of_items, c_cash)
        else:
            estimated_time = cal_ex_time(number_of_items, c_card)
        action = assign_queue(estimated_time).item()
        push(estimated_time,action)
        #print(number_of_items)
        #print(request.form["payment"])
        #print(queues)
        print([a[:5] for a in queues])
        return redirect(url_for("user", action=action))
    elif request.method == "GET":
        return render_template("index.html")

def cal_ex_time(no_of_items, constant):
    return int(no_of_items)*m + constant

def assign_queue(estimeated_time):
    with torch.no_grad():
        state = torch.tensor(create_state(estimeated_time))
        q_values = net.forward(state)
        #print(q_values)
        #print([a[:5] for a in queues])

    return np.argmax(q_values)

def create_state(estimeated_time):
    return [np.concatenate((queues.flatten(),[estimeated_time, customer_counter]))]

def update_queue():
    for i in range(no_of_queues):

        if queues[i][0] > 0:
            queues[i][0] -= (time.time() - start_time)/time_scale

        while queues[i][0] < 0:
            negative = queues[i][0]
            queues[i] = np.append(np.delete(queues[i], 0), 0)
            queue_counter[i] -= 1
            if queues[i][0] > 0:
                queues[i][0] += negative

def push(ex_time, action):
    #self.total_waiting_time += np.sum(self.queues[action])
    #self.waiting_list.append(np.sum(self.queues[action]))
    queues[action][queue_counter[action]] = ex_time
    queue_counter[action] += 1

@app.route("/<action>")
def user(action):
    #image_index = np.random.randint(low=0, high=4)
    file = url_for('static', filename= f"images/meow{action}.jpeg")
    return render_template("result.html", action= action, filename= file)

"""
@app.after_request
def add_header(response):
    response.headers['Pragma'] = 'no-cache'
    response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    response.headers['Expires'] = '0'
    return response
"""

if __name__ == "__main__":
    app.run(port=3000)


