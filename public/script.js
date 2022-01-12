import Card from './Card.js'
import AddCardButton from './AddCardButton.js'
import DroppableColumns from './DroppableColumns.js'
import Service from './Service.js'

document.querySelectorAll('[name="add"]').forEach((btn) => {
  new AddCardButton(btn)
})

new DroppableColumns()

Service.getAll().then((tasks) => {
  tasks.forEach((element) => {
    const task = new Card(element)
    task.renderCard()
  })
})
