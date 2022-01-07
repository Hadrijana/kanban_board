import Picker from "vanilla-picker";

class Card {
  constructor(task) {
    this.id = task.id;
    this.title = task.title;
    this.description = task.description;
    this.column = task.column;
    this.color = task.color;
  }

  onDragStart = (e) => {
    e.dataTransfer.setData("text", e.target.id);
    setTimeout(() => {
      e.target.classList.add("hide");
    }, 0);
  };

  onDragEnd = (e) => {
    e.target.classList.remove("hide");
  };

  onDelete = () => {
    localStorage.removeItem(this.id);
    document.getElementById(this.id).remove();
  };

  onEdit = (e) => {
    if (e.target.id === `${this.id}-title`) {
      this.title = e.target.innerText;
    } else if (e.target.id === `${this.id}-description`) {
      this.description = e.target.innerText;
    }

    localStorage.setItem(this.id, JSON.stringify(this));
  };

  renderCard = () => {
    const parent = document.getElementById(this.column);

    const el = `<div class="task" id=${this.id} draggable="true"
                  ondragend="this.onDragEnd" style="background-color:${
                    this.color
                  }"
                  ondrop="event.stopPropagation()" ondragover="event.stopPropagation()"> 
                    <div id="${
                      this.id
                    }-title" contenteditable="true" ondrop="event.stopPropagation()" 
                    ondragover="event.stopPropagation()">${this.title}</div> 
                    <div id="${this.id}-description" contenteditable="true">${this.description}</div> 
                    <div id="${this.id}-colorpicker" ></div>             
                    <button id="delete-btn-${+this.id}" >Delete</button>
                </div>`;

    parent.appendChild(document.createRange().createContextualFragment(el));

    const picker = new Picker(document.querySelector(`${this.id}-colorpicker`));

    document
      .getElementById(this.id)
      .addEventListener("dragend", this.onDragEnd);

    document
      .getElementById(this.id)
      .addEventListener("dragstart", this.onDragStart);

    document
      .getElementById(`delete-btn-${+this.id}`)
      .addEventListener("click", this.onDelete);

    document
      .getElementById(`${this.id}-title`)
      .addEventListener("input", this.onEdit);
    document
      .getElementById(`${this.id}-description`)
      .addEventListener("focusout", this.onEdit);
  };
}
export default Card;