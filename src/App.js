import logo from "./logo.svg";
import "./App.css";
import Home from "./components/HomePage/Home";
import { Route, Routes } from "react-router-dom";
import BookDetail from "./components/BookDetail/BookDetail";
import LoginForm from "./components/AuthForm/Login";
import SignUp from "./components/AuthForm/Signup";
import NavBar from "./components/NavBar/NavBar";
import BookAddPage from "./components/BookForm/BookAddPage";
import BookEditPage from "./components/BookForm/BookEditPage";
import PokeResultPage from "./components/SearchPage/SearchPage";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="book/:bookId" exact element={<BookDetail />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route path="book/add" exact element={<BookAddPage />} />
        <Route path="edit/book/:bookId" exact element={<BookEditPage />} />
        <Route path="/search/" exact element={<PokeResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
