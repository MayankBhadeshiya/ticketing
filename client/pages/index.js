import Link from "next/link";

const LandingPage = ({ currentUser, tickets }) => {
  if (!currentUser) {
    return (
      <div className="text-center">
        <h1>Welcome to The Ticketing app</h1>
        <h3>Here You Can Sell Your Ticket for Events</h3>
      </div>
    );
  }

  const ticketList = tickets.map((ticket) => {
    return (
      <tr key={ticket.id}>
        <td>{ticket.title}</td>
        <td>{ticket.price}</td>
        <td>
          <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
            View
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Tickets</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>

        {tickets.length > 0 ? (
          <tbody>{ticketList}</tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan={3} className="text-center mt-3">
                No tickets are avilable
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get("/api/tickets");

  return { tickets: data };
};

export default LandingPage;
