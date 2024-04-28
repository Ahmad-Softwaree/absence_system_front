import { ProfileForm } from "@/components/forms";
import EmployeeForm from "@/components/forms/EmployeeForm";

import { Operation, Opacity } from "@/components/shared";
import { AuthContext } from "@/context/AuthContext";
import { UiContext } from "@/context/UiContext";
import { UtilContext } from "@/context/UtilContext";
import { useContext } from "react";

const Modals = () => {
  const {
    state: { profile, employee },
  } = useContext(UiContext);

  const {
    state: { operation },
  } = useContext(UtilContext);
  const flag = Boolean(profile || operation || employee);
  return (
    <>
      {flag && <Opacity />}
      {operation && <Operation />}
      {profile && <ProfileForm />}
      {employee && <EmployeeForm />}
    </>
  );
};

export default Modals;
