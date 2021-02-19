import { Grid } from '@material-ui/core'
import React, { Component } from 'react'
import {
    XYPlot,
    XAxis,
    YAxis,
    LineSeries,
    HorizontalGridLines,
    VerticalGridLines,
    DiscreteColorLegend
} from 'react-vis'

class DiseaseGraphs extends Component {

    render() {
        const ITEMS = [
            'Options',
            'Buttons',
            'Select boxes',
            'Date inputs',
            'Password inputs',
            'Forms',
            'Other'
        ];
        return (
            <Grid container style={{ flexGrow: 1 }}>
                <Grid item md={8} sm={12}>
                    <XYPlot width={500} height={300}>
                        <HorizontalGridLines />
                        <VerticalGridLines />
                        <XAxis style={{ text: { stroke: 'none', fill: '#ffff', fontSize: 12 } }} />
                        <YAxis style={{ text: { stroke: 'none', fill: '#ffff', fontSize: 12 } }} />
                        <LineSeries

                            data={[{ x: 1, y: 10 }, { x: 2, y: 5 }, { x: 3, y: 15 }]}
                        />
                        <LineSeries
                            data={[{ x: 1, y: 6 }, { x: 2, y: 7 }, { x: 3, y: 12 }]}
                        />
                    </XYPlot>
                </Grid>
                <Grid item md={4} sm={12} >
                    <DiscreteColorLegend height={200} width={300} items={ITEMS} />

                </Grid>
            </Grid>
        )
    }
}

export default DiseaseGraphs
