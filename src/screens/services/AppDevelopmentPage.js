import { Container, Text, createStyles, Grid } from "@mantine/core";
import { AppDevelopment } from "../../helper/Data";
import ServiceSubCard from "./ServiceSubCard";
import Fade from "react-reveal/Fade";
const BREAKPOINT = "@media (max-width: 755px)";
const useStyles = createStyles((theme) => ({
  head: {
    color: "darkturquoise",
    fontSize: 20,
    fontWeight: 700,
    [BREAKPOINT]: {
      fontSize: 18,
    },
  },
  serviceDetailWrapper: {
    [theme.fn.smallerThan("md")]: {
      maxWidth: "90%",
    },
  },
  serviceDetails: {
    fontSize: 14,
    marginTop: 15,
    lineHeight: 2,
    textAlign: "justify",
    whiteSpace: "pre-wrap",
    [theme.fn.smallerThan("md")]: {
      fontSize: 14,
      marginTop: 10,
      lineHeight: 1.75,
    },
  },
  choosehead: {
    color: "darkturquoise",
    fontSize: 30,
    fontWeight: 700,
    [BREAKPOINT]: {
      fontSize: 20,
    },
  },
  chooseContainer: {
    boxShadow:
      theme.colorScheme === "dark"
        ? "rgba(249, 231, 211, 0.4) 0px 0px 0px 2px, rgba(249, 231, 211, 0.65) 0px 4px 6px -1px, rgba(0, 0, 0, 0.08) 0px 1px 0px inset"
        : "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
    borderRadius: 5,
    padding: 40,
    marginTop: 40,
    maxWidth: "60%",
    [theme.fn.smallerThan("md")]: {
      maxWidth: "90%",
    },
  },
  allSubServices: {
    marginTop: "100px",
    color: "darkturquoise",
    fontSize: "28px",
    fontWeight: 900,
    textAlign: "center",
    padding: "6px 10px",
    border: "7px solid darkturquoise",
    boxShadow:
      "rgba(102,225,227, 0.4) 5px 5px, rgba(102,225,227, 0.3) 10px 10px, rgba(102,225,227, 0.2) 15px 15px, rgba(102,225,227, 0.1) 20px 20px, rgba(102,225,227, 0.05) 25px 25px",
    maxWidth: "50%",
    [theme.fn.smallerThan("md")]: {
      maxWidth: "80%",
    },
    "&:hover": {
      boxShadow: "none",
    },
  },
  allServiceCard: {
    [theme.fn.smallerThan("md")]: {
      maxWidth: "90%",
    },
  },
}));
const AppDevelopmentPage = () => {
  const { classes } = useStyles();
  return (
    <div>
      <Fade bottom>
        <Container
          size={"60%"}
          mt={30}
          className={classes.serviceDetailWrapper}
        >
          <Text component="span" className={classes.head}>
            Service Details
          </Text>
          <Text component="div" className={classes.serviceDetails}>
            {AppDevelopment.serviceDetails}
          </Text>
        </Container>
      </Fade>
      <Fade bottom>
        <Container className={classes.chooseContainer}>
          <div className={classes.chooseWrapper}>
            <Text component="span" className={classes.choosehead}>
              {AppDevelopment.reasonToChoose.head}
            </Text>
            <Text component="div" className={classes.serviceDetails}>
              {AppDevelopment.reasonToChoose.list.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </Text>
          </div>
        </Container>
      </Fade>
      <Fade bottom>
        <Container className={classes.allSubServices}>
          Our App Development Services customized for you
        </Container>
      </Fade>

      <Container size={"70%"} className={classes.allServiceCard} mt={60}>
        <Fade bottom cascade>
          <Grid>
            {AppDevelopment.services.map((item) => (
              <Grid.Col md={4} sm={12} key={item.title}>
                <ServiceSubCard Item={item} />
              </Grid.Col>
            ))}
          </Grid>
        </Fade>
      </Container>
      <Fade bottom>
        <Container className={classes.chooseContainer}>
          <Text component="span" className={classes.choosehead}>
            {AppDevelopment.benefits.head}
          </Text>
          <Text component="div" className={classes.serviceDetails}>
            <Text mb={20} className={classes.serviceDetails}>
              {AppDevelopment.benefits.details}
            </Text>
            {AppDevelopment.benefits.list.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </Text>
        </Container>
      </Fade>
    </div>
  );
};

export default AppDevelopmentPage;
