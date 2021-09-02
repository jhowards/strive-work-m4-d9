import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import WarningSign from './components/WarningSign'
// import MyBadge from './components/MyBadge'
// import SingleBook from './components/SingleBook'
import BookList from "./components/BookList";
import fantasyBooks from "./fantasyBooks.json";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <MyNavbar />
        <Route path="/" exact render={() => <BookList books={fantasyBooks} />} />
        <Route path="/register" exact component={Register} /> 
      </Router>
    </div>
  );
}

export default App;
