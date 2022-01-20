import Card from '../CardComponents/Card.js'
import Service from '../Service.js'
import {Task} from '../type'

class AddCardButton {
  addTaskBtn: HTMLElement
  constructor(btn) {
    this.addTaskBtn = btn
    this.addTaskBtn.addEventListener('click', this.addTask)
  } 
  addTask = () => {
    const task  = {
      title: '',
      description: '',
      column: `${this.addTaskBtn.parentElement.parentElement.id}-list`,
      categoryId: '1',
    }
    //localStorage.setItem(task.id, JSON.stringify(task));
    Service.addTask(task).then((id) => {
      (task as any)._id = id;
      new Card(task)
    })
  }
}
export default AddCardButton
