import { Outlet } from "react-router-dom";

export const GeneratePage = () => {
  return (
    <div className="flex-col md:px-12">
      <Outlet />
    </div>
  );
};