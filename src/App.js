import logo from './logo.svg';
import './App.css';

function App() {
  const age=20;
  const name = ["mahan", "ahmad", "asghar", "akbar"]
  const user = [
    {names : "mahan" , age : 17},
    {names : "mojad" , age : 37},
    {names : "shayan" , age : 19},
    {names : "ali" , age : 23},
  ]
  const classes = [
    {esm : "html", finished : true },
    {esm : "javascript", finished : false },
    {esm : "react", finished : true },
    {esm : "css", finished : true },
    {esm : "php", finished : false }

  ]


 return(
  <div className='App'>
      {age > 20 ? <h1>over</h1> : <h1>under</h1>}
      {age == 20 && <h1>age is 20</h1>}

      <button type='submit'
      style={{fontSize : age > 20 ? "20px " : "30px" }}
        className={age > 20 ? "success" : "warnning" }
         >click me </button>
        <h1>{name[0]} {name[1]} {name[2]} {name[3]}</h1>

        {name.map ((name , index)=>{
          return <h1 key={index}>{name}</h1>
        

        }
        )
      }
      {user.map((user , index)=>{
        return <h2 key={index}>(user.names) : {user.age}</h2>

      
    }
      )
    }
    {classes.map((classes , index)=>{
      return classes.finished && <h2 >{classes.esm}</h2>
    }
    )
  }

  </div>

 )


  

  }
export default App;
