let item = document.querySelector("#item");
let toDoBox = document.querySelector("#to-do-box");
 
item.addEventListener(
    "keyup",
        function(event)
        {
         if(event.key == "Enter")
         {
          //console.log (this.value);
          addToDo(this.value)
          this.value ="";
         }
        }
)


const addToDo = (item) => {
 
    let listItem = document.createElement("li");
 /*
    let items = [];
    items.push(item);
    for(let i = 0; i <= items.length; i++)
    {
        listItem.innerHTML= `
        ${item}
       <i class="fas fa-trash-alt"></i> `;
    }
*/

    let items = [item];
       
    localStorage.setItem('item',JSON.stringify(items));
    items.push(item);
     items = JSON.parse(localStorage.getItem('item'));
    
    
             
    listItem.innerHTML= `
        ${item}
       <i class="fas fa-trash-alt"></i> `;
    
      

    listItem.querySelector("i").addEventListener(
        "click",

        function (){
            listItem.remove(localStorage.removeItem('item'));
        
        }
     )
      
    toDoBox.appendChild(listItem);


}