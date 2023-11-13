import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import { SideComments } from "../SideComments";
import { Post } from "../components/Post";

export const Home = () => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          <Post
            id={1}
            title="Статья 1"
            imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
            user={{
              avatarUrl:
                "https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png",
              fullName: "Роман Петров",
            }}
            createdAt={"12 июня 2023 г."}
            viewsCount={15}
            commentsCount={1}
            tags={["react", "rtk", "typescript"]}
          />
          <Post
            id={2}
            title="Статья 2"
            imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
            user={{
              avatarUrl:
                "https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png",
              fullName: "Антон Елисеев",
            }}
            createdAt={"3 сентября 2023 г."}
            viewsCount={20}
            commentsCount={2}
            tags={["react", "redux", "typescript"]}
          />
          <Post
            id={3}
            title="Статья 3"
            imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
            user={{
              avatarUrl:
                "https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png",
              fullName: "Илья Иванов",
            }}
            createdAt={"22 июля 2023 г."}
            viewsCount={25}
            commentsCount={3}
            tags={["react", "js", "typescript"]}
          />
        </Grid>
      </Grid>
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
