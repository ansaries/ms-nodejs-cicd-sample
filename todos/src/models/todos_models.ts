import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const TodosSchema = new Schema({
  title: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
  due: { type: Date, default: Date.now }
});

export interface TODO {
  title: string;
  description: string;
  createdAt: Date;
  due: Date;
};

export const Todos = mongoose.model<TODO & mongoose.Document>("Todos", TodosSchema);

/**
 * Fixtures
 */
Todos.find({}).count()
.then(v => {
  try{
    if(v <=0) {
      for(let i = 0; i < 5; i++) {
        const todo = new Todos({
          title: `${i} -- Title`,
          description: `${i} -- Description`,
          createdAt: new Date(),        
        }); 
        todo.save();
      }
    }
  } catch(e) {
    console.log(e);
  }
});