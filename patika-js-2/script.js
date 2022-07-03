let btnDOM = document.querySelector("#liveToastBtn");
let listDOM = document.querySelector("#list");
let taskDOM = document.querySelector("#task");
let todoItemList = document.getElementsByTagName("li");

for(let i = 0; i < todoItemList.length; i++) {
    let closeButton = document.createElement("span");
    closeButton.textContent = "X";
    closeButton.classList.add("close");
    closeButton.onclick = removeItem;
    todoItemList[i].append(closeButton);
    todoItemList[i].onclick = check;
}

btnDOM.addEventListener('click', addItem);

function removeItem() {
    this.parentElement.remove();
}

function check() {
    this.classList.toggle("checked");
}

function addItem() {
    if(taskDOM.value == "") {
        $(".error").toast("show");
    } else {
        $(".success").toast("show");
        let liDOM = document.createElement("li");  
        liDOM.innerHTML = task.value;
        liDOM.onclick = check;
        let closeButton = document.createElement("span");
        closeButton.textContent = "X";
        closeButton.classList.add("close");
        closeButton.onclick = removeItem;
        liDOM.append(closeButton);
        listDOM.appendChild(liDOM);
        inputElement.value = ("");
        taskDOM.value = "";
    }
    
}
