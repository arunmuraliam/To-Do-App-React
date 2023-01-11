import React from 'react';
import './App.css';
import {useState} from 'react'


function App() {
  const [toDos,setToDos]=useState([])
  const [toDo,setToDo]=useState('')
  function filterDel(id){
    let filtodo=toDos.filter(obj3=>{
      if (obj3.id===id){
        obj3.dropstatus=true;
        console.log(obj3.dropstatus);
        //return obj3;
      }
      return [obj3.id!==id,obj3];
      
    }
    );
    setToDos(filtodo)
  }

  function delComplete(id){
    let filtodo=toDos.filter(obj3=>obj3.id!==id);
    setToDos(filtodo)
  }

  function dropdel(id){
    let filtodo=toDos.filter(obj3=>obj3.id!==id);
    setToDos(filtodo)
  }

  return (
  <div>

    <div className="app1">
      
      <h1 style={{ fontSize:'20px', textAlign:'center',paddingTop:'176px'}}>Completed Todos</h1>
      
      <div className="todos">
      {toDos.map((obj)=>{
        if(obj.status){
          return(
          
            <><div className="todo">
              <div className="left">
                
                <p><del>{obj.text}</del></p>
              </div>
              <div className="right">
                <i onClick={()=>{
                  let isComplete = window.confirm("Deleting completed todo.");
                  if(isComplete){
                    delComplete(obj.id)
                  }
                }} className="fas fa-trash"></i>
                  
              </div>
            </div></>)
          
        }
        return null
      })}
        
      </div>
    </div>

    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>{setToDo(e.target.value)}}  type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{id:Date.now(),text:toDo,status:false,dropstatus:false}])} className="fas fa-plus"></i>
      </div><br />
      <h1 style={{fontSize:'20px', textAlign:'center'}}>Ongoing Todos</h1>

      
      <div className="todos">
      {  toDos.map((obj)=>{
        if(obj.status===false && obj.dropstatus===false){    
        return(<div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked);
              console.log(obj);
              setToDos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked;
                }
                return obj2;
              }))
            }} value={obj.status}  type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          
          <div className="right">
            <i onClick={()=>filterDel(obj.id)} className="fas fa-times"></i>
          </div>
        </div>)}
        return null
      })} 

      
      </div>
      
   
    </div>



    <div className="app2">
    <h1 style={{ fontSize:'20px', textAlign:'center',paddingTop:'176px'}}>Droped Todos</h1>
      <div className="todos">
      {toDos.map((obj)=>{
        if(obj.dropstatus){
          console.log(obj.dropstatus);
          return(
            <div>
            <div className="todo">
              <div className="left">
                
                <p><del>{obj.text}</del></p>
              </div>
              <div className="right">
                <i onClick={()=>{
                  let isDrop = window.confirm("Deleting droped todo.");
                  if(isDrop){
                    dropdel(obj.id)
                  }
                }} className="fas fa-trash"></i>
              </div>
            </div></div>)
          
        }
        return null
      })}
      </div>
    </div>  


    </div> 
  );
}

export default App;

// {
//   toDos.map((obj3)=>{
//     if(obj3.status===false){
//     return(
//       <div>
       
//       </div>
//     )}
//   })
// }