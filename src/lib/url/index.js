import { CONFIGs } from "../enum";

const WEB = CONFIGs.BACKEND_HOST;
const API = `${CONFIGs.BACKEND_HOST}/api`;

export const URLs = {
  //AUTH
  GET_AUTH: `${API}/auth/auth`,
  LOGIN: `${API}/auth/login`,
  REGISTER: `${API}/auth/register`,

  UPDATE_PROFILE: `${API}/auth/profile`,

  //EMPLOYEE

  GET_EMPLOYEES: `${API}/employee`,
  GET_EMPLOYEES_SELECT: `${API}/employee/select`,

  GET_EMPLOYEE: `${API}/employee`,
  ADD_EMPLOYEE: `${API}/employee`,
  UPDATE_EMPLOYEE: `${API}/employee`,
  DELETE_EMPLOYEE: `${API}/employee`,

  //DEPARTMENT

  GET_DEPARTMENTS: `${API}/department`,
  GET_DEPARTMENT: `${API}/department`,
  ADD_DEPARTMENT: `${API}/department`,
  UPDATE_DEPARTMENT: `${API}/department`,
  DELETE_DEPARTMENT: `${API}/department`,

  //ABSENCE

  GET_ABSENCES: `${API}/absence`,
  GET_ABSENCES_OF_EMPLOYEE: `${API}/absence/employee`,

  GET_ABSENCE: `${API}/absence`,
  CHECK_CHECK_INT: `${API}/absence/employee/check/in`,
  CHECK_CHECK_OUT: `${API}/absence/employee/check/out`,

  CHECK_IN: `${API}/absence/in`,
  CHECK_OUT: `${API}/absence/out`,
  DELETE_ABSENCE: `${API}/absence`,
};
