class Service {
  path = 'http://localhost:8000/'
  static getAllTasks = async () => {
    let allTasks = await fetch([this.path, 'tasks'].join('/')).then((res) => {
      return res.json()
    })
    return allTasks
  }

  static deleteTask = async (id) => {
    fetch([this.path, 'delete', id].join('/'), {
      method: 'DELETE',
    })
  }

  static addTask = (task) => {
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

  static editTask = async (id, prop) => {
    fetch([this.path, 'edit', id].join('/'), {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(prop),
    }).then(async (res) => {
      try {
        const data = await res.json()
      } catch (error) {
        console.log('Error happened here!')
        console.error(error)
      }
    })
  }

  // static editTask = async (id, prop) => {
  //   fetch([this.path, 'drop', id].join('/'), {
  //     method: 'PATCH',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(prop),
  //   }).then(async (res) => {
  //     try {
  //       const data = await res.json()
  //     } catch (error) {
  //       console.log('Error happened here!')
  //       console.error(error)
  //     }
  //   })
  // }
}
export default Service
