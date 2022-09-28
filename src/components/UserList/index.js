import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as ActionsUser from "../../actions/actionsUser";

const UserList = (props) => {
  const {
    users,
    isFetching,
    error,
    getUsersRequestDispatch,
  } = props;

  const navigate = useNavigate();

  useEffect(() => {
    getUsersRequestDispatch({ limit: 5, offset: users.length });
    // eslint-disable-next-line
  }, []);


  return (
    <section>
      <h2>User List</h2>
      {isFetching && <div>Loading...</div>}
      {error && <div>{JSON.stringify(error)}</div>}
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => {
            navigate(`/users/${user.id}`)}
            }>
            {user.email}
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/')}>Back to Home</button>
      <br/>
      <button
        onClick={() =>
          getUsersRequestDispatch({ limit: 5, offset: users.length })
        }
      >
        Load more...
      </button>
      <hr />
    </section>
  );
};

const mapStateToProps = ({ users }) => users;

const mapDispatchToProps = (dispatch) => ({
  getUsersRequestDispatch: ({ limit, offset } = {}) =>
    dispatch(ActionsUser.getUsersRequest({ limit, offset })),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
