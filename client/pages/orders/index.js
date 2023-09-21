import Router from "next/router";

const OrderIndex = ({ orders }) => {
  if (orders.length < 1) {
    return <div>No orders</div>;
  }
  const handleClick = (order) => {
    
    if (order.status === "created") {
      Router.push("/orders/[orderId]", `/orders/${order.id}`);
    }
  };
  return (
    <ul className="list-unstyled">
      {orders.map((order) => {
        const date = new Date(order.expiresAt);
        console.log(order.expiresAt);
        return (
          <li key={order.id}>
            <div
              role={order.status === "created" ? "button" : ""}
              onClick={handleClick.bind(this, order)}
              className={[
                "px-3 py-2 rounded my-2 d-flex justify-content-between",
                order.status === "complete" && "bg-success text-white",
                order.status === "created" && "bg-warning text-black",
                order.status === "cancelled" && "bg-danger text-white",
              ].join(" ")}
            >
              <span>
                {order.ticket.title}{" "}
                {order.status === "created" &&
                  `expiresAt: ${date.getHours()}:${date.getMinutes()}, ${date.getDate()}/${
                    date.getMonth() + 1
                  }/${date.getFullYear()}`}{" "}
                - {order.status}
              </span>
              <span>{order.ticket.price}$</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

OrderIndex.getInitialProps = async (context, client) => {
  const { data } = await client.get("/api/orders");

  return { orders: data };
};

export default OrderIndex;
