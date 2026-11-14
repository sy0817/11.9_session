import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import { todosQueryOptions } from "./hooks/useTodosData";
import "./index.css";

const queryClient = new QueryClient();

// 프리페칭: 컴포넌트가 렌더링되기 전에 할 일 목록을 미리 가져와 캐시에 저장
// (App이 마운트될 때 staleTime 이내라면 추가 요청 없이 캐시를 바로 사용)
queryClient.prefetchQuery(todosQueryOptions);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
);