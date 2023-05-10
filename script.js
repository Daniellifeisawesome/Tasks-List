const addBtn = document.querySelector('.add');
const input = document.querySelector('.inp-group');
function removeInput() {
    this.parentElement.remove();
}

function addInput(){
    const name = document.createElement("input");
    name.type = "text";
    let thisInput = document.querySelector('input');
    name.innerHTML = `<input type = "text" value = "${thisInput.value}">`;


    

    const btn = document.createElement("button");
    btn.className = "delete";
    btn.innerHTML = "&times";
    
    const remover = document.querySelector(".remove");
    btn.addEventListener("click",removeInput);

    const flex = document.createElement("div");
    flex.className = "flex";

    input.appendChild(flex);
    flex.appendChild(name);
    flex.appendChild(btn);
    btn.addEventListener("mouseover",(e)=> {
        e.target.style.backgroundColor = "purple";
    });
    btn.addEventListener("mouseout" , (e)=> {
        e.target.style.backgroundColor = "white";
    });
}

addBtn.addEventListener('click' , addInput);


// const sortBtn = document.querySelector(".sort");
// sortBtn.addEventListener("click" , (e) => {

// });
