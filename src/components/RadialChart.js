import { ResponsiveRadialBar } from '@nivo/radial-bar'


const RadialChart = ({ data, color}) => (
    <ResponsiveRadialBar
        data={data}
        valueFormat=">-.2f"
        padding={0.4}
        cornerRadius={2}
        enableTracks={false}
        enableRadialGrid={false}
        enableCircularGrid={false}
        isInteractive={false}
        endAngle={360}
        maxValue={100}
        colors={[color]}
        colorBy="index"
        circularAxisOuter={null}
        margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
        radialAxisStart={{ tickSize: 0, tickPadding: 0, tickRotation: 0 }}
    />
)
 export default RadialChart;
