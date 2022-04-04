import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie } from 'recharts';


const data = [
    { name: 'Page A', uv: 4000 },
    { name: 'Page B', uv: 3000 },
    { name: 'Page C', uv: 2000 },
    { name: 'Page D' },
    { name: 'Page E', uv: 1890 },
    { name: 'Page F', uv: 2390 },
    { name: 'Page G', uv: 3490 },
];


const Dashboard = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('data-of-chart.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    console.log(data);

    return (
        <div>

            <div className='grid grid-cols-2' >
                <div className='' >
                    <div className='w-full' width="100%" height={200}>
                        <LineChart
                            width={500}
                            height={200}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey='month' />
                            <YAxis />
                            <Tooltip />
                            <Line connectNulls type="monotone" dataKey="sell" stroke="#8884d8" fill="#8884d8" />
                        </LineChart>
                    </div>

                </div> {/* one */}

                <div className='' >
                    <div className='w-full' width="100%" height="100%">
                        <AreaChart
                            width={500}
                            height={200}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                            <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                            <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                        </AreaChart>
                    </div>
                </div>

                <div width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                    </BarChart>
                </div>



                <div width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        <Pie data={data} dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={data} dataKey="investment" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        <Tooltip />
                    </PieChart>
                </div>


            </div>



        </div>
    );
};

export default Dashboard;