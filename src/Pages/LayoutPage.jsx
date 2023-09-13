import { Outlet } from "react-router-dom";

const LayoutPage = () => {
  return (
    <>
      <div id="layout">
        <Outlet />
      </div>
    </>
  )
};


export default LayoutPage;