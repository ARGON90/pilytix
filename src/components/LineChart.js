import { ResponsiveLine } from '@nivo/line';
import { lineChartPointFormat } from '../functions';

const LineChart = ({ data }) => (
    <>
        <div>
            myLine
        </div>
        <ResponsiveLine
            data={data}

            animate={false}
            tooltip={({ point }) => {
                console.log(point)
                return (
                    <div
                        style={{
                            background: 'white',
                            color: 'black',
                            padding: '9px 12px',
                            border: '1px solid #ccc',
                        }}
                    >
                        <div>{(lineChartPointFormat(point.id))}</div>
                        <div>Days Ago: {point.data.x}</div>
                        <div>probability: {point.data.yStacked}</div>
                    </div>
                )
            }}

            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 0,
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            curve="linear"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                tickValues: 4,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            enableGridX={false}
            enableGridY={false}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    </>
)

export default LineChart
