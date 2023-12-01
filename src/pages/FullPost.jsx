import React, { useEffect, useState } from "react";

import { Post } from "../components/Post";

import ReactMarkdown from "react-markdown";

import { Index } from "../components/AddComment";
import { CommentsBlock } from "../components/CommentsBlock";
import { useParams } from "react-router-dom";
import axios from "../axios";

export const FullPost = () => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Ошибка при получении статьи");
      });
  }, []);

  if (isLoading) {
    return <Post isLoading={isLoading} isFullPost />;
  }

  return (
    <>
      <Post
        id={data._id}
        title={data.title}
        imageUrl={
          data.imageUrl
            ? `https://mern-blog-af2k.onrender.com${data.imageUrl}`
            : ""
        }
        user={data.user}
        createdAt={data.createdAt}
        viewsCount={data.viewsCount}
        commentsCount={data.commentsCount}
        tags={data.tags}
        isFullPost
      >
        <ReactMarkdown children={data.text} />
      </Post>
      <CommentsBlock
        items={[
          {
            user: {
              fullName: "Антон Елисеев",
              avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
            },
            text: "Функционал с добавлением комментариев будет реализован в скором времени 😊",
          },
          {
            user: {
              fullName: "Агата Реактова",
              avatarUrl: "https://mui.com/static/images/avatar/4.jpg",
            },
            text: "Но уже сейчас вы можете насладиться прекрасной визуальной составляющей ❤️",
          },
        ]}
        isLoading={false}
      >
        <Index />
      </CommentsBlock>
    </>
  );
};
