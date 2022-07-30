import React from 'react';
import Calendar from 'react-calendar';
import {
    Card,
    CardActionArea,
    CardContent,
    Box,
    Grid,
    Typography
} from '@mui/material';
import 'react-calendar/dist/Calendar.css';
import styles from '../../styles/module/Dashboard.module.scss';

const HomeComponent = () => {
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
                        <Card className={styles.cardItem}>
                            <CardActionArea>
                                <CardContent>
                                    <Grid container>
                                        <Grid item xs={ 1 }>T</Grid>
                                        <Grid item xs={ 6 }>
                                            <Typography>Food</Typography>
                                            User | This is a description about the expense.
                                        </Grid>
                                        <Grid item xs={ 5 } className={styles.expenseCost}>
                                            <Typography>¥1,000</Typography>
                                            Credit Card
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default HomeComponent;