import React, { useState } from 'react';
import Calendar from 'react-calendar';
import {
    Box,
    Grid,
    Typography
} from '@mui/material';
import 'react-calendar/dist/Calendar.css';
import styles from '../../styles/module/Dashboard.module.scss';
import CardItem from './CardItem';
import { Restaurant } from '@mui/icons-material';
import CardItemDetails from './CardItemDetails';

const HomeComponent = () => {
    const [open, setOpen] = useState(false);
    const setDrawerOpen = () => setOpen(true);
    const setDrawerClose = () => setOpen(false);

    return (
        <div>
            <Grid container spacing={ 2 }>
                <Grid item xs={ 12 } md={ 7 }>
                    <Calendar />
                </Grid>
                <Grid item xs={ 12 } md={ 5 }>
                    <Box mx={ 2 } mt={ 2 }>
                        <Grid container>
                            <Grid item xs={ 6 }>
                                <Typography>Expenses: ¥2,000</Typography>
                            </Grid>
                            <Grid item xs={ 6 }>
                                <Typography>Income: ¥2,000</Typography>
                            </Grid>
                        </Grid>
                        <Box className={ styles.calendarItems }>
                            <CardItem
                                icon={<Restaurant fontSize="small" />}
                                category="Food"
                                description="This is a description about the expense."
                                cost="¥1,000"
                                account="Credit Card"
                                onShowToggle={setDrawerOpen}
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <CardItemDetails
                show={open}
                onOpen={setDrawerOpen}
                onClose={setDrawerClose}
            />
        </div>
    );
};

export default HomeComponent;