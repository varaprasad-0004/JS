import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const sl = [
  {
    name: 'Das',
    movie: 'Leo'
  },
  {
    name: 'Surya',
    movie: 'Vikram'
  },
  {
    name: 'Karthi',
    movie: 'Khadhi'
  }
];

const chartData = sl.map(item => ({
  name: item.name,
  movie: item.movie
}));

function ActorMovieChart() {
  return (
    <BarChart width={600} height={400} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="movie" />
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Legend />
      <Bar dataKey="name" fill="#8884d8" />
    </BarChart>
  );
}

export default ActorMovieChart;
