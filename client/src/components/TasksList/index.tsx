import React, { useContext } from 'react';
import { TasksContext } from '../../contexts/Tasks';
import Task from '../Task';


const TasksList = () => {
    const tasksContext = useContext(TasksContext);


    return (
        <>
            {(tasksContext.tasks || []).map(t => 
            (<Task key={t.id} task={t} />))}
        </>
    )
}

export default TasksList;