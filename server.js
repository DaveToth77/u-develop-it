
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//default response for any other requests (Not found)
app.use((req, res) => {
    res.status(404).end();
})




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});