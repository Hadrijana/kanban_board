import Card from './Card.js'
import AddCardButton from './AddCardButton.js'
import DroppableColumns from './DroppableColumns.js'
import Service from './Service.js'
import CategoryPicker from './CategoryPicker.js'
import Category from './Category.js'

document.querySelectorAll('[name="add"]').forEach((btn) => {
  new AddCardButton(btn)
})
document.querySelectorAll('[name="container"]').forEach((column) => {
  new DroppableColumns(column)
})

let categories = [
  {
    name: 'important',
    color: '#a83232',
  },
  {
    name: 'basic',
    color: '#3253a8',
  },
]

Service.getAllTasks()
  .then((tasks) => {
    for (const element in tasks) {
      new Card(tasks[element])
    }
  })
  .then(() => {
    document.querySelectorAll('[name="category-picker"]').forEach((picker) => {
      new CategoryPicker(picker)
    })
    document.querySelectorAll('.dropdown-content').forEach((dropdown) => {
      categories.forEach((category) => {
        new Category(category.name, category.color, dropdown)
      })
    })
  })
