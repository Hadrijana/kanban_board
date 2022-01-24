import {Column} from 'type'

class Task {
    id: string ;
    title: string;
    description: string;
    column: Column; 
    categoryId: number;

    constructor(_id : string, _title : string, _description : string, _column : Column, _categoryId : number) {
        this.id = _id
        this.title = _title
        this.description = _description
        this.column = _column
        this.categoryId = _categoryId
    }


}

export default Task