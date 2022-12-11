import { Box, Grid, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import styles from "../styles/Home.module.css";

export default function Home() {
  const styles = {
    body: {
      backgroundColor: "rgba(0, 0, 0, 0.87)",
      width: "100%",
    },
  };

  return (
    <>
      <div style={styles.body}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "45%",
          }}
        >
          <Grid item>
            <Typography
              component="a"
              mb={2}
              sx={{
                color: "white",
                // fontFamily: FONT_FAMILY,
                display: "flex",
                flexDirection: "row",
                textDecoration: "none",
              }}
              href="https://www.instagram.com/aa.goldentouch/"
            >
              <InstagramIcon sx={{ mr: 1 }} /> @aa.goldentouch
            </Typography>
            <Typography
              component="a"
              mb={2}
              sx={{
                color: "white",
                // fontFamily: FONT_FAMILY,
                display: "flex",
                flexDirection: "row",
                textDecoration: "none",
              }}
              href="mailto:info@goldentouchstories.com"
            >
              <MailIcon sx={{ mr: 1 }} /> info@goldentouchstories.com
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
