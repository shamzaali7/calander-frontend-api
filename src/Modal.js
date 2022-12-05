import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Calendar from './Calendar'
import './App.css'

// https://mui.com/material-ui/react-modal/


export default function MyModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    // console.log(open)
    const handleClose = () => {
        setOpen(false);
    };
    // const [task, setTask] = React.useSate(true)
    // const handlInputChange = event => {
    //     setTask(event.target.value);

    // }
    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     // setTask(prevTask =>
    //     //   prevTask.concat({ value: task })
    //     // );
    //     setTask("");
    
    return (
        <div>
      <Button onClick={handleOpen}>+</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        form={"input"}
        inputType="text"
        // onSubmit={handleSubmit}
        data={'displayText'}
        
      >
        <Box >
          <h2 id="parent-modal-title">Tasks</h2>
          <form><input /><button ><h5>Submit</h5></button></form>
        </Box>
      </Modal>
    </div>
    );
}
{/* <Box >
          <h2 id="parent-modal-title">Tasks</h2>
          <form><input type="text" value={task} onChange={handlInputChange} /><button onClick={handleSubmit}><h5>Submit</h5></button></form>
        </Box> */}