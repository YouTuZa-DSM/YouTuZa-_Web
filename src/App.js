import { RouterProvider } from "react-router-dom";
import { Router } from "./router";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        keepPreviousData: false,
        refetchOnWindowFocus: true,
        refetchOnMount: true,
        staleTime: 60000,
        retry: 1,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Router} />
    </QueryClientProvider>
  );
};
export default App;
