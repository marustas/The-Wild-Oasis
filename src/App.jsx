import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/build/lib/devtools";

import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";

const queryclient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60 * 1000 } },
});
const App = () => {
  return (
    /*
    To use react query devtools, an npm package is required.
    It is then used as a child of QueryClientProvider component
    */
    <QueryClientProvider client={queryclient}>
      <ReactQueryDevtools initialIsOpen={true}></ReactQueryDevtools>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="account" element={<Account />} />
            <Route path="Bookings" element={<Bookings />} />
            <Route path="Users" element={<Users />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
