import { express } from "express";
const app = Express();
const port = 3000;

app.listen(port, () => {     // 3000 => it is a port number
    console.log(`Server running on port ${port}.`);  // callback function
});