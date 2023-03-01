//submitButton
let submitFormButton = document.getElementById("actionButton");

//formField
let formField = document.getElementById("taskFormField");

//todoListContainer
let todoListsContainer = document.getElementById("todoLists");

//gettingLocalStorageValues
let stTasks = JSON.stringify(window.localStorage);

//tasksObjectfromlocalStorage
let tasks;

//forTaskId
let counterId;

//checking and initialising the tasksObject
if (stTasks === "{}"){
    tasks=[];
    counterId=0;
}else{
    //changing the overall stored string to object
    stTasks = JSON.parse(stTasks);
    stTasks=Object.values(stTasks);
    tasks = stTasks.map((item)=>{
        return JSON.parse(item);      
    });

    //taskId
    let lasteleInd = (tasks.length)-1;
    counterId = (tasks[lasteleInd].taskId)+1;

    //render
    display();
}

let fieldValue;

//submittingItem
function submitItem(){
    fieldValue = formField.value;
    if(fieldValue===""){
        alert("Kindly, Enter your Task!")
    }else{
        
        //checking new or edit value
        if(editOptionEnabled){
            tasks.find((item)=>{
                if(item.taskId === editId){
                    item.taskName = fieldValue;
                    window.localStorage.setItem(item.taskId,JSON.stringify(item));
                    editId=0;
                }
            });
            editOptionEnabled=0;
        }else{
            let task={
                taskId : counterId,
                taskName : fieldValue,
                taskStatus : "Created"
            }
            tasks.push(task);
            window.localStorage.setItem(task.taskId,JSON.stringify(task));
            counterId += 1;
        }
    }

    //rendering
    formField.value='';
    todoListsContainer.textContent="";
    display();
}


//rendering
function display(){
    todoListsContainer.textContent="";

    tasks.map((item)=>{
        let todoItem = document.createElement("div");
        todoItem.className="todoList";

        if(item.taskStatus === "Completed"){
            todoItem.classList.add("completed");
        }

        let todoItemHead = document.createElement("p");
        todoItemHead.className="todo";
        todoItemHead.textContent=item.taskName;

        let todoItemActions = document.createElement("div");
        todoItemActions.className="todoLists_actions";
        todoItemActions.dataset.todoId = item.taskId;

        todoItemActions.innerHTML = `
        <img src="assets/icons/actionComplete.svg" id="taskCompleteButton" alt="action complete button">
        <img src="assets/icons/actionEdit.svg" id="taskEditButton" alt="action edit button">
        <img src="assets/icons/actionDelete.svg" id="taskDeleteButton" alt="action delete button">
        `;

        todoItem.appendChild(todoItemHead);
        todoListsContainer.appendChild(todoItem);
        todoItem.appendChild(todoItemActions);
    });

    //clearButton
    let clearItems = document.createElement("div");
    clearItems.className="normalButton";
    clearItems.id="clearButton";
    clearItems.textContent="Clear Items";
    todoListsContainer.appendChild(clearItems);
}

//editOptionHandler
let editOptionEnabled = 0;
let editId;

todoListsContainer.addEventListener('click', (e)=>{
    let parent = e.target.parentElement;
    let todoId = parent.getAttribute("data-todo-id");

    //complete
    if(e.target.id === "taskCompleteButton"){
        tasks.find((item)=>{
            if(item.taskId === Number(todoId)){
                item.taskStatus = "Completed";
                window.localStorage.setItem(item.taskId,JSON.stringify(item));
                parent.previousElementSibling.classList.add("completed");
                e.target.style.opacity=0.5;
            }
        });
    }

    //delete
    if(e.target.id === "taskDeleteButton"){
        let num = Number(todoId);
        //deleteinLocalStorage
        tasks.find((ele)=>{
            if (ele.taskId === num){
                window.localStorage.removeItem(`${ele.taskId}`);
            }
        });

        //deleteinObject
        let pos = tasks.findIndex((ele)=>{
            return (ele.taskId === num);
        });
        tasks.splice(pos,1)
        display();
    }


    //edit
    if(e.target.id === "taskEditButton"){
        tasks.find((item)=>{
            if(item.taskId === Number(todoId)){
                formField.value = item.taskName;
                editOptionEnabled = 1;
                editId = item.taskId;
            }
        });
    }

    //clearItems
    let clearButton = document.getElementById('clearButton');

    clearButton.addEventListener('click', ()=>{
        if (confirm("Do you want to clear all the items ?") === true){
            tasks=[];
            window.localStorage.clear();
            location.reload();
        };
    });
})