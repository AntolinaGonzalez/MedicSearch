import {
  Box,
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    aboutUsDescription: {
      backgroundColor: "#1976d2",
      color: "white",
    },
    logo: {
      fontWeight: "bold",
    },
  })
);
export default function AboutUs() {
  const classes = useStyles();

  return (
    <Container className={classes.aboutUsDescription}>
      <Box p={5}>
        <Typography>
          <span className={classes.logo}>MediSearch</span> es un lugar
          donde vas a encontrar información de doctores tales como sus días y
          horarios de consultas, obra sociales que atienden, si cobran plus, si
          estan de vacaciones y más. También podras ofrecer tus valoraciones
          hacia los respectivos profesionales, calidad de atención y quejas
        </Typography>
        <Typography>
          Nuestro objetivo es abarcar la mayor cantidad de información
          posible,asi tu experiencia es más completa. Ahorrase trámites que
          puedan llegar a hacerte perder el tiempo, como llamadas o salas de
          espera.
        </Typography>
      </Box>
    </Container>
  );
}
