import SlickSlider from "../../components/SlickSlider";
import {
  Grid,
  Title,
  Text,
  Container,
  Image,
  Overlay,
  createStyles,
} from "@mantine/core";
import Fade from "react-reveal/Fade";
import { ImageSlider } from "../../helper/Data";
const useStyles = createStyles((theme) => ({
  ReasonWrapper: {
    maxWidth: "74%",
    [theme.fn.smallerThan("sm")]: {
      maxWidth: "90%",
    },
  },
  img_wrapper: {
    position: "relative",
    maxHeight: "350px",
  },
  reasonImg: { maxHeight: "350px" },
  reasonDetails: {
    textAlign: "justify",
    lineHeight: 2,
    [theme.fn.smallerThan("sm")]: {
      lineHeight: 1.75,
    },
  },
}));
const ResonToChoose = () => {
  const { classes } = useStyles();
  return (
    <Container mt={100} className={classes.ReasonWrapper}>
      <Grid justify="space-between" align={"center"}>
        <Grid.Col sm={12} lg={5.8} mb={20}>
          <Fade left>
            <SlickSlider>
              {ImageSlider.map((item, i) => {
                return (
                  <div key={i} className={classes.img_wrapper}>
                    <Overlay color="#000" opacity={0.1} />
                    <Image
                      src={item}
                      alt="Random unsplash image"
                      className={classes.reasonImg}
                    />
                  </div>
                );
              })}
            </SlickSlider>
          </Fade>
        </Grid.Col>
        <Grid.Col sm={12} lg={5.8}>
          <Fade right>
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: "#03BFCB", to: "cyan", deg: 45 }}
              size="md"
              weight={700}
            >
              REASON BEHIND
            </Text>
            <Title order={2} weight={900} color="rgb(0, 71, 103)" mb={30}>
              Why you should choose us?
            </Title>
            <Text
              component="div"
              color="dimmed"
              className={classes.reasonDetails}
            >
              At Innovative Ideal Solutions, we provide custom web/software,
              Mobile App solutions and Digital Marketing services that will help
              you drive your business with potential growth. We innovate
              solutions to help you grow like a pro! Great ROI and consistent
              business growth for our clients has always been our ultimate goal.
              Well Experienced team, industry-specific knowledge and expertise
              in the latest technologies help us deliver the most innovative
              solution to our clients. We take time to understand their goals
              and get the most dynamic solution developed for them whatever is
              their demand.
            </Text>
          </Fade>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default ResonToChoose;
