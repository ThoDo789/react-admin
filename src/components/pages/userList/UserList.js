import React, { useState } from "react";
import "./userlist.css";
import { DataGrid as TableGridData } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../constant";
import { Link } from "react-router-dom";

const UserList = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },

    {
      field: "email",
      headerName: "email",

      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      width: 160,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      sortable: false,
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`user/${params.row.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="user-list">
      <TableGridData
        static
        rows={data}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
