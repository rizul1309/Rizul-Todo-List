import express from 'express';
import { addTODO,getallTodos,ToggletodoDone ,updateTodo,deletetodo} from '../controller/todo-controller.js';

const route =  express.Router();
route.post('/todos',addTODO)
route.get('/todos',getallTodos)
route.get('/todos/:id',ToggletodoDone)
route.put('/todos/:id',updateTodo)
route.delete('/todos/:id',deletetodo)
export default route