import React, {
    useEffect, useState
} from "react";
import MyModal from './Modal'
import "./App.css"
import axios from "axios"
const Calendar = () => {
    const [days, setDays] = useState([])
    const [tasks, setTasks] = useState([])
    const options = {
        method: 'GET',
        url: 'https://calendar-backend-seir-10.fly.dev/api/date'

    };

    async function getDates() {
        await axios.request(options)
            .then((res) => {
                setDays(res.data)
                console.log(res.data)

            })

    }

    days.sort((a, b) => {
        return a.day - b.day;
    })
    useEffect(() => {
        getDates()
        getTasks()

    }, [])


    const options2 = {
        method: 'GET',
        url: 'https://calendar-backend-seir-10.fly.dev/api/task'

    };

    async function getTasks() {
        await axios.request(options2)
            .then((res) => {
                setTasks(res.data)
                console.log(res.data)

            })

    }

    function reload(){
        window.location.reload();
      }

    return (
        <div className="calendar" >
            {days.map(day => {
                let result = []
                tasks.forEach(item => {
                    if (item.day == day._id) {result.push(item)}
                })
                console.log(result)
                return (
                    <div clasname="calDay">
                        <div className="day-display">{day.day}</div>
                        {result.map(x => {
                            const name = x.title;
                            console.log(x.title)
                            const nameArr = name.split(" ");
                            nameArr[0].toUpperCase();
                            const finalName = nameArr.join(" ");
                            return <div className="task-titles">{finalName}</div>
                        })}

                    </div>
                )
            })}
            <div><MyModal><button /></MyModal><button onClick={reload}>refresh page</button></div>
        </div>

    )
}


export default Calendar
