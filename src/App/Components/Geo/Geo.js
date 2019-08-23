import React, { Component } from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import data from '../../data/data';
import countries from '../../data/world_countries.json';
import './Geo.css';
import Bubble from '../Bubble/Bubble';

class Geo extends Component {

    state={
        geoContainer: 'Geo-container',
    }

    openBubble(e){
        // console.log("e",e);
        this.setState({ geoContainer: 'zoom'})

        setTimeout(() =>{
        this.setState({ geoContainer: 'no-Geo-chart'})
        },1000)
    }

    render() {
        return (
            <div>
                <div className= {this.state.geoContainer}
                    onClick={(e) => this.openBubble(e)}>
                    <ResponsiveChoropleth
                            onClick = {(e) => console.log(e)}
                            data={data}
                            colors={['#ffb01d', '#ffa020', '#ff9221', '#ff8424', '#ff7425', '#fc5e2f', '#f94b3a', '#f63a48',]}
                            features={countries.features}
                            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                            domain={[ 0, 1000000 ]}
                            unknownColor="#666666"
                            label="properties.name"
                            valueFormat=".2s"
                            projectionScale={150}
                            projectionTranslation={[ 0.5, 0.5 ]}
                            projectionRotation={[ 0, 0, 0 ]}
                            enableGraticule={true}
                            graticuleLineColor="#dddddd"
                            borderWidth={0.5}
                            borderColor="#152538"
                            legends={[
                                {
                                    anchor: 'left',
                                    direction: 'column',
                                    justify: false,
                                    translateX: 0,
                                    translateY: 0,
                                    itemWidth: 100,
                                    itemHeight: 10,
                                    itemsSpacing: 4,
                                    symbolSize: 20,
                                    itemDirection: 'left-to-right',
                                    itemTextColor: '#777',
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemTextColor: '#000',
                                                itemBackground: '#f7fafb'
                                            }
                                        }
                                    ]
                                }
                            ]}
                        />
                </div>
            
            <Bubble />

            </div>
        )
    }
}

export default Geo;
