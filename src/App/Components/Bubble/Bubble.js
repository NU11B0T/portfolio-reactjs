import React, { Component } from 'react';
import { ResponsiveBubble } from '@nivo/circle-packing';
import data from '../../data/bdata';
import './Bubble.css';
import PropTypes from 'prop-types';

export default class Bubble extends Component {

    state={
        bubbleContainer: 'Bubble-container'
    }
    
    render() {
        
        var chartDate = (data.filter((d) => { return d.id === this.props.bubbleChartData.id }))

        if (chartDate.length === 0){
            chartDate = data[0]
        }
        else{
            chartDate = chartDate[0]
        }
        return (
            <div className= {this.props.bubbleChartStyle}>
                <ResponsiveBubble
                    root={chartDate}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    identity="id"
                    value="value"
                    colors={{ scheme: 'nivo' }}
                    padding={6}
                    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
                    borderWidth={2}
                    borderColor={{ from: 'color' }}
                    defs={[
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'none',
                            color: 'inherit',
                            rotation: -45,
                            lineWidth: 5,
                            spacing: 8
                        }
                    ]}
                    fill={[ { match: { depth: 1 }, id: 'lines' } ]}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={12}
                />
            </div>
        )
    }
}

Bubble.propTypes  ={
    bubbleChartStyle: PropTypes.string,
}
Bubble.defaultProps  ={
    bubbleChartStyle: 'Bubble-container',
}
