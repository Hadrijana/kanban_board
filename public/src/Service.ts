import {Task,  taskPatch} from "./types"
class Service {
  static path: string;
  path = 'http://localhost:8000/'
  

  static getAllCategories = async () => {
    let allCategories = await fetch([this.path, 'categories'].join('/')).then(
      (res) => {
        return res.json()
      }
    )
    return allCategories
  }

  static editCategory = async (id : string , prop : {color: string}) => {
    fetch([this.path, 'categories', id].join('/'), {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(prop),
    }).then(async (res) => {
      try {
        res.json()
      } catch (error) {
        console.log('Error happened here!')
        console.error(error)
      }
    })
  }

  static getAllTasks = async () => {
    let allTasks = await fetch([this.path, 'tasks'].join('/')).then((res) => {
      return res.json()
    })
    return allTasks
  }

  static deleteTask = async (id : string) => {
    fetch([this.path, 'delete', id].join('/'), {
      method: 'DELETE',
    })
  }

  static addTask = (task: Task) => {
    return fetch([this.path, 'newTask'].join('/'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    }).then((res) => {
      return res.json().then((d) => {
        return d._id
      })
    })
  }

  

  static editTask = async (id : string, prop: taskPatch) => {
    fetch([this.path, 'edit', id].join('/'), {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(prop),
    }).then(async (res) => {
      try {
        res.json()
      } catch (error) {
        console.log('Error happened here!')
        console.error(error)
      }
    })
  }

  static register= (username: string, password: string)=>{
    fetch([this.path, 'register'].join('/'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({username: username, password: password}),
    }).then(async (res) => {
      try {
        res.json()
      } catch (error) {
        console.log('Error happened here!')
        console.error(error)
      }
    })
  }
}
export default Service
