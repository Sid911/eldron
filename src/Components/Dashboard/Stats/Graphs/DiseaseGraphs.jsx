import { Grid } from '@material-ui/core'
import React, { Component } from 'react'
import {
    XYPlot,
    XAxis,
    YAxis,
    LineSeries,
    Hint,
    HorizontalGridLines,
    VerticalGridLines,
    DiscreteColorLegend
} from 'react-vis'

class DiseaseGraphs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }

    _forgetValue = () => {
        this.setState({
            value: null
        });
    };

    _rememberValue = value => {
        this.setState({ value });
    };
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
        const { value } = this.state;
        return (
            <Grid container style={{ flexGrow: 1 }}>
                <Grid item md={8} sm={12}>
                    <XYPlot width={500} height={300}>
                        <HorizontalGridLines />
                        <VerticalGridLines />
                        <XAxis style={{ text: { stroke: 'none', fill: '#ffff', fontSize: 12 } }} />
                        <YAxis style={{ text: { stroke: 'none', fill: '#ffff', fontSize: 12 } }} />
                        <LineSeries
                            onValueMouseOver={this._rememberValue}
                            onValueMouseOut={this._forgetValue}
                            data={[{ x: 1, y: 10 }, { x: 2, y: 5 }, { x: 3, y: 15 }]}
                        />
                        <LineSeries
                            onValueMouseOver={this._rememberValue}
                            onValueMouseOut={this._forgetValue}
                            data={[{ x: 1, y: 6 }, { x: 2, y: 7 }, { x: 3, y: 12 }]}
                        />
                        {value ? <Hint value={value} /> : null}
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
