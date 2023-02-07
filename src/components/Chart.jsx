import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'General',
    uv: 40,
    pv: 20,
    sv: 20,
    amt: 20,
  },
  {
    name: 'Manifesto',
    uv: 30,
    pv: 10,
    sv: 10,
    amt: 2210,
  },
  {
    name: 'Knowledge & Political History',
    uv: 20,
    pv: 10,
    sv: 40,
    amt: 2290,
  },
  {
    name: 'Global & Business Exposure',
    uv: 20,
    pv: 30,
    sv: 10,
    amt: 2000,
  },
  {
    name: 'Values',
    uv: 20,
    pv: 30,
    sv: 30,
    amt: 20,
  },
];

export default function Chart () {

    return (
      <ResponsiveContainer width={1100} aspect={2}>
        <BarChart
          width={300}
          height={100}
          data={data}
          margin={{
            top: 190,
            right: 25,
            left: 0,
            bottom: 55,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{fontFamily: 'Nunito+Sans'}} />
          <YAxis type='number' domain={[0, 10, 20, 30, 40, 50, 60]} />
          <Bar dataKey="pv" fill="#0F4C4B" />
          <Bar dataKey="uv" fill="#87A5A5" />
          <Bar dataKey="sv" fill="#277d7d" />
        </BarChart>
      </ResponsiveContainer>
    );
}
