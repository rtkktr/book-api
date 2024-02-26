const express = require('express')
const { connectToDb, getDb} = require('./db')
const { ObjectId } = require('mongodb')
require('dotenv').config();

// init app & middleware
const app = express()
app.use(express.json())


// db = connection
let db;

connectToDb((err) => {
    if (!err) {
        app.listen(process.env.PORT, () => {
            console.log('app listening on port 3000');
        });
        db = getDb();
    }
});

//routes
app.get("/books", (req, res) => {
    console.log(db);
    console.log('reza');

    const page = req.query.p || 0
    const booksPerPage = 3


    let books = []
    db.collection('books')
        .find()
        .sort({ rating: 1 })
        .skip(page * booksPerPage)
        .limit(booksPerPage)
        .forEach(book => {
            books.push(book)
            console.log(book);
        })
        .then(() => {
            res.status(200).json(books)
        })
        .catch(() => {
            res.status(500).json({error: "Could not fetch the documents"})
        });
})

app.get("/books/:id", (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
        db.collection('books')
        .findOne({_id: new ObjectId(req.params.id)})
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
            res.status(500).json({error: "Could not fetch the document"})
        })
    } else {
        res.status(500).json({error: "Not valid document id"})
    }
})


app.post("/books", (req, res) => {
    db.collection('books')
    console.log(req.body);
    const book = req.bsody
    
    
    .insertOne(book)
    .then(result => {
        res.status(201).json({result})
    })
    .catch(error => {
        res.status(500).json({err: "Could not create a new document"})
    })
})

app.delete("/books/:id", (req, res) => {
    
    if (ObjectId.isValid(req.params.id)) {
        db.collection('books')
        .deleteOne({_id: new ObjectId(req.params.id)})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({error: "Could not delete the document"})
        })
    } else {
        res.status(500).json({error: "Not valid document id"})
    }
})

app.patch("/books/:id", (req, res) => {
    const updates = req.body
    if (ObjectId.isValid(req.params.id)) {
        db.collection('books')
        .updateOne({_id: new ObjectId(req.params.id)}, {$set: updates})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({error: "Could not update the document"})
        })
    } else {
        res.status(500).json({error: "Not valid document id"})
    }
})  