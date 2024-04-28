import { Loader } from "@/components/shared";
import { CONTEXT_TYPEs } from "@/context";
import { AuthContext } from "@/context/AuthContext";
import { UiContext } from "@/context/UiContext";
import { useLogout } from "@/react-query/query/auth.query";
import React, { useContext } from "react";

const Profile = () => {
  const {
    state: { user },
  } = useContext(AuthContext);
  const { dispatch } = useContext(UiContext);
  const { mutateAsync, isPending } = useLogout();
  return (
    <div className="w-full flex flex-col justify-center items-center  p-5 h-full gap-5 py-30">
      <div className="relative w-[100px] h-[100px]">
        <img
          className="rounded-full object-cover w-full h-full"
          src={`/images/profile.png`}
          alt="profile"
        />
      </div>
      <p className="text-center w-fit text-body1-light text-primary-500">
        {user?.name}
        <span className="text-blue-500 mx-2">
          <i className="fa-solid fa-certificate"></i>
        </span>
      </p>

      <button
        onClick={() =>
          dispatch({
            type: CONTEXT_TYPEs.PROFILE_FORM,
            payload: {
              id: user?.id,
              data: user,
            },
          })
        }>
        <p className="text-tertiary-500">
          Edit
          <span className="mx-2">
            <i className="fa-solid fa-pen-to-square"></i>
          </span>
        </p>
      </button>

      <button
        onClick={() => mutateAsync()}
        disabled={isPending}
        className="p-2 px-4 rounded-md bg-red-500 text-white">
        {isPending ? <Loader /> : "Logout"}
      </button>
      <div className="w-full max-w-[400px] mt-10 flex flex-col justify-center items-center rounded-lg border-2 border-solid border-secondary-500">
        <article className="w-full flex flex-row justify-between items-center gap-5 p-3 border-b-2 border-solid border-secondary-500">
          <div className="flex flex-row justify-center items-center gap-2">
            <span className="">
              <i className="fa-solid fa-at"></i>
            </span>
            <span>Email</span>
          </div>
          <span>{user?.email}</span>
        </article>
      </div>
    </div>
  );
};

export default Profile;
