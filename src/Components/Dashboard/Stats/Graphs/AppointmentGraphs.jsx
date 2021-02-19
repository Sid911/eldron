import React from 'react'
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    DiscreteColorLegend
} from 'react-vis'
import { Grid } from '@material-ui/core'

function AppointmentGraphs() {
    const greenData = [{ x: 'Jan', y: 2 }, { x: 'Feb', y: 3 }, { x: 'Mar', y: 4 }, { x: 'Apr', y: 5 },  { x: 'May', y: 6 },  { x: 'Jun', y: 7 },  { x: 'Jul', y: 8 },  { x: 'Aug', y: 9 },  { x: 'Sep', y: 10 },  { x: 'Oct', y: 11 },  { x: 'Nov', y: 12 },  { x: 'Dec', y: 13 }  ];

    const blueData = [{ x: 'Jan', y: 1 }, { x: 'Feb', y: 2 }, { x: 'Mar', y: 3 }, { x: 'Apr', y: 4 },  { x: 'May', y: 5 },  { x: 'Jun', y: 6 },  { x: 'Jul', y: 7 },  { x: 'Aug', y: 8 },  { x: 'Sep', y: 9 },  { x: 'Oct', y: 10 },  { x: 'Nov', y: 11 },  { x: 'Dec', y: 12 }, ];
    const ITEMS = [
        'Male',
        'Female',
    ];
    return (
        <Grid container style={{ flexGrow: 1 }}>
            <Grid item md={8} sm={12}>
                <XYPlot xType="ordinal" width={500} height={300} xDistance={50}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <VerticalBarSeries className="vertical-bar-series-example" data={greenData} />
                    <VerticalBarSeries data={blueData} />
                </XYPlot>
            </Grid>
            <Grid item md={4} sm={12}>
                <DiscreteColorLegend height={200} width={300} items={ITEMS} />
            </Grid>
        </Grid>
    )
}

export default AppointmentGraphs
