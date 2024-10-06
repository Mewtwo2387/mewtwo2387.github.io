let currentCourse = 'year1';

function switchCourse(course) {
    currentCourse = course;
    setActiveTab(course);
    document.getElementById('table').innerHTML = loadCourseData(course);
    loadCourseScore(course);
}

function setActiveTab(course) {
    const tabs = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    document.getElementById(course).classList.add('active');
}

function loadCourseData(course) {
    const data = modulesData[course];
    html = "<tr><th>Module</th><th>Tasks</th><th>Score</th></tr>"
    for(const module of data.modules){
        for(const task of module.tasks){
            if(task.id=='a'){
                html += `<tr><td rowspan="${module.tasks.length}"><span class="module">${module.name}</span><br><span class="small">(${module.credits} credits - ${(module.credits/data.totalCredits*100).toFixed(2)}%)</span><br><b id="p${module.id}">0.00%</b><br><br><div class="progress-bar"><div class="progress-bar-inner" style="width:0%" id="${'b'+module.id}"></div></div><span class="small" id="${'m'+module.id}">--/100% of module</span><br><span class="small" id="${'a'+module.id}">--/--% of all</span><div class="progress-bar"><div class="progress-bar-inner" style="width:0%" id="${'bc'+module.id}"></div></div><span class="small" id="${'mc'+module.id}">--/--% of module</span><br><span class="small" id="${'ac'+module.id}">--/--% of all</span></td>`
            }else{
                html += `<tr>`
            }
            html += `<td class="${task.type}">${task.name}<br><span class="small">(${(task.weight*100).toFixed(2)}%)</span><br><span class="small">(${task.date})</span></td><td><input type="number" min="0" max="${task.maxScore}" id="${'i'+module.id+task.id}" onchange="update()"> /${task.maxScore}<div class="progress-bar"><div class="progress-bar-inner" style="width:0%" id="${'b'+module.id+task.id}"></div></div><span class="small" id="${'t'+module.id+task.id}">--/100% of task</span><br><span class="small" id="${'m'+module.id+task.id}">--/100% of module</span><br><span class="small" id="${'a'+module.id+task.id}">--/100% of all</span></td></tr>`
        }
    }
    return html
}

function loadCourseScore(course) {
    const data = modulesData[course];
    if(localStorage[course]!=undefined){
        scores = JSON.parse(localStorage[course])
        for(const module of data.modules){
            for(const task of module.tasks){
                id = module.id + task.id
                document.getElementById('i' + id).value = scores[id]
            }
        }
    }
    update()
}

function saveCourseScore(course){
    scores = {}
    const data = modulesData[course];
    for(const module of data.modules){
        for(const task of module.tasks){
            id = module.id + task.id
            scores[id] = document.getElementById('i' + id).value
        }
    }
    localStorage[course] = JSON.stringify(scores)
}

function fixScore(){
    if(localStorage['year1'] == undefined && localStorage['scores'] != undefined){
        localStorage['year1'] = localStorage['scores']
        localStorage.removeItem('score')
    }
}

// updates the progress bars and calculates the average grade
function update(){
    const data = modulesData[currentCourse];
    totalpercent = 0
    totalcomplete = 0
    for(const module of data.modules){
        moduletotal = 0
        modulecomplete = 0
        for(const task of module.tasks){
            id = module.id + task.id
            console.log(id)
            taskpercent = ((document.getElementById('i' + id).value / document.getElementById('i' + id).max) * 100);
            modulepercent = taskpercent * task.weight;
            moduletotal += modulepercent;
            if(modulepercent!=0){modulecomplete += task.weight}
            allpercent = modulepercent * module.credits/data.totalCredits;
            document.getElementById('b' + id).style.width = taskpercent + '%';
            document.getElementById('t' + id).innerHTML = `${taskpercent.toFixed(2)}/100% of task`
            document.getElementById('m' + id).innerHTML = `${modulepercent.toFixed(2)}/${(task.weight*100).toFixed(2)}% of module`
            document.getElementById('a' + id).innerHTML = `${allpercent.toFixed(2)}/${(task.weight*module.credits/data.totalCredits*100).toFixed(2)}% of all`
        }

        document.getElementById('b' + module.id).style.width = moduletotal + '%';
        moduleallpercent = moduletotal * module.credits/data.totalCredits
        document.getElementById('m' + module.id).innerHTML = `${moduletotal.toFixed(2)}/100% of module`
        document.getElementById('a' + module.id).innerHTML = `${moduleallpercent.toFixed(2)}/${(module.credits/data.totalCredits*100).toFixed(2)}% of all`


        if(modulecomplete==0){
            modulecompletepercent = 0
        }else{
            modulecompletepercent = moduletotal / modulecomplete
        }

        document.getElementById('bc' + module.id).style.width = modulecompletepercent + '%';
        moduletotalall = moduletotal * module.credits/data.totalCredits
        modulecompleteall = modulecomplete * module.credits/data.totalCredits
        totalpercent += moduletotalall
        totalcomplete += modulecompleteall
        document.getElementById('mc' + module.id).innerHTML = `${moduletotal.toFixed(2)}/${(modulecomplete*100).toFixed(2)}% of module (completed tasks only)`;
        document.getElementById('ac' + module.id).innerHTML = `${moduletotalall.toFixed(2)}/${(modulecompleteall*100).toFixed(2)}% of all (completed tasks only)`;
        document.getElementById('p' + module.id).innerHTML = `${modulecompletepercent.toFixed(2)}%`
    }
    if(totalcomplete==0){
        document.getElementById("avggrade").innerHTML = 'Current Average: 0.00%'
        document.getElementById("totalcompletepercentbar").style.width = '0.00%'
    }else{
        document.getElementById("avggrade").innerHTML = `Current Average: ${(totalpercent / totalcomplete).toFixed(2)}%`
        document.getElementById("totalcompletepercentbar").style.width = `${(totalpercent / totalcomplete).toFixed(2)}%`
    }

    document.getElementById("totalpercent").innerHTML = `${totalpercent.toFixed(2)}% / 100% Total`
    document.getElementById("totalpercentbar").style.width = `${totalpercent.toFixed(2)}%`
    document.getElementById("totalcompletepercent").innerHTML = `${totalpercent.toFixed(2)}% / ${(totalcomplete*100).toFixed(2)}% Completed`

    saveCourseScore(currentCourse);
}

window.onload = function() {
    fixScore();
    switchCourse(currentCourse);
}