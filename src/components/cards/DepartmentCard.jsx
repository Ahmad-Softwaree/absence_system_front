import { TableCell, TableRow } from "@/components/ui/table";
import Delete from "../icons/Delete";
import Update from "../icons/Update";
import { useContext } from "react";
import { UiContext } from "@/context/UiContext";
import { CONTEXT_TYPEs } from "@/context";
import { UtilContext } from "@/context/UtilContext";
import { convertTimeStampToDate } from "@/lib/functions";
export default function DepartmentCard({ index, val }) {
  const { dispatch } = useContext(UiContext);
  const { dispatch: util } = useContext(UtilContext);

  return (
    <TableRow>
      <TableCell>{val.id}</TableCell>
      <TableCell>{val?.name}</TableCell>
      <TableCell>{val.e_log_id}</TableCell>

      <TableCell>{convertTimeStampToDate(val?.created_at)}</TableCell>
      <TableCell>
        <Update
          onClick={() =>
            dispatch({
              type: CONTEXT_TYPEs.DEPARTMENT_FORM,
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
                method: CONTEXT_TYPEs.DELETE_DEPARTMENT,
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
