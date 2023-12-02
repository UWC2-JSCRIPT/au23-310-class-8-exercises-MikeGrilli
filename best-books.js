const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const booksContain = document.getElementById('books-container')
//test
formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  const userDate = `${year}-${month}-${date}`
  const list = 'hardcover-fiction'
  const API = 't55MZBl7Qp7D9NZWNzYKMrVWfz9n1znP'
  const url =`https://api.nytimes.com/svc/books/v3/lists/${userDate}/${list}?api-key=${API}&limit=5`

  // Fetch bestselling books for date and add top 5 to page
    fetch(url)
    .then(res => res.json())
    .then(res => {
      const bookListArr = res.results.books
      for (let i = 0; i < 5; i++) {
        const booksContainer = document.getElementById('books-container')
        booksContainer.style.display = 'flex'
        booksContainer.style.flexDirection = 'column'
        
        const img = document.createElement('img')
        img.src = bookListArr[i].book_image
        img.style.width = '15%'
        booksContainer.appendChild(img)

        const headline = document.createElement('h1')
        headline.textContent = bookListArr.title
        booksContainer.appendChild(headline)

        const subhead = document.createElement('h4')
        subhead.textContent = bookListArr[i].author
        booksContainer.appendChild(subhead)

        const description = document.createElement('em')
        description.textContent = bookListArr[i].description
        description.style.width = "50%"
        description.style.marginBottom = '50px'
        booksContainer.appendChild(description)
      }
    })
    .catch(err => console.log(err))

  })

  


