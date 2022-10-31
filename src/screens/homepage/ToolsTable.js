import { Container, Grid, createStyles } from "@mantine/core";
import { AllTableImage } from "../../helper/Data";
import { Parallax } from "react-parallax";
const useStyles = createStyles((theme) => ({
  Tools_Table: {
    width: "100%",
    marginTop: "50px",
  },
  table_wrapper: {
    maxWidth: "60%",
    padding: "50px 0px",
    [theme.fn.smallerThan("sm")]: {
      maxWidth: "90%",
      padding: "0px",
    },
  },
  image_wrapper: {
    padding: "10px auto",
    borderRight: "1px solid cyan",
    borderBottom: "1px solid cyan",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "150px",
    [theme.fn.smallerThan("md")]: {
      padding: "30px",
      border: "none",
    },
  },
  image_right: {
    borderRight: "none",
  },
  image_bottom: {
    borderBottom: "none",
  },
  image_wrapper_inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    maxWidth: "150px",
    maxHeight: "100px",
    width: "100%",
    margin: "auto auto",
    [theme.fn.smallerThan("sm")]: {
      maxWidth: "200px",
    },
  },
}));
const ToolsTable = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.Tools_Table}>
      <Parallax
        blur={2}
        bgImage="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        bgImageAlt="the cat"
        strength={200}
      >
        <Container className={classes.table_wrapper}>
          <Grid align={"stretch"} justify="center">
            {AllTableImage.map((item, i) => {
              return (
                <Grid.Col
                  key={i}
                  lg={2}
                  md={4}
                  sm={6}
                  className={`${classes.image_wrapper} ${
                    (i === 5 || i === 11 || i === 17) && classes.image_right
                  } ${i > 11 && classes.image_bottom}`}
                >
                  <div className={classes.image_wrapper_inner}>
                    <img src={item} alt="tools" className={classes.image}></img>
                  </div>
                </Grid.Col>
              );
            })}
          </Grid>
        </Container>
      </Parallax>
    </div>
  );
};

export default ToolsTable;
