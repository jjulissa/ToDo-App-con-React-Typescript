import { useState, Fragment } from "react";

interface ITask { 
  name: string; 
  done: boolean;
}

function App(): JSX.Element { 

  const [newTask, setNewTask] = useState<string>("");  
  const [task, setTask] = useState<ITask[]>([])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); 
    addTask(newTask)
    setNewTask("")
  } 

  function addTask(name:string) {
    const newTask: ITask[] = [...task, { name, done: false}] 
    setTask(newTask)
  }

  return (
    <Fragment>  
      <form onSubmit={handleSubmit} className="m-5"> 
        <input className="rounded-xl border-[#2A5B45] border-4 mx-4"
          type="text" onChange={e=> setNewTask(e.target.value)} value={newTask}/> 
        <button className="bg-[#FF0303] h-10 rounded-xl w-20 text-[#F9DBBB]"
          >Save</button>
      </form>

      {task.map((t: ITask, i:number) => { 
        return <h1 key={i}>{t.name}</h1>
      })}
    
    </Fragment>
  );
}

export default App;
