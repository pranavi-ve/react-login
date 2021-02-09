import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../_actions";
import { tableHeaders } from "../_constants";
import { TableContainer as Table, Pagination } from "../_components";

class AuditPage extends React.Component {
  componentDidMount() {
    this.props.getUsers(1);
  }

  handleDeleteUser(id) {
    return (e) => this.props.deleteUser(id);
  }
  handlePagination = (reqPageNo) => {
    this.props.getUsers(reqPageNo);
  };
  render() {
    const { user, users } = this.props;
    return (
      <div>
        <h1>Hi {user.firstName}!</h1>
        <p>This is Auditor Page. Only Auditors can access</p>
        <h3>All registered users:</h3>
        {users.loading && <em>Loading users...</em>}
        {users.error && (
          <span className="text-danger">ERROR: {users.error}</span>
        )}
        {users.data && (
          <React.Fragment>
            <Pagination
              handlePagination={this.handlePagination}
              page={users.page}
            />
            <Table headers={tableHeaders}>{users.data}</Table>
          </React.Fragment>
        )}
      </div>
    );
  }
}

function mapState(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return { user, users };
}

const actionCreators = {
  getUsers: userActions.getAll,
  deleteUser: userActions.delete,
};

const connectedAuditPage = connect(mapState, actionCreators)(AuditPage);
export { connectedAuditPage as AuditPage };
