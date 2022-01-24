import Card from '../CardComponents/Card.js'
import Service from '../Service.js'
import {Task , Column} from '../type'

class AddCardButton {
  addTaskBtn: HTMLButtonElement;
  column: string ;
  constructor(btn : HTMLButtonElement) {
    this.addTaskBtn = btn,
    this.column = `${btn?.parentElement?.parentElement?.id}`,
    this.addTaskBtn.addEventListener('click', this.addTask)
  } 
  addTask = () => {
    let col : Column;
    switch (this.column) {
      case ("to-do"):
        col = "to-do-list";
      case ( "in-progress"):
        col = "in-progress-list";
      case ("done"):
        col = "done-list";
      default:
        col= "to-do-list"
    }
    const task   = {
      title: '',
      description: '',
      column: col ,
      categoryId: 1,
    } 
   
    Service.addTask(task ).then((id) => {
      task._id = id;
      new Card(task)
    })
  }
}
export default AddCardButton
