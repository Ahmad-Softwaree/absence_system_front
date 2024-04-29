import { useGetDepartments } from "@/react-query/query/department.query";
import { useGetEmployees } from "@/react-query/query/employee.query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Pagination = ({ children, page }) => {
  const { ref, inView } = useInView();
  const {
    isFetchingNextPage,
    data,
    hasNextPage,
    isLoading,
    fetchNextPage,
    refetch,
  } =
    page === "employee"
      ? useGetEmployees()
      : page === "department"
      ? useGetDepartments()
      : null;

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView]);

  return children({
    isFetchingNextPage,
    data,
    hasNextPage,
    isLoading,
    ref,
    refetch,
  });
};

export default Pagination;
