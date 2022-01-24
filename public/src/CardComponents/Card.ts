import Service from '../Service.js'
import DropdownButton from './DropdownButton.js'
import CategoryPicker from './CategoryPicker.js'
import Categories from '../Categories.js'
import {Category, Column,  Task} from 'type'

class Card {
  id: string ;
  title: string;
  description: string;
  column: Column; 
  categoryId: number;

  constructor(task : Task) {
    this.id = <string>task._id
    this.title = task.title
    this.description = task.description
    this.column = task.column
    this.categoryId = task.categoryId

    this.renderCard()
    this.addListeners()
  }

  addListeners = () => {
    (document
      .getElementById(this.id) as HTMLElement)
      .addEventListener('dragstart', this.onDragStart);

    (document
      .getElementById(`delete-btn-${this.id}`)as HTMLElement)
      .addEventListener('click', this.onDelete);

    (document
      .getElementById(`${this.id}-title`)as HTMLElement)
      .addEventListener('focusout', this.onEdit);

    (document
      .getElementById(`${this.id}-description`)as HTMLElement)
      .addEventListener('focusout', this.onEdit);
  }

  onDragStart = (e : DragEvent) => {
    e.dataTransfer?.setData('text', (<HTMLElement>e.target).id )
    setTimeout(() => {
      (<HTMLElement>e.target).classList.add('hide')
    }, 0);
  }

  onDragEnd = (e : DragEvent) => {
    (<HTMLElement>e.target).classList.remove('hide')
  }

  onDelete = () => {
    Service.deleteTask(this.id);
    (document.getElementById(this.id)as HTMLElement).remove();
  }

  onEdit = (e : UIEvent) => {
    if ((<HTMLElement>e.target).id === `${this.id}-title`) {
      this.title = (<HTMLElement>e.target).innerText
    } else if ((<HTMLElement>e.target).id === `${this.id}-description`) {
      this.description = (<HTMLElement>e.target).innerText
    }
    Service.editTask(this.id, this)
  }

  setColor = (color: string) => {
    (document.getElementById(`${this.id}`)as HTMLElement).style.backgroundColor = color;
    document.querySelectorAll<HTMLElement>(`[id='${this.id}']>*`).forEach((el) => {
      el.style.backgroundColor = color
    })
  }

  renderCard = () => {
    const categories: Array<Category> = Categories.categoriesArray
    const parent = document.getElementById(this.column)!

    const el = `<div class="task ${categories[this.categoryId].name}" id=${
      this.id
    } draggable="true"
                  ondragend="this.onDragEnd" style="background-color:${
                    categories[this.categoryId].color
                  }"
                  ondrop="event.stopPropagation()" ondragover="event.stopPropagation()"> 
                    <div name="title" id="${
                      this.id
                    }-title" contenteditable="true" ondrop="event.stopPropagation()" 
                    ondragover="event.stopPropagation()"  >${this.title} </div> 
                    <div name="description" id="${
                      this.id
                    }-description" contenteditable="true">${
      this.description
    }</div>             
                    <div class="btn-container">
                      <div id="${
                        this.id
                      }-category" name="category-picker"></div>
                      <button class="button" id="delete-btn-${
                        this.id
                      }" > <i class="fas fa-trash"></i></button>
                    </div>
                </div>`

    const range = document.createRange();
    range.selectNode(parent);
    const documentFragment = range.createContextualFragment(el).children[0];
    parent.appendChild(documentFragment);

    (document.getElementById(this.id)as HTMLElement).addEventListener('dragend', this.onDragEnd)

    this.setColor(categories[this.categoryId].color)

    new DropdownButton(document.getElementById(`${this.id}-category`)as HTMLElement)

    categories.forEach((category) => {
      new CategoryPicker(
        category.name,
        category.color,
        (document.getElementById(`${this.id}-category-drop`)as HTMLElement)
      )
    })
  }
}
export default Card
