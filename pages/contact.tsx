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
          href="/"
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
          Home
        </Link>
      </div>
      <div style={styles.body}>
        <Grid
          container
          sx={{
            width: "100%",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            top: "45%",
            margin: "0 auto",
          }}
        >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography
              component="a"
              mb={2}
              sx={{
                color: "white",
                display: "flex",
                // flexDirection: "row",
                textDecoration: "none",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 24,
              }}
              href="mailto:info@goldentouchstories.com"
            >
              <MailIcon sx={{ mr: 1 }} /> info@goldentouchstories.com
            </Typography>
            <Typography
              component="a"
              mb={2}
              sx={{
                color: "white",
                display: "flex",
                // flexDirection: "row",
                textDecoration: "none",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
              }}
              href="https://www.instagram.com/goldentouchstories/"
            >
              <InstagramIcon sx={{ mr: 1 }} /> @goldentouchstories
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
