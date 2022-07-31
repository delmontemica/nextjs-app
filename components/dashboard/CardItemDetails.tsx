import React from 'react';
import { styled } from '@mui/material/styles';
import {
    Box,
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
                <TextField
                    id="filled-basic"
                    label="Description"
                    variant="filled"
                    defaultValue="This is a description"
                    fullWidth
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="filled-basic"
                    label="Description"
                    variant="filled"
                    defaultValue="This is a description"
                    fullWidth
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="filled-basic"
                    label="Description"
                    variant="filled"
                    defaultValue="This is a description"
                    fullWidth
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </StyledBox>
        </SwipeableDrawer>
    )
}

export default CardItemDetails;