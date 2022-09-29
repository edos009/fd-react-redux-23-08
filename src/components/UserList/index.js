import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as ActionsUser from "../../actions/actionsUser";

const UserList = (props) => {
  const { users, isFetching, error } = useSelector(({ users }) => users);
  const navigate = useNavigate();

  const { getUsersRequest } = bindActionCreators(ActionsUser, useDispatch());

  const loadUsers = ({ limit = 5, offset = users.length } = {}) =>
    getUsersRequest({ limit, offset });

  useEffect(() => {
    loadUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      <h2>User List</h2>
      {isFetching && <div>Loading...</div>}
      {error && <div>{JSON.stringify(error)}</div>}
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => {
              navigate(`/users/${user.id}`);
            }}
          >
            {user.email}
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/")}>Back to Home</button>
      <br />
      <button onClick={loadUsers}>
        Load more...
      </button>
      <hr />
    </section>
  );
};

export default UserList;
