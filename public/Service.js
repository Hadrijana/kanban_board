class Service {
  static getAllTasks = async () => {
    let allTasks = await fetch('http://localhost:8000/tasks').then((res) => {
      return res.json()
    })
    return allTasks
  }

  static deleteTask = async (id) => {
    fetch('http://localhost:8000/delete/' + id, {
      method: 'DELETE',
    })
  }

  static addTask = async (task) => {
    fetch('http://localhost:8000/newTask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    }).then((res) => res.json())
  }

  static editTask = async (id, prop) => {
    fetch('http://localhost:8000/edit/' + id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(prop),
    }).then((res) => res.json())
  }
}
export default Service
