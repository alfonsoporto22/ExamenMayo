import express from "express";


import { deleteTaskController, getOneTaskController, getAllTasksController, postTaskController, putTaskController } from "./controllers/tasksControllers.mjs";

const PATH_PREFIX = "/api/v0.0"
const app = express();
try {
    const jsonParser = express.json();

    app.get(PATH_PREFIX+"/tasks/:id", getOneTaskController);
    app.get(PATH_PREFIX+"/tasks/", getAllTasksController);
    app.post(PATH_PREFIX+"/task/", jsonParser, postTaskController);
    app.put(PATH_PREFIX+"/task/", jsonParser, putTaskController);
    app.delete(PATH_PREFIX+"/task/", jsonParser, deleteTaskController);

    app.listen(process.env.PORT || 3000,()=>{
        console.log("Express running...");
    });
} catch (err) {
    console.error(err);
}