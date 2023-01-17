import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TasksContext } from '../../contexts/Tasks';
import Button from '../Button';
import Input from '../Input';
import TasksList from '../TasksList';

const Header = styled.div``;

const TasksContainer = styled.div``;

const Main = () => {   
    const [currentTaskValue, setCurrentTaskValue] = useState('');
    const tasksContext = useContext(TasksContext)

    const resetInput = () => {
        setCurrentTaskValue('');
    }
    return (
        <>
            <Header>
                <Input 
                    value={currentTaskValue} 
                    onValueChanged={(value) => setCurrentTaskValue(value)} />
                <Button 
                    onClick={async () => {
                        await tasksContext.addTask(currentTaskValue);
                        resetInput();
                    }}
                />
            </Header>
            <TasksContainer>
                <TasksList />
            </TasksContainer>
            </>
    )
}

export default Main;