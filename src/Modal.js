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
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
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
        setTaskValue({ title: event.target.value});
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
    
    
    const handleCheckBoxClick = (listnumber, event) => {
      setTaskList(taskList.map(
          (item, index) =>
            {return{
              ...item,
              isChecked: index === listnumber ? event.currentTarget.checked : item.isChecked
            }}
        
      ))}
          
    return (
        <div>
      <Button onClick={handleOpen}><RiAddCircleLine/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        form={"input"}
        type="text"
        onSubmit={handleSubmit}>
         <Box sx={{ ...style, width: 200 }}>
          <h2 id="parent-modal-title">Tasks</h2>
          <form onSubmit={handleSubmit}>
              <input type="text" value={taskValue.title} onChange={handlInputChange} />
            <button onClick={handleSubmit}>save</button>
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