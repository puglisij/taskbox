
import { writable } from 'svelte/store';

const TaskBox = () => {
    const { subscribe, update } = writable([
        { id: '1', title: 'Something', state: 'TASK_INBOX' },
        { id: '2', title: 'Something more', state: 'TASK_INBOX' },
        { id: '3', title: 'Something else', state: 'TASK_INBOX' },
        { id: '4', title: 'Something again', state: 'TASK_INBOX' }
    ]);
    return {
        subscribe, 
        archiveTask: id => {
            return update(tasks => 
                tasks.map(task => {
                    return task.id === id ? { 
                        ...task, 
                        state: task.state === 'TASK_ARCHIVED' ? task.state = 'TASK_INBOX' : 'TASK_ARCHIVED'
                    } : task;
                })
            );
        },
        pinTask: id => {
            return update(tasks => 
                tasks.map(task => {
                    return task.id === id ? { 
                        ...task, 
                        state: task.state === 'TASK_PINNED' ? task.state = 'TASK_INBOX' : 'TASK_PINNED'
                    } : task ;
                })    
            );
        }
    };
};

export const taskStore = TaskBox();

const appState = () => {
    const { subscribe, update } = writable(false);
    return {
      subscribe,
      error: () => update(error => !error),
    };
};

export const appStore = appState();