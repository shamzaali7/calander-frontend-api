import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        form={"input"}
        inputType="text"
        buttonType="submit"
        data={'displayText'}
        
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Tasks</h2>
          <form><input></input><button><h5>Submit</h5></button></form>
            
          
         
        </Box>
      </Modal>
    </div>
  );
}