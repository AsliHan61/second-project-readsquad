const express = require('express');
const axios = require('axios')
const router = express.Router();


router.get('/books',(req, res)=> {
                    axios.get('https://openlibrary.org/people/mekBot/books/currently-reading.json')
                
                    .then( response => {
                        console.log(response.data.reading_log_entries[0].work);
                        res.render('books', { allBooks: response.data.reading_log_entries })
                        
                    })
                    .catch(err => { console.log(err)});
});


router.get('/books/create', (req, res) => res.render('books/new.books.hbs'));
router.post('/books/create', (req, res, next) => {
    console.log(req.body);
    const { title, author, description, rating } = req.body;

    Books.create({ title, author, description, rating })
    .then(bookFromDB => console.log('New book created: ${bookFromDB.title}.'))
    .then(() => res.redirect('/books')) 
    .catch(error => next(error));
});


module.exports = router;
