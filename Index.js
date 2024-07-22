const input=document.querySelector('#input-box')
const todo=document.querySelector('#to-do-box')

input.addEventListener(
    "keyup",
    function(event) {
        if(event.key=="Enter") {
            Addtodo(this.value)
            this.value="";
        }
    }
)

const Addtodo=(item)=> {
    const listitem=document.createElement("li");
    listitem.innerHTML=`
    ${item}
     <i class="fa-solid fa-xmark"></i>
    `;

    listitem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
        }

    )
    
    listitem.querySelector("i").addEventListener(
        "click",
        function() {
        listitem.remove()
        }
    )
    todo.appendChild(listitem)
}