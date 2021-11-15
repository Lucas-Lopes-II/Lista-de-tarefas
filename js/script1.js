//Take the button
let btn = document.querySelector ('#button');

//Take the input
let input = document.querySelector ('.from-control');

//Take the list <ul>
let list = document.querySelector ('#list');

//Arrey to put on the list <ul>
let tasks = ['jogar bola', 'estudar inglês', 'estudar java script'];

//Functio to render the screen
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
    let newTask = input.value

    //Analyze waht is in the input
    if(newtask !== ""){ //If input's not empty

        //Adding tra input value in the list
        list.push(newTask);

        //Redering the screen
        executeList();

        //Clearing the input
        input.value = '';

        //Clearing the error menssages
        removeErro();


        //Saving new list in storage
        saveDataOnStorege();

    }else{ //If input is empty
        ////Clearing the error menssages
        removeErro();


    }
};

//Clearing error function
function removeErro(){

}

//Saving new list function
function saveDataOnStorege(){

}

//Deleting task function
function deleteTask(tar){
    
};