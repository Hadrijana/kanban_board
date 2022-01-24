import {Column} from './types'

class Task {
    _id?: string ;
    title: string;
    description: string;
    column: Column; 
    categoryId: number;

    // constructor(_id : string, _title : string, _description : string, _column : Column, _categoryId : number) {
    //     this.id = _id,
    //     this.title = _title,
    //     this.description = _description,
    //     this.column = _column,
    //     this.categoryId = _categoryId
    // }

    constructor(task : Task) {
        this._id = task._id
        this.title = task.title
        this.description = task.description
        this.column = task.column
        this.categoryId = task.categoryId
    }
}

export default Task