const usertoDofield = document.getElementById("usertodo");
const addButton = document.getElementById("addbutton");
const userInputtodo = document.getElementById("userinput_todo");
let usertoDo;
let finaltodolist;
let todolist = [];

    
addButton.addEventListener("click", ()=>{
    if(usertoDofield.value){                      
    usertoDo = usertoDofield.value;
    todolist.push(usertoDo);
    usertoDofield.value="";
    for(const element of todolist){
        finaltodolist = element.toUpperCase();
    }
    const userinput_todo_list = document.createElement("li");
    userInputtodo.appendChild(userinput_todo_list);
    userinput_todo_list.textContent = `${finaltodolist}`;
    }else{
        alert("Kindly enter your To-Do list!");
    }
});

/*Values from the field will get push into the main todolist array. The last element of that array will stored in the 
finaltodolist which also converts it to the uppercase. Then it will reflect in the display.*/