import './App.css';
import { TextField, Button } from "@mui/material"
import { useState } from 'react';




function App() {

  const [info, setInfo] = useState({ name: "", city: "" })
  function onNameChange(event) {
    setInfo(prevInfo => ({ ...prevInfo, name: event.target.value }))
  }
  function onCityChange(event) {
    setInfo(prevInfo => ({ ...prevInfo, city: event.target.value }))
  }
  async function onCreateButtonClicked() {
    console.log('in frontend clicked')
    window.ipcRenderer.invoke('buildDoc', info);
  }

  return (
    <div className="App">
      <div className="Info">
        <TextField id="outlined-basic" label="ФИО" variant="outlined" onChange={onNameChange} />
        <TextField id="outlined-basic" label="Населенный пункт" variant="outlined" onChange={onCityChange} />
        <br />
        <Button variant="contained" onClick={onCreateButtonClicked}>Сформировать</Button>
      </div>



    </div>
  );
}

export default App;
