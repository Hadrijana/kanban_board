import Card from "./Card.js";
class AddCardForm {
  constructor(cnt) {
    this.counter = cnt;
    this.addTaskBtn = document.getElementById("btn-add-task");
    this.addTaskBtn.addEventListener("click", this.addTask);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const color = document.querySelector('input[name="color"]:checked').value
    const task = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        id: this.counter,
        column: "to-do-list",
        color: color
      }

    const card = new Card(task);
    
      
    card.renderCard();
   
    //document.getElementById(this.counter).style.backgroundColor = color;
    

    localStorage.setItem(
      this.counter,
      JSON.stringify(task)
    );

    this.counter++;
  
    document.getElementById("add-form").remove();
  };

  addTask = () => {
    parent = document.getElementById("to-do-list");

    const form = `<form class="task" id="add-form"> 
                        <textarea rows ="2" id="title" cols = "18" placeholder="Title" ></textarea>
                        <textarea rows ="6" id="description" cols = "18" placeholder="Description" ></textarea>
                        <div>
                            <input type="radio" id="pink" name="color" value="#964f4cff" checked>
                            <label for="pink">pink</label><br>
                            <input type="radio" id="blue" name="color" value="#6495ED">
                            <label for="blue">blue</label><br>
                            <input type="radio" id="violet" name="color" value="#9932CC">
                            <label for="violet">violet</label>
                        </div>
                        <button type="submit"> Submit </button>
                    </form>`;

    parent.appendChild(document.createRange().createContextualFragment(form));
    document.getElementById("add-form").addEventListener("submit", this.onFormSubmit);
    
  };
}
export default AddCardForm;
