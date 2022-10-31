import { Fragment } from "react";
import ServicePageHeader from "./ServicePageHeader";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const ServicePage = () => {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Fragment>
      <ServicePageHeader pathname={location.pathname} />
      <Outlet />
    </Fragment>
  );
};
export default ServicePage;
