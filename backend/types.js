const zod = require("zod");

const createtodos = zod.object({
    title:zod.string().min(1),
    description:zod.string().min()
})

const updatetodos = zod.object({
    id:zod.string()
})

module.exports = {
    createtodos : createtodos,
    updatetodos : updatetodos
}

