import { Container, Grid } from "@mantine/core";
import Style from "./OurWorksPage.module.scss";
import { OurWorks } from "../../helper/Data";
import { useEffect } from "react";
import Fade from "react-reveal/Fade";
const OurWorksPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Container size="65%" mt={50} className={Style.our_works}>
      <Fade bottom cascade>
        <Grid align={"center"} justify={"center"} gutter={40}>
          {OurWorks.map((item, i) => (
            <Grid.Col sm={10} md={4} lg={4} key={i}>
              <div className={Style.album_box}>
                <a href="/#" className={`${Style.img_box} ${Style.img_scale}`}>
                  <img src={item.image} alt="album" />
                </a>
                <div className={Style.caption}>
                  <h3>{item.detail}</h3>
                </div>
              </div>
            </Grid.Col>
          ))}
        </Grid>
      </Fade>
    </Container>
  );
};

export default OurWorksPage;
