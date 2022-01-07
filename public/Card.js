class Card {
  constructor(task) {
    this.id = task.id;
    this.title = task.title;
    this.description = task.description;
    this.column = task.column;
    this.color = task.color;
  }

  onDragStart = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
    setTimeout(() => {
      e.target.classList.add("hide");
    }, 0);
  };

  onDragEnd = (e) => {
    console.log("dragend");
    e.target.classList.remove("hide");
  };

  onDelete = () => {
    localStorage.removeItem(this.id);
    document.getElementById(this.id).remove();
  };

  renderCard = () => {
    const parent = document.getElementById(this.column);

    const el = `<div class="task" id=${this.id} draggable="true" ondragend="this.onDragEnd" style="background-color:${this.color}"
                  ondrop="event.stopPropagation()" ondragover="event.stopPropagation()"> 
                    <div ondrop="event.stopPropagation()" ondragover="event.stopPropagation()">${this.title }</div> 
                    <div contenteditable="true">${this.description}</div> 
                    <button id="delete-btn-${+this.id}" >Delete</button>
                </div>`;

    parent.appendChild(document.createRange().createContextualFragment(el));

    document
      .getElementById(this.id)
      .addEventListener("dragend", this.onDragEnd);

    document
      .getElementById(this.id)
      .addEventListener("dragstart", this.onDragStart);
    document
      .getElementById(`delete-btn-${+this.id}`)
      .addEventListener("click", this.onDelete);
  };
}
export default Card;
