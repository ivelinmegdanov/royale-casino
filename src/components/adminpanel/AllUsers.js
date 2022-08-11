export const AllUsers = (props) => {
  const users = Object.entries(props.users);
  return (
    <tbody>
      {Object.values(users).map((user) => (
        <tr key={user[0]}>
          <td>
            <img
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
              alt=""
            />
            <a href="#" className="user-link blacky">
              Mila Kunis
            </a>
            <span className="user-subhead">{Object.values(user[1])[0].isAdmin ? "Admin" : "User"}</span>
          </td>
          <td>{Object.values(user[1])[0].phoneNumber}</td>
          <td className="text-center">
            <span className="label label-default">{Object.values(user[1])[0].balance} $</span>
          </td>
          <td>
            <a href="#" className="blacky">
              mila@kunis.com
            </a>
          </td>
          <td style={{ width: "20%" }}>
            <a href="#" className="table-link">
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x" />
                <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
              </span>
            </a>
            <a href="#" className="table-link">
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x" />
                <i className="fa fa-pencil fa-stack-1x fa-inverse" />
              </span>
            </a>
            <a href="#" className="table-link danger">
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x" />
                <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
              </span>
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
