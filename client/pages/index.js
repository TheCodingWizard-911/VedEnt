import Image from "next/image";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    height: "100%",
    padding: theme.spacing(2),
    margin: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(2),
    },
  },
}));

const VedEntHomePage = () => {
  const classes = useStyles();

  return (
    <Card elevation={5} className={classes.card}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Image
            src="/Root.jpeg"
            alt="Groot Image"
            width={500}
            height={500}
          ></Image>
        </Grid>
        <Grid item xs={12} sm={6}>
          Right
        </Grid>
      </Grid>
    </Card>
  );
};

export default VedEntHomePage;
