import express, { Express, Response, Request } from "express";
import bodyParser from "body-parser";
import { Todos, TODO } from "./models/todos_models";

export const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

app.get("/", (req, res) => res.json({ msg: "todos" }));

app.get("/api/v1/todos", (req: Request, res: Response) => {
  Todos.find({}).then(todos => res.json(todos));    
});
 
app.post("/api/v1/todos", (req, res) => {
  console.log('Body--', req.body);
  console.log('Params--', req.params);
  const todo = new Todos({
    title: req.body.title,
    description: req.body.description,
    createdAt: new Date(), 
    due: req.body.due || new Date()
  }); 

 
  todo.save().then((savedTodo) => {
      res.json(savedTodo); 
  });
});
