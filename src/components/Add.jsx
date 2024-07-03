import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

export const Add = ({person}) => {
    const [page,setPage]=useState('Audience Details')
    const [count,setCount]=useState(0)
    const [form,setForm]=useState({
      Name: person.Name,
      Email: person.Email,
      Password: person.Password,
      Address: person.Address
    })

    function valueAdd(){
        // setCount(count+1)
        console.log(form)
    }
    function valueCap(e){
      // console.log(e)
      setForm({...form,[e.target.name]:e.target.value})
    }
  return (
     <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <h1>Welcome to {page} Page</h1>
    <div>
      <TextField
        required
        id="outlined-required"
        label="Name"
     name='Name'
     
     onChange={valueCap}
     value={form.Name}
      />
     </div>
     <div>
      <TextField
       
        id="outlined-disabled"
        label="Email"
        name='Email'
        onChange={valueCap}
        value={form.Email}
      />
      </div>
      <div>
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        name='Password'
        onChange={valueCap}
        value={form.Password}
      />
      </div>
      <div>
      <TextField
        id="outlined-read-only-input"
        label="Address"
        name='Address'
        onChange={valueCap}
        value={form.Address}
       
        
      />
      </div>
      <div>
        <Button variant='contained' onClick={valueAdd}>Register</Button> 
        
        <br></br>
        {/* <small>Button is clicked {count} times</small> */}
      </div>
      </Box>
  )
}
