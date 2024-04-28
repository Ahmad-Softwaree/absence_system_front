import { CONTEXT_TYPEs } from "..";

export const uiState = {
  type: "",
  id: "",
  data: null,
  profile: false,
  employee: false,
};

export const uiReducer = (state = uiState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CONTEXT_TYPEs.REFRESH_UI:
      return {
        ...state,
        type: "",
        id: "",
        data: null,
        profile: false,

        employee: false,
      };

    case CONTEXT_TYPEs.PROFILE_FORM:
      return {
        ...state,
        type: payload?.type,
        id: payload?.id,
        data: payload?.data,
        profile: !state.profile,
      };

    case CONTEXT_TYPEs.EMPLOYEE_FORM:
      return {
        ...state,
        type: payload?.type,
        id: payload?.id,
        data: payload?.data,
        employee: !state.employee,
      };

    default:
      return state;
  }
};
