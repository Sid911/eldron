import React from 'react'
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
} from 'react-vis'

function AppointmentGraphs() {
    const greenData = [{ x: 'A', y: 10 }, { x: 'B', y: 5 }, { x: 'C', y: 15 }];

    const blueData = [{ x: 'A', y: 12 }, { x: 'B', y: 2 }, { x: 'C', y: 11 }];
    return (
        <div>
            <XYPlot xType="ordinal" width={500} height={300} xDistance={100}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <VerticalBarSeries className="vertical-bar-series-example" data={greenData} />
                <VerticalBarSeries data={blueData} />
            </XYPlot>
        </div>
    )
}

export default AppointmentGraphs
