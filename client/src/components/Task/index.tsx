import React from 'react';
import styled from 'styled-components';
import { Task as TaskInterface } from '../../contexts/Tasks';

const TaskContainer = styled.div``;
const Title = styled.span``;

interface TaskProps {
    task: TaskInterface
}

const Task = ({
    task
}: TaskProps) => (
    <TaskContainer>
        <Title>{task.title}</Title>
    </TaskContainer>
)
export default Task;