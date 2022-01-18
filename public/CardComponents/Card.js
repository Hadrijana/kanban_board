import Service from '../Service.js'
import DropdownButton from './DropdownButton.js'
import CategoryPicker from './CategoryPicker.js'
import Categories from '../Categories.js'

class Card {
  constructor(task) {
    this.id = task._id
    this.title = task.title
    this.description = task.description
    this.column = task.column
    this.categoryId = task.categoryId

    this.renderCard()
    this.addListeners()
  }

  addListeners = () => {
    document
      .getElementById(this.id)
      .addEventListener('dragstart', this.onDragStart)

    document
      .getElementById(`delete-btn-${this.id}`)
      .addEventListener('click', this.onDelete)

    document
      .getElementById(`${this.id}-title`)
      .addEventListener('focusout', this.onEdit)

    document
      .getElementById(`${this.id}-description`)
      .addEventListener('focusout', this.onEdit)
  }

  onDragStart = (e) => {
    e.dataTransfer.setData('text', e.target.id)
    setTimeout(() => {
      e.target.classList.add('hide')
    }, 0)
  }

  onDragEnd = (e) => {
    e.target.classList.remove('hide')
  }

  onDelete = () => {
    // localStorage.removeItem(this.id);

    Service.deleteTask(this.id)
    document.getElementById(this.id).remove()
  }

  onEdit = (e) => {
    if (e.target.id === `${this.id}-title`) {
      this.title = e.target.innerText
    } else if (e.target.id === `${this.id}-description`) {
      this.description = e.target.innerText
    }
    Service.editTask(this.id, this)
  }

  setColor = (color) => {
    document.querySelector(`[id='${this.id}']`).style.backgroundColor = color
    document.querySelectorAll(`[id='${this.id}']>*`).forEach((el) => {
      el.style.backgroundColor = color
    })
  }

  setColor = (color) => {
    document.querySelector(`[id='${this.id}']`).style.backgroundColor = color
    document.querySelectorAll(`[id='${this.id}']>*`).forEach((el) => {
      el.style.backgroundColor = color
    })
  }

  renderCard = () => {
    const categories = Categories.getAllCategories()
    const parent = document.getElementById(this.column)

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

    const range = document.createRange()
    range.selectNode(parent)
    const documentFragment = range.createContextualFragment(el).children[0]
    parent.appendChild(documentFragment)

    document.getElementById(this.id).addEventListener('dragend', this.onDragEnd)

    this.setColor(categories[this.categoryId].color)

    new DropdownButton(document.getElementById(`${this.id}-category`))

    categories.forEach((category) => {
      new CategoryPicker(
        category.name,
        category.color,
        document.getElementById(`${this.id}-category-drop`)
      )
    })
  }
}
export default Card
