import {Schema, model} from 'mongoose';

interface Task {
  title: string,
  description: string,
  column: string,
  categoryId: number
}

const taskSchema = new Schema<Task>({
  title: String,
  description: String,
  column: String,
  categoryId: Number,
})
const TaskModel = model<Task>('Task', taskSchema)

export default TaskModel
