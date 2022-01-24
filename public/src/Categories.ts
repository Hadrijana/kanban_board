import Service from './Service.js'
class Categories {

  static categoriesArray = [
      {
        name: 'important',
        color: '#a83232',
        _id: ""
      },
      {
        name: 'basic',
        color: '#3253a8',
        _id: ""
      },
    ]  

  static defineCategories = () => {
    Service.getAllCategories().then(categoriesList =>{
      if(categoriesList.length > 0){
        this.categoriesArray = categoriesList
      }
    })
  }

  static updateCategories =()=>{

  }

}

export default Categories
