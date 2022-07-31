import React from 'react';
import { styled } from '@mui/material/styles';
import {
    Box,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    SwipeableDrawer,
    TextField,
    Typography
} from '@mui/material';

type Props = {
    show: boolean,
    onOpen: React.ReactEventHandler<{}>,
    onClose: React.ReactEventHandler<{}>
}

const StyledBox = styled(Box)(() => ({
    backgroundColor: '#14213D',
}));


const CardItemDetails = (props: Props) => {
    const { show, onOpen, onClose } = props;
    const [category, setCategory] = React.useState('Food');

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value);
    };

    return (
        <SwipeableDrawer
            anchor="bottom"
            open={show}
            onClose={onClose}
            onOpen={onOpen}
            disableSwipeToOpen={false}
        >
            <StyledBox
                sx={{
                    px: 2,
                    py: 2,
                    height: '100%',
                    overflow: 'auto',
                }}
            >
                <Typography>
                    View Data
                </Typography>
                <Box
                    component="form"
                >
                    <FormControl
                        variant="standard"
                        margin="normal"
                        fullWidth
                    >
                        <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={category}
                            onChange={handleChange}
                            inputProps={{ readOnly: true }}
                        >
                            <MenuItem value={10}>Food</MenuItem>
                            <MenuItem value={20}>Shopping</MenuItem>
                            <MenuItem value={30}>Utilities</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="filled-basic"
                        label="Description"
                        variant="standard"
                        defaultValue="This is a description"
                        fullWidth
                        margin="normal"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <Grid container columnSpacing={1}>
                        <Grid item xs={6}>
                            <TextField
                                id="filled-basic"
                                label="Amount"
                                variant="standard"
                                defaultValue="1000"
                                fullWidth
                                margin="normal"
                                InputProps={{
                                    readOnly: true,
                                    startAdornment: <InputAdornment position="start">¥</InputAdornment>,
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl
                                variant="standard"
                                margin="normal"
                                fullWidth
                            >
                                <InputLabel id="demo-simple-select-filled-label">Account</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={category}
                                    onChange={handleChange}
                                    inputProps={{ readOnly: true }}
                                >
                                    <MenuItem value={10}>Food</MenuItem>
                                    <MenuItem value={20}>Shopping</MenuItem>
                                    <MenuItem value={30}>Utilities</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>
            </StyledBox>
        </SwipeableDrawer>
    )
}

export default CardItemDetails;