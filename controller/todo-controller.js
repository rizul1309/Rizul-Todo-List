import todo from "../Model/Todo.js"
export const addTODO =async (request,response)=>{
    try {
        const newTodo = await todo.create({
        data : request.body.data,
        createdAt : Date.now(),
        })
        await newTodo.save();
        response.status(200).json(newTodo)
    }
    catch(error)
    {
        return response.status(500).json(error.message)
    }
}
export const getallTodos =async (request,response)=>{
    try {
        const todos = await todo.find({}).sort({createdAt:-1});
        response.header("Access-Control-Allow-Origin", "*");
        response.status(200).json(todos)
    }
    catch(error)
    {
        return response.status(500).json(error.message)
    }
}
export const ToggletodoDone = async (request,response)=>{
    try {
        const todoRef = await todo.findById(request.params.id);
        const todo2 = await todo.findOneAndUpdate(
            { _id: request.params.id },
            { done: !todoRef.done }
        )
        await todo2.save();
        response.status(200).json(todo2)
    }
    catch(error)
    {
        return response.status(500).json(error.message)
    }
}

export const updateTodo =async (request,response)=>{
    try {
        await todo.findOneAndUpdate(
            { _id: request.params.id },
            { data: request.body.data }
        )
        const todo2 = await todo.findById(request.params.id)
        // await todo2.save();
        response.status(200).json(todo2)
    }
    catch(error)
    {
        return response.status(500).json(error.message)
    }
}
export const deletetodo =async (request,response)=>{
    try {
        const todo2 =  await todo.findByIdAndDelete(
            request.params.id
        )
        // await todo2.save();
        response.status(200).json(todo2)
    }
    catch(error)
    {
        return response.status(500).json(error.message)
    }
}
