class Service {
  static getAll = async () => {
    let allTasks = await fetch('http://localhost:8000/tasks').then((res) => {
      return res.json()
    })
    return allTasks
  }

  static deleteTask = async (id) => {
    return fetch('http://localhost:8000/tasks/' + id, {
      method: 'DELETE',
    })
      .then((res) => res.json()) // or res.json()
      .then((res) => console.log(res))
  }

  static addTask = async (task) => {
    fetch('http://localhost:8000/newTask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
      })
  }
}
export default Service
