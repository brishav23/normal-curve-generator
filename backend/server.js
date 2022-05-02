import express from "express";
import cors from "cors";
import { spawn } from "child_process";

const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.set("Content-Type", "image/png");
    let child = spawn('python', ['script.py']);
    child.stdout.pipe(res);
});

app.post("/makeplot", (req, res) => {
    res.set("Content-Type", "image/png");
    let child=spawn('python', ['script.py', req.body.mean, req.body.std])
    child.stdout.pipe(res);
    child.stderr.pipe(process.stderr);
});

app.listen(4000, () => {console.log("Server running on port 4000")});