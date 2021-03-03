# Employee Organizer

## Description
This app helps you keep track of books! This app is a full stack app and uses the google books API to display information about the book on the search page. Information such as an image, a title, a description, authors, and a link for more information is appended to the page dynamically. This was made using React as a front end framework and MongoDB and mongoose as a back end database to store your saved books! If you click the "favorite button" on the search page that book and its information will be saved on the MongoDB database. You can then click "Un-favorite" when you want to unsave the book and it will be removed from the database!

## Preview of Working Site

![Image](./assets/google-books-demo.gif)

## Deployed Link

* [See Live Site](https://google-book-library.herokuapp.com/)

## Code Snippet
The code below shows how books are favorited! When the favoriteBook function is activated, the title, thumbnail, description and link of the book you want to favorite. There is an if statement to set the description and author to a set string if "!myBook.description" or "!data.author" is true. But if author has a value then it will set author to be the first author.

``` JavaScript
function favoriteBook(data) {
    var myBook = {
      title: data.title,
      image: data.image,
      description: data.description,
      link: data.link
    };
    if (!myBook.description || !myBook.author) {
      if (!myBook.description) {
        myBook.description = "No Description"
      }
      if (!data.author) {
        myBook.author = "No Author"
      }
      else {
        myBook.author = data.author[0]
      }
    }
    axiosRoutes.saveBook(myBook)
  }
```

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [Bootstrap](https://getbootstrap.com/)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JS](https://www.javascript.com/)
* [GitHub](https://github.com/)
* [Git](https://git-scm.com/)
* [node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [react](https://reactjs.org/)
* [react-dom](https://reactjs.org/docs/react-dom.html)
* [react-scripts](https://www.npmjs.com/package/react-scripts)
* [react-router-dom](https://reactrouter.com/web/guides/quick-start)
* [axios](https://www.npmjs.com/package/axios)
* [Web Vitals](https://web.dev/vitals/)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [Express](https://www.npmjs.com/package/express)
* [Concurrently](https://www.npmjs.com/package/concurrently)
* [if-env](https://www.npmjs.com/package/if-env)
* [mongo](https://www.mongodb.com/)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [heroku](https://dashboard.heroku.com/)

## Authors

* **Peter Ting**

- [Link to Portfolio](https://portfolio-mk3.herokuapp.com/)
- [Link to Github](https://github.com/Pting1995)
- [Link to LinkedIn](https://www.linkedin.com/in/pting002/)