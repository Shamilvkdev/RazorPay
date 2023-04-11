import axios from "axios"
import { useState } from "react";
import './App.css';

function App() {
  const [book, setBook] = useState({
    name: "Looking For Alaska",
    author:"Jhon Green",
    img:"https://bookbins.in/wp-content/uploads/2022/11/Looking-For-Alaska-John-Green-Buy-Online-Bookbins-1.png",
    price:350
  })
  return (
    <div className="App">
      <div className="book_container">
        <img src= {book.img} alt="book_img" className="book_img"/>
          <p className="book_name">{book.name}</p>
          <p className="book_author">By {book.author}</p>
          <p className="book_price">
            Price : <span>&#x20B9; {book.price}</span>
          </p>
          <button className="buy_btn">
            Buy Now
          </button>
      </div>
    </div>
  )
}

export default App;
