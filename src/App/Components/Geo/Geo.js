import React, { Component } from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import data from '../../data/data';
import countries from '../../data/world_countries.json';
import './Geo.css';
import Bubble from '../Bubble/Bubble';
import backLogo from '../../Assets/back.svg';

class Geo extends Component {

    state={
        geoContainer: 'Geo-container',
        backButtonStyle: 'disable-backbutton',
        bubbleChartStyle: 'Bubble-container',
        bubbleChartData:''
    }

    openBubble(e){
        console.log("e",e.data);
        if(e.data !== undefined){
            this.setState({ geoContainer: 'zoom'})

            setTimeout(() =>{
            this.setState({ geoContainer: 'no-Geo-chart', 
                            bubbleChartData: e.data, 
                            bubbleChartStyle: "chart-fade-in", 
                            backButtonStyle: 'backbutton-container'  })
            },1000)
        }
    }

    closeBubble(){
        this.setState({ geoContainer: 'Geo-container', bubbleChartStyle: "chart-fade-out", 
                        backButtonStyle: 'disable-backbutton',})

        setTimeout(() =>{
        this.setState({ bubbleChartStyle: "Bubble-container"  })
        },1000)
    }

    render() {

        const projectionScaleValue = window.innerWidth <= 768 ? 60 : 150

        return (
            <div>
                <div className= {this.state.geoContainer}
                    // onClick={(e) => this.openBubble(e)}
                    >
                    <ResponsiveChoropleth
                            onClick = {(e) => this.openBubble(e)}
                            data={data}
                            colors={['#ffb01d', '#ffa020', '#ff9221', '#ff8424', '#ff7425', '#fc5e2f', '#f94b3a', '#f63a48',]}
                            features={countries.features}
                            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                            domain={[ 0, 1000000 ]}
                            unknownColor="#666666"
                            label="properties.name"
                            valueFormat=".2s"
                            projectionScale={projectionScaleValue}
                            projectionTranslation={[ 0.5, 0.5 ]}
                            projectionRotation={[ 0, 0, 0 ]}
                            enableGraticule={false}
                            graticuleLineColor="#dddddd"
                            borderWidth={0.5}
                            borderColor="#152538"
                            legends={[
                                {
                                    anchor: 'left',
                                    direction: 'column',
                                    justify: false,
                                    translateX: 0,
                                    translateY: 35,
                                    itemWidth: 100,
                                    itemHeight: 9,
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

            <div className={this.state.backButtonStyle} onClick={() => this.closeBubble() }>
                <img src={backLogo} alt={'back'} />
                <div>back to world</div>
            </div>

            <Bubble bubbleChartStyle={this.state.bubbleChartStyle} bubbleChartData={this.state.bubbleChartData} />

            </div>
        )
    }
}

export default Geo;
