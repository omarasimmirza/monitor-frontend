import "./chart.scss";
import {
    AreaChart,
    Area,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const Chart = ({ machines }) => {
    const cpu_data = []
    const memory_data = []
    for (var i = 0; i < machines.length; i++) {
        var mem_dict = { name: machines[i].ip, Total: parseFloat(machines[i].memory_usage)};
        var cpu_dict = { name: machines[i].ip, Total: parseFloat(machines[i].cpu_usage)};
        cpu_data[i] = cpu_dict;
        memory_data[i] = mem_dict;
    }
    // {
        // console.log(memory_data);
    // }
    return (
        <div className="chart">
            <div className="title">Compare (%)</div>
            <ResponsiveContainer width="100%" aspect={3 / 1}>
                <AreaChart
                    width={730}
                    height={250}
                    data={memory_data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="gray" />
                    <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="Total"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#total)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
