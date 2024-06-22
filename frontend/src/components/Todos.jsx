import { useEffect, useState } from 'react'

export function Todos({ todos }) {

//     const [todos1, setTodos1] = useState([]);

//     useEffect(()=>{
//         fetch("http://localhost:3000/readtodos")
//         .then(async function(res){
//           const json = await res.json();
//           setTodos1(json.todos1);
//         })
//       },[])

//    

// <Todos todos={todos1}></Todos>

return <div>

        {todos.map(function (todo) {
            return <div  key={todo._id} style={{ border: "2px solid black" }}>
                <h1>{todo.title}</h1>
                <p>{todo.description}</p>

                <button style={{ padding: 10 }}
                    onClick={() => {
                        fetch("http://localhost:3000/updatetodos", {
                            method: "PUT",
                            body: JSON.stringify({
                                id: todo._id
                            }),
                            headers: {
                                "Content-type": "application/json"
                            }
                        })
                            .then(async function (res) {
                                const json = await res.json();
                                alert("TODO Updated");
                            })

                       

                    }}
                >{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}

    </div>
}