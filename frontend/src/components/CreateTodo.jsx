export function CreateTodo(){
    return <div>
        <input type="text" placeholder="Enter Title" style={{padding:10,margin:10}}/>
        <input type="text" placeholder="Enter Description" style={{padding:10,margin:10}}/>

        <button style={{padding:10, backgroundColor:"transparent",
        }}>Add a TODO</button>
    </div>
}