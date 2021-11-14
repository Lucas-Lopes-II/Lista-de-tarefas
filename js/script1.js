let btn = document.querySelector ('#button');

let input = document.querySelector ('.from-control');

let list = document.querySelector ('#list');

let tasks = ['jogar bola', 'estudar inglês', 'estudar java script'];

function executeList(){
    list.innerHTML ='';

    for(task of tasks){
        let itemList = document.createElement('li');

        itemList.setAttribute('class', 'list-group-item list-group-item-action');

        itemList.onclick = function(){
            deleteTask(this);
        }

        let itemText = document.createTextNode(task);

        itemList.appendChild(itemText);

        list.appendChild(itemList);
    };  
};

executeList();

btn.onclick = function (){
    let newTask = input.value

    if(newtask !== ""){
        list.push(newTask);

        executeList();

        input.value = '';

        removeErro();

        saveDataOnStorege();

    }else{
        removeErro();


    }
};


function removeErro(){

}

function saveDataOnStorege(){

}

function enputyInput(){
    if(input == ''){
        document.createAttribute('li');

        
    }
};

function deleteTask(tar){
    
};