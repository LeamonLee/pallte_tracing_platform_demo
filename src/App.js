import { useState } from 'react';
import './App.css';
import { AppBar, Toolbar, Typography, TextField, Button, Alert } from '@mui/material';

function App() {

  // State for the code entered in the TextField
  const [code, setCode] = useState('');
  // State for error message
  const [error, setError] = useState(false);

  // Handle change in the TextField
  const handleCodeChange = (event) => {
    setCode(event.target.value);
    setError(false); // Reset error state when user types
  };

  // Handle click on the Confirm button
  const handleConfirmClick = () => {
    if (code === '335796') {
      // Redirect to external website
      window.location.href = 'https://www.google.com';
    } else {
      // Set error state to true, which shows an error message
      setError(true);
    }
  };

  return (
    <div className="App">
      <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Pallet Tracing Platform
            </Typography>
          </Toolbar>
        </AppBar>
      <header className="App-header">
        <div style={{ padding: 20 }}>
          {/* <TextField label="Enter Code" variant="outlined" fullWidth margin="normal" />
          <Button variant="contained" color="primary">
            Confirm
          </Button> */}

<TextField 
            label="Enter Code" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            value={code} 
            onChange={handleCodeChange} 
          />
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleConfirmClick}
          >
            Confirm
          </Button>
          {error && <Alert severity="error">The code is not correct.</Alert>}
        </div>
      </header>
    </div>
  );
}

export default App;
