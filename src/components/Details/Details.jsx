import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import {Chart, ArcElement} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../useTransaction';

import useStyle from './style';

Chart.register(ArcElement);

const Details = ({title}) => {
    const classes = useStyle();
    const {total, chartData} = useTransactions(title);

    return (
        <Card className={title === 'Income' ? classes.income : classes.expense}>
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant='h5'>${total}</Typography>
                <Doughnut data={chartData} />
            </CardContent>
        </Card>
    )
}

export default Details