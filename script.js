//getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");


inputBox.onkeyup = ()=>{
    let userData = inputBox.value;//getting user entered value
    if(userData.trim() !=0 ){ //if user values aren't only spaces
        addBtn.classList.add("active");//active the add button

    }
    else{
        addBtn.classList.remove("active ")
    }
}


showTasks(); //calling show task function


//when user clicks on the add button
addBtn.onclick = () =>{
    let userData = inputBox.value;//getting user entered value
    let getLocalStorage = localStorage.getItem("New Todo");//getting localtorage
    if(getLocalStorage==null){ //if localstorage is null
        listArr = []; //creating blank array
    }
    else{
        listArr=JSON.parse(getLocalStorage);//converting json string into a js object
    }
    listArr.push(userData);//adding user data
    localStorage.setItem("New Todo",JSON.stringify(listArr)); //converting js object into a json string
    showTasks(); //calling show task function
}


// adding tasks in the list
function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo");//getting localtorage
    if(getLocalStorage==null){ //if localstorage is null
        listArr = []; //creating blank array
    }
    else{
        listArr=JSON.parse(getLocalStorage);//converting json string into a js object
    }
    let newLiTag='';
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element}<span onclick="deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag;//adding new list tag inside ul tag
    inputBox.value = "";//leave input field blank after adding task
}

//deleting the task 
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr=JSON.parse(getLocalStorage);
    listArr.splice(index,1); //delete the indexed list item
    // after removing the item updating the local storage
    localStorage.setItem("New Todo",JSON.stringify(listArr)); //converting js object into a json string
    showTasks(); //calling show task function
}