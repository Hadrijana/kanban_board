import Service from './Service'
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

  static updateCategories =(index : number, color : string)=>{
    Service.editCategory(this.categoriesArray[index]._id, {color: color});
    this.categoriesArray[index].color= color;

  }

}

export default Categories
