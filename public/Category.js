class Category {
  constructor(name, color, parent) {
    this.taskId =
      parent.parentElement.parentElement.parentElement.parentElement.id
    this.parent = parent
    this.name = name
    this.color = color
    this.renderCategory()
  }

  changeColor = (e) => {
    const color = document.getElementById(`${this.id}-${this.name}-color`).value
    this.category.color = color
    this.setColor(color)
    Service.editTask(this.id, JSON.stringify(this))
  }

  renderCategory = () => {
    const el = `<div>
                    <input id="${this.taskId}-${this.name}-color" type="color" value="${this.color}"></input>
                    <button id="${this.id}-${this.name}">${this.name}</Button>
                </div>`

    const range = document.createRange()
    range.selectNode(this.parent)
    const documentFragment = range.createContextualFragment(el).children[0]
    this.parent.appendChild(documentFragment)

    document
      .getElementById(`${this.taskId}-${this.name}-color`)
      .addEventListener('change', this.changeColor)
  }
}

export default Category
