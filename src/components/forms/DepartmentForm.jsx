import { UiContext } from "@/context/UiContext";
import React, { useContext, useEffect, useRef } from "react";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { CONTEXT_TYPEs } from "@/context";
import {
  useAddDepartment,
  useUpdateDepartment,
} from "@/react-query/query/department.query";
import { Loader } from "../shared";
import { useGetEmployeesSelect } from "@/react-query/query/employee.query";
const DepartmentForm = () => {
  const {
    dispatch,
    state: { data, id, type },
  } = useContext(UiContext);
  const { mutateAsync, isPending } =
    type !== "update" ? useAddDepartment() : useUpdateDepartment(id);

  const { data: employees, isPending: employeesLoading } =
    useGetEmployeesSelect();
  const name = useRef();
  const e_log_id = useRef();
  const formRef = useRef();

  useEffect(() => {
    if (data && type === "update") {
      console.log(data);
      name.current.value = data?.name;
      e_log_id.current.value = data?.e_log_id;
    }
  }, [data]);

  return (
    <form
      ref={formRef}
      onSubmit={async (e) => {
        e.preventDefault();
        await mutateAsync({
          name: name.current.value,
          e_log_id: e_log_id.current.value,
        });
        formRef.current.reset();
        dispatch({
          type: CONTEXT_TYPEs.DEPARTMENT_FORM,
        });
      }}
      className="fixed inset-0 m-auto p-5 max-h-[600px] overflow-y-auto rounded-md bg-primary-500 shadow-md z-[1100] w-[95%] max-w-[500px] h-fit flex flex-col justify-start items-center gap-5 text-white">
      <h2 className="w-full text-center text-body1-semibold">
        {type !== "update" ? "Add" : "Update"} Department
      </h2>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input ref={name} type="text" />
      </FormControl>

      <FormControl>
        <FormLabel>Employee</FormLabel>
        <Select ref={e_log_id} placeholder="Select Employee">
          {employees?.map((val, index) => {
            return (
              <option
                key={index}
                className="text-primary-500"
                value={val.e_log_id}>
                {val.name}
              </option>
            );
          })}
        </Select>
      </FormControl>

      <button
        type="submit"
        disabled={isPending}
        className="w-full p-2 rounded-md bg-tertiary-500 text-white mt-5">
        {isPending ? <Loader /> : "Submit"}
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: CONTEXT_TYPEs.DEPARTMENT_FORM,
          })
        }
        className="w-full p-2 rounded-md bg-red-500 text-white">
        Close
      </button>
    </form>
  );
};

export default DepartmentForm;
