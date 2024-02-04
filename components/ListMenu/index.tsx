import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
export default function ListMenu() {
		return (
			<div>
			<Toolbar />
			<Divider />
			<List>
					{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
							<ListItem key={text} disablePadding>
									<ListItemButton>
											<ListItemIcon>
													{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
											</ListItemIcon>
											<ListItemText primary={text} />
									</ListItemButton>
							</ListItem>
					))}
			</List>
			<Divider />
			<List>
					{['All mail', 'Trash', 'Spam'].map((text, index) => (
							<ListItem key={text} disablePadding>
									<ListItemButton>
											<ListItemIcon>
													{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
											</ListItemIcon>
											<ListItemText primary={text} />
									</ListItemButton>
							</ListItem>
					))}
			</List>
	</div>

		)
}
