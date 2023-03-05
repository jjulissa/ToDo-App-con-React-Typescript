import { useState, Fragment } from "react";

function App(): JSX.Element { 

  const [newTask, setNewTask] = useState<string>("");  

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); 
    console.log(newTask);
    
  }

  return (
    <Fragment>  
      <form onSubmit={handleSubmit} className="m-5"> 
        <input className=" border-[#2A5B45] border-4 mx-4"
          type="text" onChange={e=> setNewTask(e.target.value)}/> 
        <button>Save</button>
      </form>

    
    </Fragment>
  );
}

export default App;
