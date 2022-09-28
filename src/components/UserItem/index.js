import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as ActionsUser from "../../actions/actionsUser";

const UserItem = (props) => {
  const { selectedUser, getUserRequestDispatch } = props;
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserRequestDispatch({ userId });
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      {selectedUser && (
        <article>
          <h2>
            Full Name: {`${selectedUser.firstName} ${selectedUser.lastName}`}
          </h2>
          <p>Email: {selectedUser.email}</p>
          <p>Male:{selectedUser.isMale}</p>
          <p>Date Birthday: {selectedUser.birthday}</p>
        </article>
      )}
      <button onClick={() => navigate("/users")}>Back to Users</button>
    </section>
  );
};

const mapStateToProps = ({ users }) => users;

const mapDispatchToProps = (dispatch) => ({
  getUserRequestDispatch: ({ userId }) =>
    dispatch(ActionsUser.getUserRequest({ userId })),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserItem);
