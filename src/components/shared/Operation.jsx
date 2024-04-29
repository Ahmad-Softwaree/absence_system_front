import { UtilContext } from "@/context/UtilContext";
import { CONTEXT_TYPEs } from "@/context";
import { useContext } from "react";
import { Loader } from ".";

import { useDeleteEmployee } from "@/react-query/query/employee.query";
import { useCheckIn, useCheckOut } from "@/react-query/query/absence.query";

export default function operation() {
  const {
    dispatch,
    state: { id, method, image, type, data },
  } = useContext(UtilContext);

  const { mutateAsync: deleteEmployee, isPending: deleteEmployeeLoading } =
    useDeleteEmployee(id);
  const { mutateAsync: deleteDepartment, isPending: deleteDepartmentLoading } =
    useDeleteEmployee(id);
  const { mutateAsync: checkIn, isPending: checkInLoading } = useCheckIn(id);
  const { mutateAsync: checkOut, isPending: checkOutLoading } = useCheckOut(id);
  const flag = Boolean(
    deleteEmployeeLoading ||
      deleteDepartmentLoading ||
      checkInLoading ||
      checkOutLoading
  );

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        switch (method) {
          case CONTEXT_TYPEs.DELETE_EMPLOYEE:
            await deleteEmployee();
            break;
          case CONTEXT_TYPEs.DELETE_DEPARTMENT:
            await deleteDepartment();
            break;
          case CONTEXT_TYPEs.CHECK_IN:
            await checkIn();
            break;
          case CONTEXT_TYPEs.CHECK_OUT:
            await checkOut();
            break;
          default:
            break;
        }
        dispatch({
          type: CONTEXT_TYPEs.OPERATION,
        });
      }}
      data-aos="fade-up"
      className={`bg-primary-500 text-white z-[1500] fixed inset-0 m-auto w-fit h-fit p-10 rounded-lg  flex flex-col justify-center items-center transition-all duration-200  gap-5 shadow-xl`}>
      <h2>You Sure Bro?</h2>
      <div className="flex flex-row w-full justify-center items-center gap-5">
        <button
          type="button"
          onClick={() => {
            dispatch({
              type: CONTEXT_TYPEs.OPERATION,
              payload: null,
            });
          }}
          className="p-2 px-10 bg-red-500 cursor-pointer rounded-lg bg-green text-black-500">
          No
        </button>
        <button
          type="submit"
          disabled={flag}
          className="p-2 px-10 text-white-500 bg-tertiary-500 cursor-pointer rounded-lg disabled:bg-gray-500">
          {flag ? <Loader /> : "Yes"}
        </button>
      </div>
    </form>
  );
}
