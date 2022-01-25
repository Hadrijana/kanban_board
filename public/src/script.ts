import Card from './CardComponents/Card'
import AddCardButton from './Layout/AddCardButton'
import DroppableColumns from './Layout/DroppableColumns'
import Categories from './Categories'
import Service from './Service'
import {Task} from 'types'
import './stylesheet.css'


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
