import 'dotenv/config';
import routes from routes/movieRoutes.js
import express from 'express'


const app = express();

app.use("/api" , movieRoutes);

const port = 3001


app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})