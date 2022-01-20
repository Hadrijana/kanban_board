export interface Category {
    name : string;
    color: string
    _id : string
}

export interface Task {
    title: string,
    description: string,
    column: string,
    categoryId: string,
    _id: string
}
