import React from 'react';
import { Mydata } from '../shares/Mydatafile';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";



function Mycharts() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 bg-dark'>
                    <BarChart
                        width={1200}
                        height={600}
                        data={Mydata}>
                        <CartesianGrid strokeDasharray="2 2" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="blue" />
                        <Bar dataKey="uv" fill="green" />
                        <Bar dataKey="amt" fill="red" />
                    </BarChart>
                    

                </div>
            </div>
        </div>
    )
}

export default Mycharts