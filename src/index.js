import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function Hello(){
//   return (
//     <h1>Welcome to my-application...</h1>
//   )
// }{

const Book=(props)=>{
  return (
    <article>
      <img src={props.image}></img>
      <h2>{props.author}</h2>
    </article>
  );
}

const firstBook={
  title:"HARRY POTTER: PHILOSOPHER'S STONE",
  author:"J.K ROWLING",
  image:"https://m.media-amazon.com/images/I/81Vuk+qsXRL._AC_UF1000,1000_QL80_.jpg"
}

const secondBook={
  title:"HARRY POTTER: CHAMBER OF SECRETS",
  author:"J.K ROWLING",
  image:"https://m.media-amazon.com/images/I/81gOJoEgVoL._AC_UF1000,1000_QL80_.jpg"
}

const thirdBook={
  title:"HARRY POTTER: PRISONER OF AZKABAAN",
  author:"J.K ROWLING",
  image:"https://m.media-amazon.com/images/I/81BUmhxreyL._SY425_.jpg"
}

const forthBook={
  title:"HARRY POTTER: ",
  author:"J.K ROWLING",
  image:"https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781526610270.jpg"
}

const BookList=()=>{
  return (
    <div class='wrapper'>
      <div><Book
        // title={firstBook.title}
        image={firstBook.image}
        author={firstBook.author} />
      </div>
      <div><Book
        // title={secondBook.title}
        image={secondBook.image}
        author={secondBook.author} />
      </div>
      <div><Book 
        image={thirdBook.image}
        author={thirdBook.author}/>
      </div>
      <div><Book 
        image={forthBook.image}
        author={forthBook.author}/>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
