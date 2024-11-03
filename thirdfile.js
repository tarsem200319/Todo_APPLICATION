document.addEventListener("DOMContentLoaded",function(){
    input = document.querySelector("input");
    button = document.querySelector("button");
    list = document.querySelector(".list");

    button.addEventListener("click",function(){
        if(input.value.trim() !== ""){
            let newList = document.createElement("li");
            let span = document.createElement("span");
            span.innerText = input.value;
            newList.appendChild(span);

            List.appendChild(newList);
        }
    })
})