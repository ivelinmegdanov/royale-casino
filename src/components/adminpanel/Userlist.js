import "./Userlist.css";
import { Adminpanel } from "../pages/Adminpanel";
import { AllUsers } from "./AllUsers";
import { useFetch } from "../customhooks/useFetch";

export const Userlist = () => {
  const {
    data: users,
    isPending,
    error,
  } = useFetch(
    "https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/users.json"
  );
  return (
    <>
      <Adminpanel />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-box clearfix">
              <div className="table-responsive">
                <table className="table user-list">
                  <thead>
                    <tr>
                      <th>
                        <span className="whitey">User</span>
                      </th>
                      <th>
                        <span className="whitey">Number</span>
                      </th>
                      <th className="text-center">
                        <span className="whitey">Balance</span>
                      </th>
                      <th>
                        <span className="whitey">Email</span>
                      </th>
                      <th>
                        <span className="whitey">Make Admin / Delete</span>
                      </th>
                    </tr>
                  </thead>
                  {error && <div>{error}</div>}
                  {isPending && <div>Loading...</div>}
                  {users && <AllUsers users={users} />}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
