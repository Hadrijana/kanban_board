import Service from '../Service.js'
class DroppableColumns {
  column: HTMLElement
  constructor(column: HTMLElement) {
    this.column = column
    this.addListeners()
  }

  addListeners = () => {
    this.column.addEventListener('dragenter', this.dragEnter)
    this.column.addEventListener('dragover', this.dragOver)
    this.column.addEventListener('dragleave', this.dragLeave)
    this.column.addEventListener('drop', this.drop)
  }

  dragEnter = (e : DragEvent) => {
    e.preventDefault();
    (<HTMLElement>e.target).classList.add('drag-over');
  }

  dragOver = (e: DragEvent) => {
    e.preventDefault();
    (<DataTransfer>e.dataTransfer).dropEffect = "move";
    (e.target as HTMLElement).classList.add('drag-over');
  }

  dragLeave = (e: DragEvent) => {
    (e.target as HTMLElement).classList.remove('drag-over')
  }

  drop = (e: DragEvent) => {
    e.preventDefault();
    // e.target.classList.remove('drag-over');
    const id  = <string>e.dataTransfer?.getData('text/plain');
    const draggable = (document.getElementById(id) as HTMLElement);

    (e.target as Node).appendChild(draggable)

    draggable.classList.remove('hide')

    Service.editTask(id, { column: (<HTMLElement>e.target).id })
  }
}

export default DroppableColumns
