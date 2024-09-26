const express = require("express");
const mysql = require("mysql2");
const app = express();

app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "0ltinjo@111",
    database: "library",
});

app.post("/books", (req, res) => {
    const { title, author, genre, year } = req.body;

    const query = "INSERT INTO books (title,author,genre,year) VALUES (?,?,?,?)";
    connection.query(query, [title, author, genre, year], (err, result) => {
        if (err) {
            return res.status(500).send(err); // Change sendStatus to status and send the error in the body
        }
        return res.status(201).send("Book added successfully");
    });
});

app.get("/books", (req, res) => {
    const query = "SELECT * from books";
    connection.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err); // Correct usage of status and send error
        }
        return res.status(200).json(result); // Change sendStatus to status and then send the result
    });
});


app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const { title, author, genre, year } = req.body;
    if (!title || !author || !genre || !year) {
        return res.status(500).send("Parameters are missing");
    }
    const query = 'UPDATE books SET title = ?, author = ?, genre = ?, year = ? WHERE id = ?';

    connection.query(query, [title, author, genre, year, id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send('Book updated successfully');
    });
});

app.delete("/books/:id", (req, res) => {
    const { id } = req.params;

    const query = "DELETE FROM books WHERE id = ?";

    connection.query(query, [Number(id)], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send("Book deleted successfully");
    });
});


app.get('/books/search', (req, res) => {
    const { author } = req.query;

    if (!author) {
        return res.status(400).send("Author is missing");
    }

    const query = 'SELECT * FROM books WHERE author LIKE ?';


    connection.query(query, [`%${author}%`], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (results.length === 0) {
            return res.status(404).send("No books found for the given author");
        }
        res.status(200).json(results);
    });
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
