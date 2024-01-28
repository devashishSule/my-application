import React from 'react';
// import Alert from '@mui/material/Alert';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './test';
import Footer from './test1';

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
  title:"HARRY POTTER: GOBLET OF FIRE ",
  author:"J.K ROWLING",
  image:"https://m.media-amazon.com/images/I/81sUIr3c1pL._AC_UF1000,1000_QL80_.jpg"
}
const fifthBook = {
  title:"HARRY POTTER: ORDER OF THE PHOENIX ",
  author:"J.K ROWLING",
  image:"https://m.media-amazon.com/images/I/813lOXWdSNL._AC_UF1000,1000_QL80_.jpg"
}

const sixthBook = {
  title:"HARRY POTTER: HALF BOLD PRINCE ",
  author:"J.K ROWLING",
  image:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81YvqjX4AdL._AC_UF1000,1000_QL80_.jpg"
}

const seventhBook = {
  title:"HARRY POTTER: DEATHLY HALLOWS ",
  author:"J.K ROWLING",
  image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRZEETzN84D_aT6xySq7TFhrnAwdp7G-f0vJbiU8ZjM1ztO7v9d"
}

const ClickAdd =()=>{
  alert("Book added to cart")
}

const ClickLike =()=>{
  alert("Thank You for Like")
}

const Book=(props)=>{
  return (
    <article>
      <h1>{props.title}</h1>
      <img src={props.image}></img>
      <h2>{props.author}</h2>
      <input type='button' onClick={ClickAdd} class= "btn" value={'Add to cart'}></input>      <input type='button' onClick={ClickLike} class= "btn" value={'Like'}></input>
    </article>
  );
}



function App(){
  return(
    <div className='App'>
      <Header/>
      <div className='container'>
        <main> 
          {/* <p>This is where the booklist will be displayed.</p>  */}
          <div class='wrapper'>
      <div><Book
        title={firstBook.title}
        image={firstBook.image}
        author={firstBook.author} />
      </div>
      <div><Book
        title={secondBook.title}
        image={secondBook.image}
        author={secondBook.author} />
      </div>
      <div><Book 
        title={thirdBook.title}
        image={thirdBook.image}
        author={thirdBook.author}/>
      </div>
      <div><Book 
        title={forthBook.title}
        image={forthBook.image}
        author={forthBook.author}/>
      </div>
      <div><Book
        title={fifthBook.title}
        image={fifthBook.image}
        author={fifthBook.author}/>
      </div>
      <div><Book
        title={sixthBook.title}
        image={sixthBook.image}
        author={sixthBook.author}/>
      </div>
      <div><Book
        title={seventhBook.title}
        image={seventhBook.image}
        author={seventhBook.author}/>
      </div>
    </div>
        </main> 
      </div>  
      <Footer /> 
    </div> 
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BookList />
//   </React.StrictMode>
// );

root.render(<App/>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
