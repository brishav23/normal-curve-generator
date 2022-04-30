import express from "express";
import cors from "cors";
import { exec } from "child_process";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    exec("python script.py", (error, stdout, stderr) => {
        // res.type("image/png");
        res.send(stdout);
    });
});

app.listen(4000, () => {console.log("Server running on port 4000");});