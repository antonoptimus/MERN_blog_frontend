import React from "react";

import { Post } from "../components/Post";

import { Index } from "../components/AddComment";
import { CommentsBlock } from "../components/CommentsBlock";

export const FullPost = () => {
  return (
    <>
      <Post
        id={1}
        title="Заголовок статьи"
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
        isFullPost
      >
        <p>
          Hey there! 👋 I'm starting a new series called "Roast the Code", where
          I will share some code, and let YOU roast and improve it. There's not
          much more to it, just be polite and constructive, this is an exercise
          so we can all learn together. Now then, head over to the repo and
          roast as hard as you can!!
        </p>
      </Post>
      <CommentsBlock
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
        isLoading={false}
      >
        <Index />
      </CommentsBlock>
    </>
  );
};
