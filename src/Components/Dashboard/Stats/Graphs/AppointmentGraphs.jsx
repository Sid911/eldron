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
    const greenData = [{ x: 'Jan', y: 10 }, { x: 'Feb', y: 5 }, { x: 'March', y: 15 }];

    const blueData = [{ x: 'Jan', y: 12 }, { x: 'Feb', y: 2 }, { x: 'March', y: 11 }];
    const ITEMS = [
        'Covid-19',
        'Bone fracture',
        'Viral fever',
        'Heart Deasise',
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
