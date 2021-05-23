import React from "react";

function UserContactList(props) {
  return (
    <>
      <tr>
        <td>{props.data.id}</td>
        <td>{props.data.firstname}</td>
        <td>{props.data.email}</td>
        <td>{props.data.mobile}</td>
      </tr>
    </>
  );
}

export default UserContactList;
