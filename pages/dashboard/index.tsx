import type { NextPage } from 'next';
import HeaderComponent from '../../components/HeaderComponent';
import styled from 'styled-components';
import {
    AppBar,
    Box,
    IconButton,
    Menu,
    MenuItem,
    SpeedDial,
    SpeedDialAction,
    SpeedDialIcon,
    Tab,
    Tabs,
    Toolbar,
    Typography
} from '@mui/material';
import React, { useState } from 'react';
import { AccountCircle, Create } from '@mui/icons-material';
import HomeComponent from '../../components/dashboard/HomeComponent';

const HeaderNavContainer = styled.div`
  background: #EDAFB8;
`;

const actions = [
    { icon: <Create />, name: 'Add' },
];


type TabPanelProps = {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={ value !== index }
            id={ `simple-tabpanel-${ index }` }
            aria-labelledby={ `simple-tab-${ index }` }
            { ...other }
        >
            { value === index && (
                <Box sx={ { p: 3 } }>
                    { children }
                </Box>
            ) }
        </div>
    );
}

const Dashboard: NextPage = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
            <HeaderComponent title="Dashboard" />
            <HeaderNavContainer>
                <AppBar className="box-shadow-none" color="transparent"
                        position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div"
                                    sx={ { flexGrow: 1 } }>
                            Finance App
                        </Typography>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={ handleMenu }
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={ anchorEl }
                            anchorOrigin={ {
                                vertical: 'top',
                                horizontal: 'right',
                            } }
                            keepMounted
                            transformOrigin={ {
                                vertical: 'top',
                                horizontal: 'right',
                            } }
                            open={ Boolean(anchorEl) }
                            onClose={ handleClose }
                        >
                            <MenuItem onClick={ handleClose }>Profile</MenuItem>
                            <MenuItem onClick={ handleClose }>My
                                account</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
                <Tabs
                    value={ value }
                    onChange={ handleChange }
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                    centered
                >
                    <Tab value={ 0 } label="Home" />
                    <Tab value={ 1 } label="Accounts" />
                    <Tab value={ 2 } label="Reports" />
                    <Tab value={ 3 } label="Ledger" />
                </Tabs>
            </HeaderNavContainer>
            <div>
                <TabPanel value={ value } index={ 0 }>
                    <HomeComponent />
                </TabPanel>
                <TabPanel value={ value } index={ 1 }>
                    Item Two
                </TabPanel>
                <TabPanel value={ value } index={ 2 }>
                    Item Three
                </TabPanel>
                <TabPanel value={ value } index={ 3 }>
                    Item Four
                </TabPanel>
            </div>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={ { position: 'absolute', bottom: 16, right: 16 } }
                icon={ <SpeedDialIcon /> }
            >
                { actions.map((action) => (
                    <SpeedDialAction
                        key={ action.name }
                        icon={ action.icon }
                        tooltipTitle={ action.name }
                    />
                )) }
            </SpeedDial>
        </div>
    );
};

export default Dashboard;
