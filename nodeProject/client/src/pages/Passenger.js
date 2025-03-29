import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import { TextField, MenuItem } from "@mui/material";
import {passengerRegister} from '../services/api'


const Passenger = React.memo(() => {
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [phone, setPhoneNum] = useState("")
  const [address, setAddress] = useState("")
  const[password, setPassword] = useState("")

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  async function handlePassengerRegister(event) {
    event.preventDefault(); 
    setError(null); 

    const formData = { 
      email : "Danny123@gmail.com", 
      firstName : "Danny", 
      lastName : "Zhao", 
      gender : "male", 
      phone : "6265425562", 
      address : "111 lambert Ave", 
      password : "123456789"
    };
  
    try {

      // await loginSchema.validate(formData);
      // setLoading(true);
      const response = await passengerRegister(formData);
      console.log("Login successful:", response);
      alert("Login successful!");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  


  return (
    <Box
      component="form"
      onSubmit={handlePassengerRegister}
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 5,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "white",
      }}
    >
      <Typography
        variant="h5"
        component="h1"
        sx={{ mb: 3, textAlign: "center" }}
      >
        Passenger Register
      </Typography>

      {/* {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )} */}

      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />

      <TextField
        label="First Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        type="text"
      />

      <TextField
        label="Last Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        type="text"
      />

      <TextField
        select 
        label="Gender"
        value={gender} 
        onChange={handleGenderChange} 
        variant="outlined"
        fullWidth
        margin="normal"
      >
        {/* 下拉选项 */}
        <MenuItem value="Male">Male</MenuItem>
        <MenuItem value="Female">Female</MenuItem>
      </TextField>

      <TextField
        label="Phone"
        variant="outlined"
        fullWidth
        margin="normal"
        value={phone}
        onChange={(e) => setPhoneNum(e.target.value)}
        type="tel"
      />

      <TextField
        label="Address"
        variant="outlined"
        fullWidth
        margin="normal"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        type="text"
      />

      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Register
      </Button>
    </Box>
  );
});

export default Passenger;
