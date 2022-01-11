import Card from "./Card.js";
import AddCardButton from "./AddCardButton.js";
import DroppableColumns from "./DroppableColumns.js";

let prom = await fetch('http://localhost:8000/tasks').then(
  res=>{  
    return res.json()
  }
)

document.querySelectorAll('[name="add"]').forEach(btn=>{
  new AddCardButton(btn)
})

new DroppableColumns()



prom.forEach((element) => {
  const task = new Card(element);
  task.renderCard();
});


  



