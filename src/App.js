import { RouterProvider } from "react-router-dom";
import { Router } from "./router";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        keepPreviousData: true,
        refetchOnWindowFocus: true,
        refetchOnMount: true,
        staleTime: 60000,
        retry: 1,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <RouterProvider router={Router} />
    </QueryClientProvider>
  );
};
export default App;
