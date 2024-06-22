
const express = require('express');
const { createtodos, updatetodos } = require('./types');
const { todo } = require('./db');
const app = express()
const port = 3000
const cors = require('cors');

app.use(express.json());
app.use(cors());


app.post("/createtodos", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createtodos.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong the inputs",
        })
        return;
    }


    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })


})

app.get("/readtodos", async function (req, res) {
    const todos = await todo.find({});
    //No Condition specified as we want all the todo's to come back to the user.

    res.json({
        todos
    })
})


//this has some issue in it
//fix on your own
app.put("/updatetodos", async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updatetodos.safeParse(updatePayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong the inputs",
        })
        return;
    }

    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })

    // await todo.updateById(req.body._id,{
    //     completed:true
    // })

    res.json({
        msg: "Todo marked as completed"
    })

})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})