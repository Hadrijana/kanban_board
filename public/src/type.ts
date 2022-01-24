export interface Category {
    name : string;
    color: string
    _id : string
}

export type Column = "to-do-list" | "in-progress-list"| "done-list";

export interface Task {
    title: string,
    description: string,
    column: Column ,
    categoryId: number,
    _id?: string
}
