import { Link } from "react-router-dom";

const Table = () => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Contact</th>
          <th>City</th>
          <th>State</th>
          <th>Acitve</th>
          <th>Lead</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>01</th>
          <th>John Cena</th>
          <th>50</th>
          <th>jc@wwe.com</th>
          <th>9953189552</th>
          <th>Delhi</th>
          <th>Delhi</th>
          <th>False</th>
          <th>False</th>
          <th>
            <Link to="/">Edit</Link>
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
