import { Task } from '../../models';

export const findById = (id: string): Promise<Task> => {
    return Task.findByPk(id);
}

export const findAll = (): Promise<Task[]> => {
    return Task.findAll();
}

export const create = (title): Promise<Task> => {
    return Task.create({
        title,
    })
}