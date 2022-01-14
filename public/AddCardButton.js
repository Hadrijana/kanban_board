import Card from './Card.js'
import Service from './Service.js'

class AddCardButton {
  constructor(btn) {
    this.addTaskBtn = btn
    this.addTaskBtn.addEventListener('click', this.addTask)
  }
  addTask = () => {
    const task = new Card({
      title: '',
      description: '',
      id: Date.now(),
      column: `${this.addTaskBtn.parentNode.parentNode.id}-list`,
      category: {
        name: 'basic',
        color: '#3253a8',
      },
    })
    //localStorage.setItem(task.id, JSON.stringify(task));
    Service.addTask(task)
  }
}
export default AddCardButton
