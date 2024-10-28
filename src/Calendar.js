import React, { useEffect, useState } from "react";
import MyModal from './MyModal';
import "./App.css";
import axios from "axios";

const Calendar = () => {
    const [days, setDays] = useState([]);
    const [tasks, setTasks] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://calendar-backend-seir-10.fly.dev/api/date'
    };

    async function getDates() {
        const res = await axios.request(options);
        setDays(res.data.sort((a, b) => a.day - b.day));
    }

    const options2 = {
        method: 'GET',
        url: 'https://calendar-backend-seir-10.fly.dev/api/task'
    };

    async function getTasks() {
        const res = await axios.request(options2);
        setTasks(res.data);
    }

    useEffect(() => {
        getDates();
        getTasks();
    }, []);

    async function addTask(newTask) {
        setTasks([...tasks, newTask]);
    }

    async function removeTask(taskId) {
        setTasks(tasks.filter(task => task._id !== taskId));
        await axios.delete(`https://calendar-backend-seir-10.fly.dev/api/task/delete/${taskId}`);
    }

    return (
        <div className="calendar">
            {days.map(day => (
                <div className="calDay" key={day._id}>
                    <div className="day-display">{day.day}</div>
                    {tasks.map(task =>
                        task.day === day._id ? (
                            <div key={task._id} className="task-titles">
                                {task.title}
                                <button onClick={() => removeTask(task._id)}>Remove</button>
                            </div>
                        ) : null
                    )}
                </div>
            ))}
            <MyModal addTask={addTask} />
        </div>
    );
}
export default Calendar;
