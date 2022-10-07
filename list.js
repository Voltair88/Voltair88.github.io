// Language: javascript
function list() {
  const addlist = document.getElementById("addlistitem");
  const list = document.getElementById("list");
  const input = document.getElementById("input");
  const add = document.getElementById("addlist");

  add.onclick = () => {
    const li = document.createElement("li");
    li.setAttribute("id", "listitem" + list.children.length);
    li.innerHTML = input.value;
    list.appendChild(li);
    input.value = "";
    input.focus();
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete");
    deleteButton.innerHTML = "Delete";
    li.appendChild(deleteButton);
    deleteButton.onclick = () => {
      li.parentNode.removeChild(li);
      localStorage.setItem("list", list.innerHTML);
      console.log("delete");
    };
    localStorage.setItem("list", list.innerHTML);
  };

  for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].onclick = () => {
      const li = deleteButton[i].parentElement;
      li.parentNode.removeChild(li);
      localStorage.setItem("list", list.innerHTML);
      console.log("delete");
    };
  }

  // load delete button from localstorage and add event listener
  deleteButton = document.getElementsByClassName("delete");

  for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].onclick = () => {
      const li = deleteButton[i].parentElement;
      li.parentNode.removeChild(li);
      localStorage.setItem("list", list.innerHTML);
      console.log("delete");
    };
  }

  if (localStorage.getItem("list")) {
    list.innerHTML = localStorage.getItem("list");
  }
}

list();
