const express = require('express')
const cors = require('cors')
const {
  categories,
  books,
  reviews,
  users,
} = require('./mock');

const app = express()
const port = 3001

app.use(cors())

app.get('/api/categories', (req, res) => {
  setTimeout(() => { res.json(categories) }, 250)
})

app.get('/api/books', (req, res) => {
  if (req.query.categoryId) {
    const category = categories.find((c) => c.id === req.query.categoryId)
    const filteredBooks = books.filter((b) => category.books.includes(b.id))

    setTimeout(() => { res.json(filteredBooks) }, 500)
    return;
  }

  res.json(books)
})

app.get('/api/books/:id', (req, res) => {
  const book = books.find((b) => b.id === req.params.id)
  const filteredReviews = reviews.filter((r) => book.reviews.includes(r.id))
    .map((r) => {
      const review = { ...r };
      review.user = users.find((u) => u.id === r.userId);
      delete review.userId;

      return review;
    })

  setTimeout(() => {
    res.json({
      ...book,
      reviews: filteredReviews,
    })
  }, 375)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
