const addlist = document.getElementById("addlistitem");
const list = document.getElementById("list");
const input = document.getElementById("input");
const add = document.getElementById("addlist");

add.onclick = () => {
  if (input.value === "") {
    alert("Please enter a value");
  } else {
    console.log(input.value);
    const li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    input.value = "";
  }
};
