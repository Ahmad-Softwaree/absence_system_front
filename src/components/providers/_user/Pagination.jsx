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
  } = null;

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