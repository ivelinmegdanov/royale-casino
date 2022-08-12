export const AllUsers = (props) => {
  const users = Object.entries(props.users);

  const makeAdmin = async (params, uid) => {
    if (!params.isAdmin) {
      let data;

      await fetch(
        `https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`
      )
        .then((response) => response.json())
        .then((x) => (data = x));

      Object.values(data)[0].isAdmin = true;

      await fetch(
        `https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}/.json`,
        {
          method: "PUT",
          body: JSON.stringify(data),
        }
      );
    } else {
      alert("User is already ADMIN!");
    }
  };

  const deleteUser = async (params, uid) => {
    if (!params.isDeleted) {
      let data;

      await fetch(
        `https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`
      )
        .then((response) => response.json())
        .then((x) => (data = x));

      Object.values(data)[0].isDeleted = true;

      await fetch(
        `https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}/.json`,
        {
          method: "PUT",
          body: JSON.stringify(data),
        }
      );
    } 
    else {
      alert("User is already Deleted!");
    }
  };

  return (
    <tbody>
      {Object.values(users).map((user) => (
        <tr key={user[0]}>
          <td>
            <img src={Object.values(user[1])[0].photoURL} alt="" />
            <span className="user-link blacky">
              {Object.values(user[1])[0].username}
            </span>
            <span className="user-subhead">
              {Object.values(user[1])[0].isAdmin ? "Admin" : "User"}
            </span>
          </td>
          <td>{Object.values(user[1])[0].phoneNumber}</td>
          <td className="text-center">
            <span className="label label-default">
              {Object.values(user[1])[0].balance} $
            </span>
          </td>
          <td>
            <span className="blacky">{Object.values(user[1])[0].email}</span>
          </td>
          <td style={{ width: "20%" }}>
            <a href
              onClick={() => {
                makeAdmin(Object.values(user[1])[0], Object.values(user)[0]);
              }}
              className="table-link"
            >
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x" />
                <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
              </span>
            </a>
            <a href
              onClick={() => {
                deleteUser(Object.values(user[1])[0], Object.values(user)[0]);
              }}
              className="table-link danger"
            >
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
