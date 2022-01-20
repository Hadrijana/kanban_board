import Service from './Service.js'
import {Category} from './type'
class Categories {
  categoriesArray: Array<Category>;
 
  static categoriesArray = [
      {
        name: 'important',
        color: '#a83232',
      },
      {
        name: 'basic',
        color: '#3253a8',
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
