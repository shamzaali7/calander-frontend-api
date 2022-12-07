import React, {
    Component, useEffect, useState
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
    // console.log(days)
    // console.log(tasks)
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









    return (
        <div className="calendar" >
            {days.map(day => {
                let result = []
                tasks.forEach(item => {
                    if (item.day == day._id) result.push(item)
                })
                console.log(result)
                return (
                    <div clasname="calDay">
                        {day.day}
                        {result.map(x => {
                            return (x.title)
                        })}

                    </div>
                )
            })}
            <MyModal><button /></MyModal>
        </div>

    )
}


export default Calendar
