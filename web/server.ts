import express, { Express, Response, Request } from "express";
import bodyParser from "body-parser";
import path from "path";

export const app: Express = express();
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, "public", "index.html"))
);

app.listen(3000, () => {
  console.log("Web Service -- Running on port 3000");
  console.log("......................................");
});
   