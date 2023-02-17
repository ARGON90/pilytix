import { ResponsiveBar } from '@nivo/bar'
import { barColors } from '../theme';


const BarChart = ({ data, yAxis, axisTheme, colors }) => (
    <>
        <div className='chart-title'>
            Factors Affecting Win
        </div>
        <ResponsiveBar
            data={data}
            keys={[
                'strong+',
                'medium+',
                'weak+',
                'strong-',
                'medium-',
                'weak-'
            ]}
            indexBy="strength"
            enableLabel={false}
            isInteractive={false}
            motionConfig='stiff'
            minValue={0}
            maxValue={yAxis}
            enableGridY={false}
            theme={axisTheme}
            colors={['#fa4f2d', '#fa6b4a', '#fa856a', '#65bc8e', '#40ae77', '#02a060']}
            colorBy="index"
            borderRadius={4}

            margin={{ top: 50, right: 0, bottom: 10, left: 50 }}
            padding={0.3}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            // fill={[
            //     {
            //         match: {
            //             id: 'fries'
            //         },
            //         id: 'dots'
            //     },
            //     {
            //         match: {
            //             id: 'sandwich'
            //         },
            //         id: 'lines'
            //     }
            // ]}
            // borderColor={{
            //     from: 'color',
            //     modifiers: [
            //         [
            //             'darker',
            //             1.6
            //         ]
            //     ]
            // }}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'strength',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                tickValues: yAxis,
                legend: 'number of factors',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            // axisBottom={null}

            // labelSkipWidth={12}
            // labelSkipHeight={12}
            // labelTextColor={{
            //     from: 'color',
            //     modifiers: [
            //         [
            //             'darker',
            //             1.6
            //         ]
            //     ]
            // }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    </>
)

export default BarChart;
