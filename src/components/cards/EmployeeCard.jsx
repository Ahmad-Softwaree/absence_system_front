import { TableCell, TableRow } from "@/components/ui/table";
import Delete from "../icons/Delete";
import Update from "../icons/Update";
import { useContext } from "react";
import { UiContext } from "@/context/UiContext";
import { CONTEXT_TYPEs } from "@/context";
import { UtilContext } from "@/context/UtilContext";
import { convertTimeStampToDate } from "@/lib/functions";
import {
  useCheckCheckIn,
  useCheckCheckOut,
} from "@/react-query/query/absence.query";
export default function EmployeeCard({ index, val }) {
  const { dispatch } = useContext(UiContext);
  const { dispatch: util } = useContext(UtilContext);

  const { data: checkIn, isPending: checkInLoading } = useCheckCheckIn(
    val?.e_log_id
  );
  const { data: checkOut, isPending: checkOutLoading } = useCheckCheckOut(
    val?.e_log_id
  );

  return (
    <TableRow>
      <TableCell>{val.id}</TableCell>
      <TableCell>{val?.name}</TableCell>
      <TableCell>{val.e_log_id}</TableCell>

      <TableCell>{val?.gender}</TableCell>
      <TableCell>{val?.age}</TableCell>
      <TableCell>$ {val?.salary}</TableCell>

      <TableCell>{convertTimeStampToDate(val?.created_at)}</TableCell>
      <TableCell>
        {checkIn ? (
          <p>Checked</p>
        ) : (
          <button
            disabled={checkIn}
            onClick={() =>
              util({
                type: CONTEXT_TYPEs.OPERATION,
                payload: {
                  id: val.e_log_id,
                  method: CONTEXT_TYPEs.CHECK_IN,
                },
              })
            }
            className="p-2 px-4 rounded-md bg-tertiary-500 text-white disabled:bg-gray-500">
            Check In
          </button>
        )}
      </TableCell>
      <TableCell>
        {checkOut ? (
          <p>Checked</p>
        ) : (
          <button
            disabled={checkOut}
            onClick={() =>
              util({
                type: CONTEXT_TYPEs.OPERATION,
                payload: {
                  id: val.e_log_id,
                  method: CONTEXT_TYPEs.CHECK_OUT,
                },
              })
            }
            className="p-2 px-4 rounded-md bg-tertiary-500 text-white disabled:bg-gray-500">
            Check Out
          </button>
        )}
      </TableCell>
      <TableCell>
        <Update
          onClick={() =>
            dispatch({
              type: CONTEXT_TYPEs.EMPLOYEE_FORM,
              payload: {
                id: val.id,
                data: val,
                type: "update",
              },
            })
          }
          variant="tertiary"
          size="sm"
        />
      </TableCell>
      <TableCell>
        <Delete
          onClick={() =>
            util({
              type: CONTEXT_TYPEs.OPERATION,
              payload: {
                id: val.id,
                method: CONTEXT_TYPEs.DELETE_EMPLOYEE,
              },
            })
          }
          variant="red"
          size="sm"
        />
      </TableCell>
    </TableRow>
  );
}
