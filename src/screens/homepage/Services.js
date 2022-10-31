import {
  Container,
  Grid,
  Group,
  Text,
  Title,
  createStyles,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { ChevronRight } from "../../helper/svg";
import { ServicesData } from "../../helper/Data";
import ServiceCard from "./ServiceCard";
import Fade from "react-reveal/Fade";
const useStyles = createStyles((theme) => ({
  service: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : "rgb(228, 237, 243)",
  },
  service_wrapper: {
    maxWidth: "74%",
    [theme.fn.smallerThan("sm")]: {
      maxWidth: "90%",
    },
  },
  card_wrappers: {
    size: "60%",
    [theme.fn.smallerThan("md")]: {
      size: "100%",
    },
  },
}));
const Services = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.service}>
      <Container className={classes.service_wrapper} mt={130} pb={50}>
        <Fade bottom>
          <Grid justify="space-between" align="center" pt={50}>
            <Grid.Col sm={12} lg={8}>
              <Text
                component="span"
                variant="gradient"
                gradient={{ from: "#03BFCB", to: "cyan", deg: 45 }}
                size="md"
                weight={700}
              >
                OUR SERVICES
              </Text>
              <Title order={2} weight={900} color="rgb(0, 71, 103)">
                We Provide IT & Online Marketing Services
              </Title>
            </Grid.Col>
            <Grid.Col sm={12} lg={2}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Group>
                  <Text weight={700} color="dimmed" size="md">
                    All Services
                  </Text>
                  <ChevronRight fill="#000" />
                </Group>
              </Link>
            </Grid.Col>
          </Grid>
        </Fade>
        <Fade bottom>
          <Container classes={classes.card_wrappers} mt={50}>
            <Grid>
              {ServicesData.map((item, i) => {
                return (
                  <Grid.Col key={i} xs={12} sm={6} lg={6}>
                    <ServiceCard item={item} />
                  </Grid.Col>
                );
              })}
            </Grid>
          </Container>
        </Fade>
      </Container>
    </div>
  );
};

export default Services;
