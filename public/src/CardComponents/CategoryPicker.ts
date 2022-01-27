import Service from '../Service'
import Categories from '../Categories'

class CategoryPicker {
  taskId: string;
  parent: HTMLElement;
  name: string;
  color: string;
  constructor(name : string, color: string, parent: HTMLElement) {
    this.taskId =parent.id.split('-')[0]
    this.parent = parent
    this.name = name
    this.color = color

    this.renderCategory()
    this.addListeners()
  }

  addListeners = () => {
    (document
      .getElementById(`${this.taskId}-${this.name}-color`)as HTMLInputElement)
      .addEventListener('change', this.changeColors);

    (document
      .getElementById(`${this.taskId}-${this.name}`)as HTMLElement)
      .addEventListener('click', this.pickCategory);
  }

  setColor = (color : string) => {
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
  changeColors = () => {
    const color = (document.getElementById(
      `${this.taskId}-${this.name}-color`
    )as HTMLInputElement).value
    this.setColor(color)
    const idx : number= Categories.categoriesArray.findIndex((el) => {
      return el.name === this.name
    })
    Categories.updateCategories(idx, color)
   
  }
  pickCategory = () => {
    Categories.categoriesArray.forEach((category) => {
      (document.getElementById(this.taskId)as HTMLInputElement).classList.toggle(`${category.name}`)
    });
    (document.getElementById(this.taskId)as HTMLInputElement).classList.add(`${this.name}`)
    this.setColor(this.color);

    const idx = Categories.categoriesArray.findIndex((el) => {
      return el.name === this.name
    });

    Service.editTask(this.taskId, { categoryId: idx });
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
