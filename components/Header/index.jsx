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
const navItems = ["Home", "About", "Contact"]
const theme = createTheme({
	palette: {
		primary: lime,
		secondary: purple,
	},
})

const Header = () => {
	function handleClick() {
		console.log("fafaf")
	}

	return (
		
			<Box sx={{ display: 'flex' , flex_direction:'row,'}}>
				<AppBar position='static'sx={{background:'purple'}}>
					<Toolbar >
						<Button
							variant='contained'
							onClick={handleClick}
							color='secondary'
						>
							<MenuIcon />
						</Button>
					</Toolbar>

					<Box sx={{ flexGrow: 0 ,display:'flex', background:'red'}}>
						<List>
							{navItems.map((item) => (
								<ListItem key={item} disablePadding>
									<ListItemButton sx={{textAlign: "center"}}>
										<ListItemText primary={item} />
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Box>
				</AppBar>
			</Box>
	
	)
}

export {Header}
