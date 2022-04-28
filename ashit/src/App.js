import logo from './logo.svg';
import './App.css';

function App() {
  // array function
  let ashit = [10,"ashit",20,30,40,50]; //normal array
  
  

  // ashit.push(99);// add element fast

  // ashit.unshift(99);

  // ashit.pop()//remove element last

  // ashit.shift();

  // ashit.splice(3,0,100);//add element at sefecific position

  // ashit.splice(2,1);//remove element from 2nd index

  // console.log(ashit.toString());
  // console.log(ashit);

  // let res = ashit.some((a)=> a>10);//check array return true / false

// let res =ashit.find ((a)=> a>10);//check array within array return first match element

// let res =Array.isArray(ashit);// check given element is array or  not
console.log(res);





  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
