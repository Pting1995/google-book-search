import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar"
import Banner from "./components/Banner"
import "./App.css";
import Search from "./pages/Search.js"
import Saved from "./pages/Saved.js"



function App() {

  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <Banner />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/Saved" component={Saved} />
          </Switch>
        </div>
      </Router>
    </div>


  );
}


export default App;

// const [books, setBooks] = useState([]);
// // const [search, setSearch] = useState("");

// // useEffect(() => {
// //   loadBooks();
// // }, []);


// // pass me to search form
// function loadBooks(event) {
//   var bookSearch = event.target.value
//   API.getBookList()
//     .then(() => {
//       API.getBooks(bookSearch).then((books) => {
//         setBooks(books);
//       });
//     })
//     .catch(err => console.log(err));
// }

