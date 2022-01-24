export interface Category {
    name : string;
    color: string
    _id : string
}

export type Column = "to-do-list" | "in-progress-list"| "done-list";



export interface Task {
    _id?: string ;
    title: string;
    description: string;
    column: Column; 
    categoryId: number;
}

export type taskPatch = Task | {categoryId: number} | {column : string}