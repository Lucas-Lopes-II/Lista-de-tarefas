//Take the button
let btn = document.querySelector ('#button');

//Take the input
let input = document.querySelector ('.from-control');

//Take the list <ul>
let list = document.querySelector ('#list');

//Take the list <div> with card class
let card = document.querySelector('.card');

//Arrey to put on the list <ul>
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//Function to render the screen
function executeList(){
    //Clearing the list
    list.innerHTML ='';

    //Listing each teask in the arrey
    for(task of tasks){
        //creating a <li> tag
        let itemList = document.createElement('li');
        
        //Setting a class atribute in the <li> tag
        itemList.setAttribute('class', 'list-group-item list-group-item-action');

        //Function to delete a item list
        itemList.onclick = function(){
            deleteTask(this);
        }

        //Creating a texto to put in the <li> tag
        let itemText = document.createTextNode(task);

        //Putting the text in the <li> tag
        itemList.appendChild(itemText);

        //Putting the <li> tag in the <ul> tag
        list.appendChild(itemList);
    };  
};

//Redering the screen
executeList();

//Click on button function
btn.onclick = function (){
    let newTask = input.value;

    //Analyze waht is in the input
    if(newTask !== ""){ //If input's not empty

        //Adding the input value in the list
        tasks.push(newTask);

        //Redering the screen
        executeList();

        //Clearing the input
        input.value = '';

        //Clearing the error menssages
        removeErro();


        //Saving new list in storage
        saveDataOnStorege();

    }else{ //If input is empty
        //Clearing the error menssages
        removeErro();

        let span = document.createElement('span');

        span.setAttribute('class', 'alert alert-warning');

        span.setAttribute('id', 'error');

        let errorMsg = document.createTextNode('You need to type a task');

        span.appendChild(errorMsg);

        card.appendChild(span);

    }
};

//Clearing error function
function removeErro(){
    let spans = document.querySelectorAll('#error');

    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    }
}

//Saving new list function
function saveDataOnStorege(){
    localStorage.setItem('tasks', JSON.stringify(tasks));

}

//Deleting task function
function deleteTask(tar){

    tasks.splice(tasks.indexOf(tar.textContent), 1);

    executeList()

    saveDataOnStorege();
};