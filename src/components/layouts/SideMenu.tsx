
'use client'
import { Collapse, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import React, { use } from "react";

const menus = [
    {
        label: "Home",
        url: "/dashboard"
    },{
        label: "Drinks",
        url: "",
        children: [{
            lebel: "Lists",
            url: "/drinks"
        },{
            lebel: "Reports",
            url: "/report"
        }]
    },{
        label: "Setting",
        url: "/setting"
    }
]


export function SideMenu() {

    const drawerWidth: string = "240px";
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />
            <List>
                {menus.map((page, index) => (
                // {['HOME'/, 'Drink', 'Setting',].map((text, index) => (
                    <ListItem key={index} disablePadding>
                         {page.children ?
                                (
                                <>
                                    <ListItemButton onClick={handleClick}>
                                        <ListItemText primary={page.label} />
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    {/* <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                            <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary="Starred" />
                                        </ListItemButton>
                                        </List>
                                    </Collapse> */}
                                </>
                            ):
                                 (
                                    <ListItemButton>
                                        <ListItemText primary={page.label} />
                                    </ListItemButton>
                                )
                            }
                                      
                    </ListItem>
                ))}
            </List>
            <Divider />
            {/* <List>
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
            </List> */}
        </Drawer>
    );
}