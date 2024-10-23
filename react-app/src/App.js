import './App.css';
import { TextField, Button, Modal, Typography, Box } from "@mui/material"
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




function App() {

  const [info, setInfo] = useState({ name: "", city: "" })
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("")
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function onNameChange(event) {
    setInfo(prevInfo => ({ ...prevInfo, name: event.target.value }))
  }
  function onCityChange(event) {
    setCity(event.target.value)
    setInfo(prevInfo => ({ ...prevInfo, city: event.target.value }))
  }



  function onCreateButtonClicked() {
    console.log('in frontend clicked')
    window.ipcRenderer.invoke('buildDoc', info);
  }


  return (
    <div className="App">

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {
            ['Махачкала', 'Дербент', 'Каспийск'].map(city => {
              return (
                <Button variant="outlined"
                  key={city}
                  onClick={() => {
                    console.log(city)
                    setCity(city)
                    setInfo(prevInfo => ({ ...prevInfo, city }))
                    handleClose()
                  }
                  }>{city}</Button>
              )
            })
          }
        </Box>
      </Modal>

      <div className="Info">
        <TextField id="outlined-basic" label="ФИО" variant="outlined" onChange={onNameChange} />
        <TextField id="outlined-basic"
          value={city}
          label="Населенный пункт"
          variant="outlined"
          onChange={onCityChange}
          onContextMenu={
            e => {
              e.preventDefault(); // prevent the default behaviour when right clicked
              handleOpen();
            }
          }
        />
        <br />
        <Button variant="contained" onClick={onCreateButtonClicked}>Сформировать</Button>
      </div>



    </div>
  );
}

export default App;
