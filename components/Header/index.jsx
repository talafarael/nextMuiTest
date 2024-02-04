
"use client"
import React from "react"
import {AppBar, Toolbar, IconButton, Button, Box } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { purple, red } from '@mui/material/colors';
    const primary = red[500];
const Header=()=>{
    function handleClick() {
		console.log("fafaf")
	}

    return(
    <Box  color="primary">
        <AppBar position='static' color={red}>
            <Toolbar>
                <IconButton
                    size='large'
                    edge='start'
                    color=''
                    aria-label='menu'
                    sx={{mr: 2}}
                >
                    {/* Your IconButton content goes here */}
                </IconButton>

                <Button variant="contained" onClick={handleClick}>
                <MenuIcon/>
                </Button>
            </Toolbar>
        </AppBar>
    </Box>
    )
}

export {Header}