
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Brenman77',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
})

//default response for any other requests (Not found)
app.use((req, res) => {
    res.status(404).end();
})




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});