import Card from './CardComponents/Card.js'
import AddCardButton from './Layout/AddCardButton.js'
import DroppableColumns from './Layout/DroppableColumns.js'
import Categories from './Categories.js'
import Service from './Service.js'
import { Task } from './type.js'

Categories.defineCategories()
document.querySelectorAll<HTMLButtonElement>('[name="add"]').forEach((btn) => {
  new AddCardButton(btn)
})
document.querySelectorAll<HTMLElement>('[name="container"]').forEach((column) => {
  new DroppableColumns(column)
})

Service.getAllTasks().then((tasks : Array<Task>) => {
  for (const element in tasks) {
    new Card(tasks[element])
  }
})
