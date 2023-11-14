import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import { Post } from "../components/Post";
import { SideBlock } from "../components/SideBlock";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import TagIcon from "@mui/icons-material/Tag";
import ListItemText from "@mui/material/ListItemText";
import { SideComments } from "../components/SideComments";

export const Home = () => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          <Post
            id={1}
            title="Статья 1"
            imageUrl="https://pclegko.ru/wp-content/uploads/2020/11/5753173610332160.png"
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
                "https://avatars.dzeninfra.ru/get-zen_doc/3957194/pub_5f8dbf799095e028cddb5757_5f8dc3a89095e028cde4a367/scale_1200",
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
            imageUrl="https://avatars.dzeninfra.ru/get-zen_doc/3957194/pub_5f8dbf799095e028cddb5757_5f8dc3a89095e028cde4a367/scale_1200"
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

        <Grid xs={4} item>
          <SideBlock title="Тэги">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TagIcon />
                  </ListItemIcon>
                  <ListItemText primary="react" />
                </ListItemButton>
              </ListItem>
            </List>
          </SideBlock>
          <SideBlock title="Комментарии">
            <SideComments
              items={[
                {
                  user: {
                    fullName: "Борис Абраков",
                    avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
                  },
                  text: "Тестовый комментарий Бориса",
                },
                {
                  user: {
                    fullName: "Екатерина Смирнова",
                    avatarUrl: "https://mui.com/static/images/avatar/4.jpg",
                  },
                  text: "Тестовый комментарий Екатерины",
                },
              ]}
            />
          </SideBlock>
        </Grid>
      </Grid>
    </>
  );
};
