//Take the button
let btn = document.querySelector ('#button');

//Take the input
let input = document.querySelector ('#input');

//Take the list <ul>
let list = document.querySelector ('#list');

//Take the list <div> with card class
let card = document.querySelector('#card-geral');

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

        //Putting up the text in the <li> tag
        itemList.appendChild(itemText);

        //Putting up the <li> tag in the <ul> tag
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

        //Ceting a tag <span>
        let span = document.createElement('span');

        //Putting up an error id in span
        span.setAttribute('id', 'error');

        //Creating an error text
        let errorMsg = document.createTextNode('You need to type a task');

        //Putting up the error text in span
        span.appendChild(errorMsg);
        
        //Putting up span in the div
        card.appendChild(span);

    }
};

//Clearing error function
function removeErro(){
    //Getting all span tags that have the error id
    let spans = document.querySelectorAll('#error');

    //Criating aa spans list
    for(let i = 0; i < spans.length; i++){
        //Remove the child span tags from the div
        card.removeChild(spans[i]);
    }
}

//Saving new list function
function saveDataOnStorege(){
    //Putting up the tasks list in the local stora as a string
    localStorage.setItem('tasks', JSON.stringify(tasks));

}

//Deleting task function
function deleteTask(tar){

    //Remove the task af the tasks list
    tasks.splice(tasks.indexOf(tar.textContent), 1);

    ////Redering the screen
    executeList()
    
    ///Saving new list in storage
    saveDataOnStorege();
};