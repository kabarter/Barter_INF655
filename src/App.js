import './App.css';

function App() {
  const myName = [
    {
    id: 1,
    name: "Karen",
  },
  {
    id: 2,
    name: "Bruce",
  },
  {
    id: 3,
    name: "Piper",
  },
  {
    id: 4,
    name: "Gus",
  },
  {
    id: 5,
    name: "Maggie",
  },
  ];

  const toDoList = [
    {
      id: 1,
      title: "Clean Office"
    },
    {
      id: 2,
      title: "Run Errands"
    },
    {
      id: 3,
      title: "Walk Dog"
    },
    {
      id: 4,
      title: "Garden"
    },
    {
      id: 5,
      title: "Fix Car"
    },
    {
      id: 6,
      title: "Complete Assignments"
    }
  ];

  const randomName = () => {
    const int = Math.floor(Math.random() *5);
    return myName[int].name;
  }

  const random = () => {
    const int = Math.floor(Math.random() *6);
    return toDoList[int].title;
  }


  return (
    <div className="App">
      <header className="App-header">
      <h1>Assignment 1</h1>
       
       <p>Hello {randomName()} you have a task {random()} to finish.
       </p>  
       
       
      </header>
    </div>
  );
}

export default App;
