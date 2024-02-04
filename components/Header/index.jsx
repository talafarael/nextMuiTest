"use client"

import * as React from "react"
import {AppBar, Toolbar, IconButton, Button, Box} from "@mui/material"
import {createTheme, ThemeProvider} from "@mui/material/styles"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import MenuIcon from "@mui/icons-material/Menu"
import {purple, lime} from "@mui/material/colors"
import { AccountCircle } from "@mui/icons-material"


const Header = () => {
	

	return (
		
			<Box >
				<AppBar position='static' sx={{display: 'flex' ,flexDirection:'row',background:'none',   justifyContent:'space-between',}}>
					<Toolbar >
						
					</Toolbar>

					<Box >
					<Button color="inherit">  <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                
                color="inherit"
              >
                <AccountCircle />

					
					</IconButton>
					</Button>
					</Box>
				</AppBar>
			</Box>
	
	)
}

export {Header}
