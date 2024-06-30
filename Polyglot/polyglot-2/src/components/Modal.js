import '../App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function AddWord ({ onClose }) {
    const [input, setInput] = useState({
        native: '',
        translation: ''
    })

    return (
        <div className='overlay'>
            <Box 
                className='new-word-modal'
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >

                <TextField id="outlined-basic-english" label="English" name="native" variant="outlined" />
                <TextField id="outlined-basic-german" label="German" name="translation" variant="outlined" />
    
                <div id='confirm-word'>
                    <Button variant="contained" onClick={onClose} >
                        Confirm
                    </Button>
                </div>
            </Box>
        </div>
    )
}

export function Register () {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <div >
                <TextField
                id='outlined-basic-username'
                placeholder="carlos@gmail.com"
                label="Email"
                variant="outlined"
                />
            </div>
            <div >
                <TextField
                id='outlined-basic-username'
                label="Username"
                variant="outlined"
                />
            </div>
            <div>
                <TextField
                id='outlined-basic-password'
                label="Password"
                variant="outlined"
                />
            </div>
            <Button id="Confirm-word" variant="contained" >
                Sign up
            </Button>
        </Box>
    )
}