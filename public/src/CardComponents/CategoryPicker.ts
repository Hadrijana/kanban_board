import Service from '../Service.js'
import Categories from '../Categories.js'
import {Category} from '../type'

class CategoryPicker {
  taskId: string;
  parent: HTMLElement;
  name: string;
  color: string;
  categories: Array<Category>;
  constructor(name, color, parent) {
    this.taskId =
      parent.parentElement.parentElement.parentElement.parentElement.id
    this.parent = parent
    this.name = name
    this.color = color
    this.categories = Categories.categoriesArray

    this.renderCategory()
    this.addListeners()
  }

  addListeners = () => {
    document
      .getElementById(`${this.taskId}-${this.name}-color`)
      .addEventListener('change', this.changeColors)
    document
      .getElementById(`${this.taskId}-${this.name}`)
      .addEventListener('click', this.pickCategory)
  }

  setColor = (color) => {
    document.querySelectorAll<HTMLElement>(`.${this.name}`).forEach((el) => {
      el.style.backgroundColor = color
    })
    document.querySelectorAll<HTMLElement>(`.${this.name}>*`).forEach((el) => {
      el.style.backgroundColor = color
    })
    document.querySelectorAll<HTMLInputElement>(`.${this.name}-color-picker`).forEach((el) => {
      el.value = color
    })
  }
  changeColors = (e) => {
    const color = (document.getElementById(
      `${this.taskId}-${this.name}-color`
    )as HTMLInputElement).value
    this.setColor(color)
    const idx : number= this.categories.findIndex((el) => {
      return el.name === this.name
    })
    // localStorage.setItem(idx.toString(), JSON.stringify({ name: this.name, color: color }))

    // this.categories = Categories.categoriesArray

    Service.editCategory(this.categories[idx]._id, {color: this.color})
  }
  pickCategory = (e) => {
    this.categories.forEach((category) => {
      document.getElementById(this.taskId).classList.toggle(`${category.name}`)
    })
    document.getElementById(this.taskId).classList.add(`${this.name}`)
    this.setColor(this.color)

    const idx = this.categories.findIndex((el) => {
      return el.name === this.name
    })

    Service.editTask(this.taskId, { categoryId: idx })
  }

  renderCategory = () => {
    const el = `<div class="picker-el">
                    <input  class="${this.name}-color-picker" id="${this.taskId}-${this.name}-color" type="color" value="${this.color}"></input>
                    <button id="${this.taskId}-${this.name}">${this.name}</Button>
                </div>`

    const range = document.createRange()
    range.selectNode(this.parent)
    const documentFragment = range.createContextualFragment(el).children[0]
    this.parent.appendChild(documentFragment)
  }
}

export default CategoryPicker
