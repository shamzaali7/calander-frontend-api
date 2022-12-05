// import * as React from 'react';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Calendar from './Calendar'
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
    // const [open, setOpen] = useState([false]);
    // const handleOpen = () => {
    //     setOpen(true);
    // }
    // // console.log(open)
    // const handleClose = () => {
    //     setOpen(false);
    // }
   
      const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

    const [task, setTask] = useState([]);
    const handlInputChange = (event) => {
        setTask(event.target.value);

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setTask(event.target.value);

        setTask(prevTask =>
          prevTask.concat({ value: task })
        );
        setTask("");
    }
    return (
        <div>
      <Button onClick={handleOpen}>+</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        form={"input"}
        inputType="text"
        onSubmit={handleSubmit}
        data={'displayText'}>
         <Box sx={{ ...style, width: 200 }}>
          <h2 id="parent-modal-title">Tasks</h2>
          <form onSubmit={handleSubmit}><input type="text" onChange={handlInputChange} /><button>save</button></form>
        </Box> 
      </Modal>
    </div>
    );
}
