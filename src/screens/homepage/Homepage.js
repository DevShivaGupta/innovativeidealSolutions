import { Fragment } from "react";
import { HeroText } from "./HeroText";
import TopCards from "./TopCards";
import ReasonToChoose from "./ResonToChoose";
import Services from "./Services";
import ContactUs from "./ContactUs";
import ToolsTable from "./ToolsTable";
import { useEffect } from "react";
const Homepage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Fragment>
      <HeroText />
      <TopCards />
      <ReasonToChoose />
      <Services />
      <ContactUs />
      <ToolsTable />
    </Fragment>
  );
};

export default Homepage;
