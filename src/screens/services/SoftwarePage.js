import {
  Container,
  Text,
  createStyles,
  Grid,
  Button,
  Col,
} from "@mantine/core";
import { Software } from "../../helper/Data";
import { IconSend } from "@tabler/icons";
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
    marginTop: 50,
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
  mainImageWrapper: {
    padding: "10px",
    maxWidth: "400px",
    margin: "auto",
  },
  mainImage: {
    maxWidth: "100%",
  },
  allServiceCard: {
    [theme.fn.smallerThan("lg")]: {
      maxWidth: "85%",
    },
  },
  cardText: {
    fontSize: "25px",
    fontWeight: 800,
  },
  imageUI: {
    maxWidth: "100%",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  },
  btnBook: { width: "100%" },
}));
const SoftwarePage = () => {
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
            {Software.serviceDetails}
          </Text>
        </Container>
      </Fade>
      <Fade bottom>
        <Container className={classes.chooseContainer}>
          <div className={classes.chooseWrapper}>
            <Text component="span" className={classes.choosehead}>
              {Software.reasonToChoose.head}
            </Text>
            <Text component="div" className={classes.serviceDetails}>
              {Software.reasonToChoose.list.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </Text>
          </div>
        </Container>
      </Fade>
      <Fade bottom>
        <Container className={classes.allSubServices}>
          Our tailor-made Software and ERP Solutions for you
        </Container>
      </Fade>
      <Fade bottom cascade>
        <Container size={"60%"} className={classes.allServiceCard} mt={60}>
          {Software.services.map((item, i) => (
            <Grid
              key={i + 5}
              align={"center"}
              justify="center"
              pb={40}
              mt={50}
              sx={{ borderBottom: "2px solid darkturquoise" }}
            >
              <Col md={6} sm={12} orderSm={1} orderMd={i % 2 === 0 ? 2 : 1}>
                <div className={classes.mainImageWrapper}>
                  <img
                    src={item.image}
                    alt="mainImage"
                    className={classes.mainImage}
                  ></img>
                </div>
              </Col>

              <Col md={6} sm={12} orderSm={2} orderMd={i % 2 === 0 ? 1 : 2}>
                <Text
                  component="div"
                  weight={700}
                  className={classes.cardText}
                  mb={20}
                >
                  {item.title}
                </Text>
                <Text align="justify" size="sm">
                  {item.detail}
                </Text>
                <div>
                  <Grid mt={20}>
                    {item.ui.map((it, i) => (
                      <Grid.Col span={3} key={i + 35}>
                        <img
                          src={it.image}
                          alt="ui"
                          className={classes.imageUI}
                        />
                      </Grid.Col>
                    ))}
                  </Grid>
                </div>
                <Grid mt={20}>
                  <Grid.Col lg={6}>
                    <Button
                      color="cyan"
                      leftIcon={<IconSend size={14} />}
                      className={classes.btnBook}
                    >
                      Book A Demo
                    </Button>
                  </Grid.Col>
                  <Grid.Col lg={6}>
                    <Button
                      className={classes.btnBook}
                      variant="outline"
                      color="cyan"
                    >
                      View Details
                    </Button>
                  </Grid.Col>
                </Grid>
              </Col>
            </Grid>
          ))}
        </Container>
      </Fade>
      <Fade bottom>
        <Container className={classes.chooseContainer}>
          <Text component="span" className={classes.choosehead}>
            {Software.process.head}
          </Text>
          <Text component="div" className={classes.serviceDetails}>
            {Software.process.details}
          </Text>
        </Container>
      </Fade>
      <Fade bottom>
        <Container className={classes.chooseContainer}>
          <Text component="span" className={classes.choosehead}>
            {Software.benefits.head}
          </Text>
          <Text component="div" className={classes.serviceDetails}>
            {Software.benefits.details}
          </Text>
          <Text component="div" className={classes.serviceDetails}>
            {Software.benefits.seconddetails}
          </Text>
        </Container>
      </Fade>
    </div>
  );
};

export default SoftwarePage;
