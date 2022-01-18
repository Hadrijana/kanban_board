import Card from '../CardComponents/Card.js'
import Service from '../Service.js'

class AddCardButton {
  constructor(btn) {
    this.addTaskBtn = btn
    this.addTaskBtn.addEventListener('click', this.addTask)
  }
  addTask = () => {
    const task = {
      title: '',
      description: '',
      column: `${this.addTaskBtn.parentNode.parentNode.id}-list`,
      categoryId: '1',
    }
    //localStorage.setItem(task.id, JSON.stringify(task));
    Service.addTask(task).then((id) => {
      task._id = id
      new Card(task)
    })
  }
}
export default AddCardButton
