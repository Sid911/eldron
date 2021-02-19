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
            'Covid-19',
            'Bone fracture',
            'Viral fever',
            'Heart Deasise',
        ];
        return (
            <Grid container style={{ flexGrow: 1 }}>
                <Grid item md={8} sm={12}>
                    <XYPlot width={600} height={300}>
                        <HorizontalGridLines />
                        <VerticalGridLines />
                        <XAxis style={{ text: { stroke: 'none', fill: '#ffff', fontSize: 12 } }} />
                        <YAxis style={{ text: { stroke: 'none', fill: '#ffff', fontSize: 12 } }} />
                        <LineSeries

                            data={[{ x:1 , y:1  }, { x:2 , y:1.3  }, { x:3 , y:1.5  }, { x:4 , y:3  }, { x:5 , y:3.5  }, { x:6 , y:4  }, { x:7 , y:6  }, { x:8 , y:8 }, { x:9 , y:10  }, { x:10 , y:9  }, { x:11 , y:7  }, { x:12 , y:6  }]}
                        />
                        <LineSeries
                            data={[{ x:1 , y:0.6  }, { x:2 , y:0.7  }, { x:3 , y:0.3  }, { x:4 , y:0.4  }, { x:5 , y:0.5  }, { x:6 , y:0.4  }, { x:7 , y:0.8  }, { x:8 , y:1.2 }, { x:9 , y:1  }, { x:10 , y:0.2 }, { x:11 , y:0.5  }, { x:12 , y:0.6  }]}
                        />
                        <LineSeries
                            data={[{ x:1 , y:2  }, { x:2 , y:3  }, { x:3 , y:2.5  }, { x:4 , y:3.5  }, { x:5 , y:4  }, { x:6 , y:4  }, { x:7 , y:3.6  }, { x:8 , y:2.7 }, { x:9 , y:2 }, { x:10 , y:2.3 }, { x:11 , y:2  }, { x:12 , y:1.8 }]}
                        />
                        <LineSeries
                            data={[{ x:1 , y:4  }, { x:2 , y:5  }, { x:3 , y:5.5  }, { x:4 , y:4.7  }, { x:5 , y:4.4  }, { x:6 , y:4.3  }, { x:7 , y:4.7  }, { x:8 , y:5.2 }, { x:9 , y:5.5  }, { x:10 , y:4.9 }, { x:11 , y:4.5  }, { x:12 , y:4.7  }]}
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
