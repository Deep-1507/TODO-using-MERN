import { useState } from "react"

export function CreateTodo(){

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    return <div>
        <input type="text" placeholder="Enter Title" style={{padding:10,margin:10}} 
        onChange={function(e) {
            const value = e.target.value;
            setTitle(e.target.value);
        }}/>
        <input type="text" placeholder="Enter Description" style={{padding:10,margin:10}}
         onChange={function(e) {
            const value = e.target.value;
            setDescription(e.target.value);
        }}/>

        <button style={{padding:10}} onClick={()=>{
            fetch("http://localhost:3000/updatetodos",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-type":"application/json"
                }
            })
                .then(async function(res){
                    const json=await res.json();
                    alert("Todo added");
                })
        }}>Add a TODO</button>
    </div>
}