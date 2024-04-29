import { ProfileForm } from "@/components/forms";
import DepartmentForm from "@/components/forms/DepartmentForm";
import EmployeeForm from "@/components/forms/EmployeeForm";

import { Operation, Opacity } from "@/components/shared";
import { AuthContext } from "@/context/AuthContext";
import { UiContext } from "@/context/UiContext";
import { UtilContext } from "@/context/UtilContext";
import { useContext } from "react";

const Modals = () => {
  const {
    state: { profile, employee, department },
  } = useContext(UiContext);

  const {
    state: { operation },
  } = useContext(UtilContext);
  const flag = Boolean(profile || operation || employee || department);
  return (
    <>
      {flag && <Opacity />}
      {operation && <Operation />}
      {profile && <ProfileForm />}
      {employee && <EmployeeForm />}
      {department && <DepartmentForm />}
    </>
  );
};

export default Modals;
