import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import { SideComments } from "../SideComments";

export const Home = () => {
  return (
    <>
      <Grid xs={4} item>
        <SideComments
          items={[
            {
              user: {
                fullName: "Борис Абраков",
                avararUrl: "https://mui.com/static/images/avatar/6.jpg",
              },
              text: "Тестовый комментарий Бориса",
            },
            {
              user: {
                fullName: "Екатерина Смирнова",
                avararUrl: "https://mui.com/static/images/avatar/4.jpg",
              },
              text: "Тестовый комментарий Екатерины",
            },
          ]}
        />
      </Grid>
    </>
  );
};
