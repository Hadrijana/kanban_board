import Card from './Card.js'
import AddCardButton from './AddCardButton.js'
import DroppableColumns from './DroppableColumns.js'
import Categories from './Categories.js'
import Service from './Service.js'

new Categories()

document.querySelectorAll('[name="add"]').forEach((btn) => {
  new AddCardButton(btn)
})
document.querySelectorAll('[name="container"]').forEach((column) => {
  new DroppableColumns(column)
})

Service.getAllTasks().then((tasks) => {
  for (const element in tasks) {
    new Card(tasks[element])
  }
})
