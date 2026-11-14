import { queryOptions, useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../api/todo";

// useQuery와 prefetchQuery가 같은 설정을 공유하도록 분리
export const todosQueryOptions = queryOptions({
  queryKey: ["todos"],
  queryFn: fetchTodos,
  staleTime: 5000,
});

export const useTodosData = () => {
  return useQuery(todosQueryOptions);
};
