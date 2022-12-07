// import * as React from 'react';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { RiAddCircleLine } from 'react-icons/ri';


import './App.css'


// https://mui.com/material-ui/react-modal/
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  color: '#1C6EA4',
  
  pt: 2,
  px: 4,
  pb: 3,
  "webkit-box-shadow": "5px 5px 15px 5px #000000", 
  "box-shadow": "5px 5px 15px 5px #000000",
  "text-align": "center",
};

export default function MyModal() {
   
   
      const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      const [taskValue, setTaskValue] = useState({
        title: "",
        isCompleted: "",
        dayIndex: parseInt("")
      });
      const [taskList, setTaskList] = useState([]);
    const handlInputChange = (event) => {
        setTaskValue(
          { title: event.target.value,
            isCompleted: "false",
            dayIndex: event.target.index
          }
          );
        console.log(taskValue)

    }
    const handleSubmit = (event) => {
        event.preventDefault();
      
      setTaskList([...taskList, taskValue]);
      console.log(taskList)
      setTaskValue({
        title: "",
        isCompleted: "",
        dayIndex: parseInt("")
      });
    }
    
    const handleCheckBoxClick = (listnumber, event) => {
      setTaskList(taskList.map(
          (item, index) =>
            {
              if(item.isCompleted === "false"){
                item.isCompleted = "true"
              }else{
                item.isCompleted = "false"
              }
          console.log(item)
              return{
              ...item,
              // isChecked: index === listnumber ? event.currentTarget.checked : item.isChecked
            }}
        
      ))}
          // item.isCompleted = True
    return (
        <div>
      <Button onClick={handleOpen}><RiAddCircleLine size={20} id="reactButton"/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        form={"input"}
        type="text"
        onSubmit={handleSubmit}>
         <Box sx={{ ...style, width: 400, height: 180, opacity: .8, "background-color": "black", border: "#1C6EA4 solid 1px"}}>
          <h2 id="parent-modal-title">Add to Task List</h2>
          <form onSubmit={handleSubmit}>
              <input sx={{ ...style, "border-color": "black",  }} type='text' placeholder="enter task here..." value={taskValue.title} onChange={handlInputChange} />
            <button onClick={handleSubmit}>Save</button>
          </form>
        </Box>
      </Modal>
      <div>
          
          {taskList.map(
            (item, index) =>
              item.title && (
                <li>
                   <input
                    type="checkbox"
                    id='btn'
                    onClick={handleCheckBoxClick.bind(null, index)}
                    className="strikethrough"
                  />
                  {item.title}
                  {item.isChecked}
                </li>
               )
         )}
        </div>   
          
           
    
      
    </div>
    );
}