class Categories {
  constructor() {
    this.categories = [
      {
        name: 'important',
        color: '#a83232',
      },
      {
        name: 'basic',
        color: '#3253a8',
      },
    ]
    this.defineCategories()
  }

  defineCategories = () => {
    const keys = Object.keys(localStorage)
    let counter = 0
    if (keys.length === 0) {
      this.categories.forEach((el) => {
        localStorage.setItem(counter, JSON.stringify(el))
        counter++
      })
    }
  }

  static getAllCategories = () => {
    const keys = Object.keys(localStorage)
    let categ = []
    keys.forEach((key) => {
      categ.push(JSON.parse(localStorage.getItem(key)))
    })
    return categ
  }
}

export default Categories
