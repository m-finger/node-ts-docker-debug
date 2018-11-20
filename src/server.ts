import * as express from 'express';
import * as bodyParser from 'body-parser';

const app = express();

app.listen(8000, () => console.log('Server running on 8000!'));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies


app.get("/", (req, res) => {
    res.send("Awesome! We're live debugging this!")
});

app.post("/", (req, res) => {
    let a = req.body;

    res.send("Awesome! We're live debugging this!")
});
