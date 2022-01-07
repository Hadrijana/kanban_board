import Card from "./Card.js";
import AddCardForm from "./AddCardForm.js";
import AddCardButton from "./AddCardButton.js";
import DroppableColumn from "./DroppableColumn.js";
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


new AddCardButton()
new DroppableColumn()



task.forEach((element) => {
  const task = new Card(element);
  task.renderCard();
});


  



