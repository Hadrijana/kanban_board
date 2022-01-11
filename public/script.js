import Card from "./Card.js";
import AddCardForm from "./AddCardForm.js";
import AddCardButton from "./AddCardButton.js";
import DroppableColumns from "./DroppableColumns.js";
let counter = 0;

let task = [];

const loadData = () => {
  let keys = Object.keys(localStorage);
  task = keys.map((key) => {
    counter++;
    return JSON.parse( localStorage.getItem(key));
  });
};

loadData();

//new AddCardForm(counter);

document.querySelectorAll('[name="add"]').forEach(btn=>{
  new AddCardButton(btn)
})

new DroppableColumns()



task.forEach((element) => {
  const task = new Card(element);
  task.renderCard();
});


  



