import { ResponsiveBar } from '@nivo/bar'

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
        />
    </>
)

export default BarChart;
