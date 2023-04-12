import { Outlet } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";

const AppLayout = () => {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
