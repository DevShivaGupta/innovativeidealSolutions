import { mainCards } from "../../helper/Data";
import MainCard from "./MainCard";
import { Container, Grid, createStyles } from "@mantine/core";
import Fade from "react-reveal/Fade";
const useStyles = createStyles((theme) => ({
  TopCardWrapper: {
    maxWidth: "74%",
    [theme.fn.smallerThan("sm")]: {
      maxWidth: "90%",
    },
  },
}));
const TopCards = () => {
  const { classes } = useStyles();
  return (
    <Container mt={20} className={classes.TopCardWrapper}>
      <Fade bottom>
        <Grid>
          {mainCards.map((Item, i) => {
            return (
              <Grid.Col key={i} xs={12} sm={6} md={6} lg={3}>
                <MainCard Item={Item} />
              </Grid.Col>
            );
          })}
        </Grid>
      </Fade>
    </Container>
  );
};

export default TopCards;
