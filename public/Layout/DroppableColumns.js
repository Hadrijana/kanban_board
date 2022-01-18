import Service from '../Service.js'
class DroppableColumns {
  constructor(column) {
    this.column = column
    this.addListeners()
  }

  addListeners = () => {
    this.column.addEventListener('dragenter', this.dragEnter)
    this.column.addEventListener('dragover', this.dragOver)
    this.column.addEventListener('dragleave', this.dragLeave)
    this.column.addEventListener('drop', this.drop)
  }

  dragEnter = (e) => {
    e.preventDefault()
    e.target.classList.add('drag-over')
  }

  dragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
    e.target.classList.add('drag-over')
  }

  dragLeave = (e) => {
    e.target.classList.remove('drag-over')
  }

  drop = (e) => {
    e.preventDefault()
    // e.target.classList.remove('drag-over');
    const id = e.dataTransfer.getData('text/plain')
    const draggable = document.getElementById(id)

    e.target.appendChild(draggable)

    draggable.classList.remove('hide')

    // let card = JSON.parse(localStorage[id])
    // card.column = e.target.id;
    // localStorage[id]=JSON.stringify(card)
    Service.editTask(id, { column: e.target.id })
  }
}

export default DroppableColumns
