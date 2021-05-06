import * as React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./styles.scss";

class Dashboard extends React.PureComponent {
  render() {
    return (
      <div className="dashboard">
        <h1>Bienvenido, Usuario</h1>
        <h3>Este es tu dashboard</h3>
        <br />
        <br />
        <br />
        <div>
          <h5>Ventas de este mes</h5>
          <div className="chart-container">
            <BarChart
              width={600}
              height={250}
              data={data}
              margin={{
                top: 5,
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
              <Bar name="Productos en carrito" dataKey="pv" fill="#8884d8" />
              <Bar name="Ventas por hacer" dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

const data = [
  {
    name: "Enero",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Febrero",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Marzo",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Abril",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Mayo",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];
