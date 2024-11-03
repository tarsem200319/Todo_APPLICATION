document.addEventListener("DOMContentLoaded",function(){
    let input = document.querySelector("input");
    let button = document.querySelector("button");
    let list = document.querySelector(".list");

    button.addEventListener("click",function(){
        if(input.value.trim() !== ""){
            let newList = document.createElement("li");
            let span = document.createElement("span");
            span.innerText = input.value;
            newList.appendChild(span);
            let deleteButton=document.createElement("span");
            deleteButton.innerHTML=`<i class="fa-solid 
            fa-trash"></i>`;
            deleteButton.className = "delete-Btn";
            newList.appebdChild(deleteButton)
            list.appendChild(newList)
        }
    })
})