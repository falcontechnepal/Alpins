import * as React from "react";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import DeleteAlert from "../DeleteAlert";
import { useContext } from "react";
import { AncientHimalayanContext } from "../../../context/Context";
import { format } from "timeago.js";

export default function MailTable() {
  const { mails } = useContext(AncientHimalayanContext);

  return (
    <>
      <div className="customCard mt-2 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Message</th>
              <th scope="col">Time</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mails &&
              mails.map((mail: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">1</th>
                  <td>{mail.name}</td>
                  <td>{mail.email}</td>
                  <td>{mail.message}</td>
                  <td>{format(mail.createdAt)}</td>

                  <td>
                    <div className="d-flex ">
                      <Link href={`staffDetails/1`}>
                        <IconButton aria-label="delete">
                          <VisibilityIcon
                            fontSize="inherit"
                            color="warning"
                          />
                        </IconButton>
                      </Link>
                      {/* <EditEmployeeDetailDialog /> */}
                      <DeleteAlert />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
