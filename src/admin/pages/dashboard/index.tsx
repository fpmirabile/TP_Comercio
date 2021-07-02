import * as React from "react";
import { Helmet } from "react-helmet";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import orderApi, { getStatusText, Order } from "../../../api/models/order";
import productApi, { Product } from "../../../api/models/product";
import { LoggedUser } from "../../../App";
import "./styles.scss";

interface PropTypes {
  user?: LoggedUser;
}

interface StateType {
  orders: Order[];
  topSellProducts: Product[];
}

class Dashboard extends React.PureComponent<PropTypes, StateType> {
  state: StateType = {
    orders: [],
    topSellProducts: [],
  };

  async componentDidMount() {
    const orders = await orderApi.get();
    const topSellProducts = await productApi.topSell();

    this.setState({
      orders,
      topSellProducts,
    });
  }

  render() {
    const { user } = this.props;
    const { orders, topSellProducts } = this.state;
    return (
      <div className="dashboard">
        <Helmet>
          <title>Dashboard - Admin</title>
        </Helmet>
        <h1>Bienvenido, {user?.email || "Usuario"}</h1>
        <h3>Este es tu dashboard</h3>
        <br />
        <br />
        <br />
        <div className="chart-aligner">
          <div>
            <h5>Productos con mas ventas este mes</h5>
            <div className="chart-container">
              <BarChart
                width={600}
                height={250}
                data={topSellProducts.map((p) => {
                  return {
                    name: p.name,
                    ventasRealizadas: p.soldQuantity,
                  };
                })}
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
                {/* <Bar name="Productos en carrito" dataKey="pv" fill="#8884d8" /> */}
                <Bar
                  name="Ventas realizadas"
                  dataKey="ventasRealizadas"
                  fill="#82ca9d"
                />
              </BarChart>
            </div>
          </div>
          <div>
            <h5>Ordenes creadas este mes</h5>
            <div className="chart-container">
              <BarChart
                width={600}
                height={250}
                data={ orders.map((o) => {
                  return {
                    count: orders.filter((x) => x.status === o.status).length,
                    status: getStatusText(o.status),
                  };
                })}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="status" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar name="Total" dataKey="count" fill="#8884d8" />
                {/* <Bar name="Creadas" dataKey="creadas" fill="#82ca9d" /> */}
              </BarChart>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
