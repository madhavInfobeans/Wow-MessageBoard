import React, { useState, useEffect } from "react";
import "../css/userlist.css";
import UserContactList from "./UserContactList";
import axios from "axios";

function UserContact() {
  var [usercontact, setContactList] = useState([]);

  const callUserContact = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "http://localhost:4000/contact",
      });
      const data = await res.data;
      console.log(data);
      setContactList(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    callUserContact();
  }, []);
  return (
    <div className="padding">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">
          <div className="box">
            <div className="box-header with-border">
              <h1 className="box-title">Feedback User List</h1>
              <div className="box-body">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th style={{ width: "10px" }}>S.no</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th style={{ width: "40px" }}>Mobile</th>
                    </tr>
                    {usercontact.map(function (each) {
                      return <UserContactList data={each} key={each.id} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserContact;
