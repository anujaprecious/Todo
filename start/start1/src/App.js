import React ,{useState} from "react";


function App() {
 const [activity,setActivity]=useState("");
 const [listData,setListData]=useState([]);

 function addActivity(){
  setListData((listData)=>{
    const updatedList=([...listData,activity])
    setActivity('');
    return updatedList;
  })
 }
 function removeActivity(i){
   const updatedListData=listData.filter((elem,id)=>{
    return i!==id;
   })
   setListData(updatedListData);
 }
 function removeAll(){
  setListData([]);
 }
  return(
     <>
       <h1>Todo List</h1>
       <input type="text" placeholder="Add activity" value={activity}
        onChange={(e)=>setActivity(e.target.value)}/>

     <button onClick={addActivity}>Add</button>
     <h2>Here is your list</h2>
     {listData!==[] && listData.map((data,i)=>{
      return(
        <>
          <p key={i}>
              <div>{data}</div>
              <button onClick={()=>removeActivity(i)}>Remove</button>
          </p>
        </>
      )
     })}
     {listData.length>=1 && <button onClick={()=>removeAll()}>RemoveAll</button>}
     </>);
}
export default App;
