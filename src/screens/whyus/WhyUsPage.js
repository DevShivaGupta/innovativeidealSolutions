import { Fragment } from "react";
import WhyUsHeader from "./WhyUsHeader";
import { Text, Grid, Container, Title, createStyles } from "@mantine/core";
import { useEffect } from "react";
import Fade from "react-reveal/Fade";
const useStyles = createStyles((theme) => ({
  whyUsWrapper: {
    maxWidth: "74%",
    [theme.fn.smallerThan("sm")]: {
      maxWidth: "90%",
    },
  },
  history: {
    [theme.fn.largerThan("md")]: {
      borderRight: "1px solid darkturquoise",
      paddingRight: "50px",
    },
  },
  date: { [theme.fn.largerThan("md")]: { paddingLeft: "50px" } },
}));
const WhyUsPage = () => {
  const { classes } = useStyles();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Fragment>
      <Fade top>
        <WhyUsHeader />
      </Fade>

      <Container className={classes.whyUsWrapper}>
        <Fade bottom cascade>
          <Grid justify={"space-between"} mt={40}>
            <Grid.Col sm={12} md={5.5}>
              <Text size="lg" weight={600} align="justify">
                Good things take time. But we, on the other hand, make this
                procedure faster. Let us be your 3rd Eye & 6th Sense and wait
                for the final results to be nothing but incomparable.
              </Text>
            </Grid.Col>
            <Grid.Col sm={12} md={5.5}>
              <Text size="sm" align="justify">
                <b>Innovative Ideal Solution</b> is equipped with the latest
                technologies, creativity and experience that leads to the
                highest success rate. Our innovative team loves to utilise their
                skills, combine them with requirements and magically transform
                it.
              </Text>
            </Grid.Col>
          </Grid>
        </Fade>
        <Fade bottom cascade>
          <Text
            mt={40}
            component="div"
            variant="gradient"
            gradient={{ from: "#03BFCB", to: "cyan", deg: 45 }}
            size="md"
            weight={700}
          >
            WE ALWAYS THINK AHEAD
          </Text>
          <Title order={2} weight={900} color="rgb(0, 71, 103)" mb={30}>
            Our mission and values
          </Title>
          <Text
            component="div"
            color="dimmed"
            sx={{ textAlign: "justify", lineHeight: 2 }}
          >
            We always find ways to be with you, even when the job is done. Your
            ambition becomes our mission. So whenever you want support we are
            ready for everything. Being a tech innovator there is a dream to see
            India as the most technology user in the world.
          </Text>
        </Fade>
        <Fade bottom cascade>
          <Title order={2} weight={900} color="rgb(0, 71, 103)" my={40}>
            Company history
          </Title>
          <Grid align={"center"}>
            <Grid.Col sm={12} md={8} className={classes.history}>
              <Text
                component="div"
                color="dimmed"
                sx={{ textAlign: "justify", lineHeight: 2 }}
              >
                <Title order={3} weight={700} color="rgb(0, 71, 103)" mb={10}>
                  Mother Company Founder
                </Title>
                ‘Innovation Ideal Solution’ was established on 14th March 2022.
                Mrs. Reena Gupta is the founder of this organisation. Her main
                ambition is to serve the best IT Services and create employment
                for the unemployed youth.
              </Text>
            </Grid.Col>
            <Grid.Col sm={12} md={4} className={classes.date}>
              <Title order={2} weight={900} color="rgb(0, 71, 103)" mb={5}>
                2022
              </Title>
              <Text
                component="div"
                variant="gradient"
                gradient={{ from: "#03BFCB", to: "cyan", deg: 45 }}
                size="md"
                weight={700}
              >
                Foundation Of Innovation Ideal Solution
              </Text>
            </Grid.Col>
          </Grid>
        </Fade>
      </Container>
    </Fragment>
  );
};

export default WhyUsPage;
