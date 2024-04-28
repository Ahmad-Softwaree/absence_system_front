import { UiContext } from "@/context/UiContext";
import React, { useContext, useEffect, useRef } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
} from "@chakra-ui/react";
import { useUpdateProfile } from "@/react-query/query/auth.query";
import { CONTEXT_TYPEs } from "@/context";
import { Loader } from "../shared";
const ProfileForm = () => {
  const { mutateAsync, isPending } = useUpdateProfile();
  const {
    dispatch,
    state: { data, id },
  } = useContext(UiContext);
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const formRef = useRef();
  useEffect(() => {
    if (data) {
      name.current.value = data?.name;
      email.current.value = data?.email;
    }
  }, [data]);

  return (
    <form
      ref={formRef}
      onSubmit={async (e) => {
        e.preventDefault();
        await mutateAsync({
          name: name.current.value,
          email: email.current.value,
          password: password.current.value,
        });
        formRef.current.reset();
        dispatch({
          type: CONTEXT_TYPEs.PROFILE_FORM,
        });
      }}
      className="fixed inset-0 m-auto p-5 max-h-[600px] overflow-y-auto rounded-md bg-primary-500 shadow-md z-[1100] w-[95%] max-w-[500px] h-fit flex flex-col justify-start items-center gap-5 text-white">
      <h2 className="w-full text-center text-body1-semibold">Update Profile</h2>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input ref={name} type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input ref={email} type="email" />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input ref={password} type="password" />
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
            type: CONTEXT_TYPEs.PROFILE_FORM,
          })
        }
        className="w-full p-2 rounded-md bg-red-500 text-white">
        Close
      </button>
    </form>
  );
};

export default ProfileForm;
