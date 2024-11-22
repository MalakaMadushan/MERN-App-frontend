import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import Axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    Axios.get(process.env.REACT_APP_ENDPOINT + "/api/users")
      .then((response) => {
        console.log(response.data.response);
        setUsers(response.data?.response || []);
      })
      .catch((error) => {
        console.error("Axios Error", error);
      });
  };

  const addUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    };
    Axios.post(process.env.REACT_APP_ENDPOINT + "/api/createuser", payload)
      .then((response) => {
        console.log(response);
        setSubmitted(false);
        setIsEdit(false);
        getUser();
      })
      .catch((error) => {
        console.error("Axios Error", error);
      });
  };

  const updateUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    };
    Axios.post(process.env.REACT_APP_ENDPOINT + "/api/updateuser", payload)
      .then((response) => {
        console.log(response);
        setSubmitted(false);
        setIsEdit(false);
        getUser();
      })
      .catch((error) => {
        console.error("Axios Error", error);
      });
  };

  const deleteUser = (data) => {
    Axios.delete(process.env.REACT_APP_ENDPOINT + "/api/deleteuser", {
      data: { id: data.id },
    })
      .then(() => {
        getUser();
      })
      .catch((error) => {
        console.error("Axios Error", error);
      });
  };

  return (
    <Box
      sx={{
        width: "calc(100% - 100px)",
        margin: "auto",

        marginTop: "50px",
      }}
    >
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        submitted={submitted}
        data={selectedUser}
        isEdit={isEdit}
      />
      <UserTable
        rows={users}
        selectedUser={(data) => {
          setSelectedUser(data);
          setIsEdit(true);
        }}
        deleteUser={(data) =>
          window.confirm("Are you Sure ?") && deleteUser(data)
        }
      />
    </Box>
  );
};

export default Users;
