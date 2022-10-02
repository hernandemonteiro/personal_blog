import React from "react";
import Card from "@mui/material/Card";
import { Avatar, Box, Stack, Divider, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./CardHeaderCurriculum.module.css";
import Link from "next/link";

interface CardHeaderCurriculumProps {
  name: string;
  children: any;
}
export default function CardHeaderCurriculum(props: CardHeaderCurriculumProps) {
  return (
    <>
      <Avatar
        alt={"Hernande Monteiro"}
        src="https://www.datocms-assets.com/76860/1659202565-download.png"
        sx={{ width: "20%", height: "20%" }}
      />
      <Card>
        <Box sx={{ p: 2, display: "flex", textAlign: "center" }}>
          <Stack
            margin={2}
            spacing={1}
            sx={{
              width: "100%",
            }}
          >
            <Typography variant="body2" color="text.secondary">
            <h1>{props.name}</h1>
            <h3>Full Stack Developer</h3>
              <br />
              22/11/1998
              <br />
              monteiro1998@live.com
              <br />
            </Typography>
          </Stack>
        </Box>
        <Divider />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 2, py: 1, bgcolor: "background.default" }}
        >
          {props.children}
        </Stack>
      </Card>
      <br />
      <br />
    </>
  );
}