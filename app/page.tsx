"use client"
import React from "react"
import {AppBar, Toolbar, IconButton, Button, Box, Typography} from "@mui/material"

export default function ButtonAppBar() {
	function handleClick() {
		console.log("fafaf")
	}
	return (
		<Box sx={{flexGrow: 1}}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{mr: 2}}
					>
						{/* Your IconButton content goes here */}
					</IconButton>

					<Button variant="contained" onClick={handleClick}>
					<Typography variant="h6">mgj</Typography>
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
