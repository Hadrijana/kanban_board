

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

  // setEndOfContenteditable =(contentEditableElement)=>
  // {   
    
  //     const range = document.createRange();//Create a range (a range is a like the selection but invisible)
  //     range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
  //     range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
  //     const selection = window.getSelection();//get the selection object (allows you to change selection)
  //     selection.removeAllRanges();//remove any selections already made
  //     selection.addRange(range);//make the range you have just created the visible selection
  // }

  renderCard = () => {
    const parent = document.getElementById(this.column);

    const el = `<div class="task" id=${this.id} draggable="true"
                  ondragend="this.onDragEnd" style="background-color:${this.color}"
                  ondrop="event.stopPropagation()" ondragover="event.stopPropagation()"> 
                    <div name="title" id="${this.id}-title" contenteditable="true" ondrop="event.stopPropagation()" 
                    ondragover="event.stopPropagation()"  >${this.title} </div> 
                    <div name="description" id="${this.id}-description" contenteditable="true">${this.description}</div>             
                    <button class="button" id="delete-btn-${+this.id}" > <i class="fas fa-trash"></i></button>
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

    document
      .getElementById(`${this.id}-title`)
      .addEventListener("input", this.onEdit);

    // this.setEndOfContenteditable(document.getElementById(`${this.id}-title`))
    document
      .getElementById(`${this.id}-description`)
      .addEventListener("focusout", this.onEdit);
    // this.setEndOfContenteditable(document.getElementById(`${this.id}-description`))
    
  };
}
export default Card;
