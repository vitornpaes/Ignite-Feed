import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import styles from "./main.module.css";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Siderbar/Sidebar";
import { Post } from "./components/Post/Post";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/vitornpaes.png",
      name: "Vitor Paes",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcar" },
    ],
    publishedAt: new Date("2023-07-18 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/vitornpaes.png",
      name: "Vitor Paes",
      role: "Estudent",
    },
    content: [
      { type: "paragraph", content: "AE galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀🚀🚀🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcar" },
    ],
    publishedAt: new Date("2023-07-18 20:00:00"),
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <div>
        {posts.map((post) => {
          const publishedDateFormatted = format(
            post.publishedAt,
            "yyyy-MM-dd HH:mm:ss",
            {
              locale: ptBR,
            }
          );
          return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          );
        })}
      </div>
    </div>
  </React.StrictMode>
);
