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
