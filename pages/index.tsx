import { Box, Divider, Grid, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  const styles = {
    body: {
      backgroundColor: "rgba(0, 0, 0, 0.87)",
      width: "100%",
    },
  };

  return (
    <>
      <div>
        <Link
          href="/contact"
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            marginTop: 15,
            fontSize: 24,
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          Contact
        </Link>
      </div>
      <div style={styles.body}>
        <Grid
          container
          spacing={2}
          sx={{
            width: "100%",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            top: "25%",
            margin: "0 auto",
          }}
        >
          <Grid item xs={10} sm={10} md={8} lg={6} xl={6}>
            <Typography
              sx={{
                color: "white",
                mb: 2,
                fontSize: "1.65em",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
              }}
            >
              Analy Goldentouch
            </Typography>
            <Typography
              sx={{
                color: "white",
                mb: 5,
                fontSize: "1.65em",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
              }}
            >
              Seyedali Peyghambari {"( as Alan Goldentouch )"}
            </Typography>
            <Divider sx={{ mb: 5 }} color="white" />
            <Typography
              sx={{
                width: "100%",
                color: "white",
                mb: 2,
                fontSize: "1.65em",
                fontWeight: "bold",
                display: "flex",
                // justifyCosntent: "center",
                margin: "0 auto",
              }}
            >
              Screenwriter | Children&apos;s Book Author | Lyricist
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
