import React from 'react';
import styles from '../../styles/module/Dashboard.module.scss';
import {
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Typography
} from '@mui/material';
import styled from 'styled-components';

type Props = {
    category: string,
    description: string,
    cost: string,
    account: string,
    icon: React.ReactNode;
    onShowToggle: React.ReactEventHandler<{}>,
}

const TextAlignLeft = styled.div`
  text-align: left;
`;

const TextAlignRight = styled.div`
  text-align: right;
`;

const CardItem = (props: Props) => {
    const { icon, category, description, cost, account, onShowToggle } = props;

    return (
        <>
            <Card className={ styles.cardItem }>
                <CardActionArea onClick={ onShowToggle }>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={ 1 }
                                  className={ styles.icon }>
                                <TextAlignLeft>
                                    { icon }
                                </TextAlignLeft>
                            </Grid>
                            <Grid item xs={ 6 }>
                                <TextAlignLeft>
                                    <Typography>{ category }</Typography>
                                    { description }
                                </TextAlignLeft>
                            </Grid>
                            <Grid item xs={ 5 }
                                  className={ styles.expenseCost }>
                                <div>
                                    <TextAlignRight>
                                        <Typography>{ cost }</Typography>
                                        <div>{ account }</div>
                                    </TextAlignRight>
                                </div>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
};

export default CardItem;