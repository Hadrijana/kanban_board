import Card from '../CardComponents/Card'
import Service from '../Service'
import {Column, Task} from '../types'


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
        break;
      case ( "in-progress"):
        col = "in-progress-list";
        break;
      case ("done"):
        col = "done-list";
        break;
      default:
        col= "to-do-list"
        break;
    }
    
    const task : Task  ={
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
