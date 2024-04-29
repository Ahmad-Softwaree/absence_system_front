import { authApi } from "@/lib/config/api.config";
import { generateToast } from "@/lib/functions";
import { URLs } from "@/lib/url";

export const getAbsences = async (toast, pageParam) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.GET_ABSENCES}?pages=${pageParam}`);
    return data;
  } catch (error) {
    const errors = generateToast(error);
    return errors.forEach((err) => {
      toast({
        title: err.title,
        description: err.description,
      });
    });
  }
};
export const getAbsenceOfEmployee = async (toast, pageParam) => {
  try {
    const {
      data: { data },
    } = await authApi.get(
      `${URLs.GET_ABSENCES_OF_EMPLOYEE}?pages=${pageParam}`
    );

    return data;
  } catch (error) {
    const errors = generateToast(error);
    return errors.forEach((err) => {
      toast({
        title: err.title,
        description: err.description,
      });
    });
  }
};
export const getAbsence = async (toast, id) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.GET_ABSENCE}/${id}`);

    return data;
  } catch (error) {
    const errors = generateToast(error);
    return errors.forEach((err) => {
      toast({
        title: err.title,
        description: err.description,
      });
    });
  }
};

export const checkCheckIn = async (toast, e_log_id) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.CHECK_CHECK_INT}/${e_log_id}`);

    return data;
  } catch (error) {
    const errors = generateToast(error);
    return errors.forEach((err) => {
      toast({
        title: err.title,
        description: err.description,
      });
    });
  }
};

export const checkCheckOut = async (toast, e_log_id) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.CHECK_CHECK_OUT}/${e_log_id}`);

    return data;
  } catch (error) {
    const errors = generateToast(error);
    return errors.forEach((err) => {
      toast({
        title: err.title,
        description: err.description,
      });
    });
  }
};

export const checkIn = async (e_log_id) => {
  try {
    const {
      data: { data },
    } = await authApi.post(`${URLs.CHECK_IN}/${e_log_id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const checkOut = async (e_log_id) => {
  try {
    const {
      data: { data },
    } = await authApi.post(`${URLs.CHECK_OUT}/${e_log_id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteAbsence = async (id) => {
  try {
    const {
      data: { data },
    } = await authApi.delete(`${URLs.DELETE_ABSENCE}/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
