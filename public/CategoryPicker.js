class CategoryPicker {
  constructor(name, color, parent) {
    this.taskId =
      parent.parentElement.parentElement.parentElement.parentElement.id
    this.parent = parent
    this.name = name
    this.color = color
    this.renderCategory()
  }

  setColor = (color) => {
    document.querySelectorAll(`.${this.name}`).forEach((el) => {
      el.style.backgroundColor = color
    })
    document.querySelectorAll(`.${this.name}>*`).forEach((el) => {
      el.style.backgroundColor = color
    })
  }
  changeColors = (e) => {
    const color = document.getElementById(
      `${this.taskId}-${this.name}-color`
    ).value
    this.setColor(color)
  }
  pickCategory = (e) => {}

  renderCategory = () => {
    const el = `<div>
                    <input id="${this.taskId}-${this.name}-color" type="color" value="${this.color}"></input>
                    <button id="${this.taskId}-${this.name}">${this.name}</Button>
                </div>`

    const range = document.createRange()
    range.selectNode(this.parent)
    const documentFragment = range.createContextualFragment(el).children[0]
    this.parent.appendChild(documentFragment)

    document
      .getElementById(`${this.taskId}-${this.name}-color`)
      .addEventListener('change', this.changeColors)
    document
      .getElementById(`${this.taskId}-${this.name}`)
      .addEventListener('click', this.pickCategory)
  }
}

export default CategoryPicker
