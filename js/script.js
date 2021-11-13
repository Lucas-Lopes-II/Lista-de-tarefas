let btn = document.querySelector ('#button');

let input = document.querySelector ('.from-control').value;

let text = '';

let list = document.querySelector ('#lista')

let tasks = ['jogar bola', 'estudar inglês', 'estudar java script']

function executeList(){
    list.innerHTML ='';

    for(task of tasks){
        let itemlist = document.createElement('li')
    };

    itemList.setAttribute('class', 'list-group-item list-group-item-action');

    itemList.onclick = function(){
        deleteTask();
    }
}

btn.onclick = function () {

}

function enputyInput(){
    if(input == ''){
        document.createAttribute('li');

        
    }
}

function deletTask(tar){
    
}