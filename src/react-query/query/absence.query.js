import { QUERY_KEYS } from "../keys/query.key";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  checkCheckIn,
  checkCheckOut,
  checkIn,
  checkOut,
  deleteAbsence,
  getAbsence,
  getAbsenceOfEmployee,
  getAbsences,
} from "../action/absence.action";
import { generateToast } from "@/lib/functions";
import { useToast } from "@/components/ui/use-toast";

export function useGetAbsences() {
  const { toast } = useToast();
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.ABSENCES],
    queryFn: ({ pageParam = 1 }) => getAbsences(toast, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    retry: 0,
  });
}
export function useGetAbsencesOfEmployee() {
  const { toast } = useToast();
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.ABSENCES_OF_EMPLOYEE],
    queryFn: ({ pageParam = 1 }) => getAbsenceOfEmployee(toast, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    retry: 0,
  });
}
export function useGetAbsence(id) {
  const { toast } = useToast();
  return useQuery({
    queryKey: [QUERY_KEYS.ABSENCE, id],
    queryFn: () => getAbsence(toast, id),
    retry: 0,
  });
}

export function useCheckCheckIn(e_log_id) {
  const { toast } = useToast();
  return useQuery({
    queryKey: [QUERY_KEYS.CHECK_CHECK_IN, e_log_id],
    queryFn: () => checkCheckIn(toast, e_log_id),
    retry: 0,
  });
}
export function useCheckCheckOut(e_log_id) {
  const { toast } = useToast();
  return useQuery({
    queryKey: [QUERY_KEYS.CHECK_CHECK_OUT, e_log_id],
    queryFn: () => checkCheckOut(toast, e_log_id),
    retry: 0,
  });
}

export function useCheckIn(e_log_id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => checkIn(e_log_id),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.ABSENCES]);
      return toast({
        title: "Success",
        description: "Successfully",
      });
    },
    onError: (error) => {
      const errors = generateToast(error);
      return errors.forEach((err) => {
        toast({
          title: err.title,
          description: err.description,
        });
      });
    },
  });
}

export function useCheckOut(e_log_id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => checkOut(e_log_id),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.ABSENCES]);
      return toast({
        title: "Success",
        description: "Successfully",
      });
    },
    onError: (error) => {
      const errors = generateToast(error);
      return errors.forEach((err) => {
        toast({
          title: err.title,
          description: err.description,
        });
      });
    },
  });
}
export function useDeleteAbsence(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteAbsence(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.ABSENCES]);
      return toast({
        title: "Success",
        description: "Absence Deleted Successfully",
      });
    },
    onError: (error) => {
      const errors = generateToast(error);
      return errors.forEach((err) => {
        toast({
          title: err.title,
          description: err.description,
        });
      });
    },
  });
}
