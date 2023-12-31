import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import styles from "./main.module.css";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Siderbar/Sidebar";
import { Post } from "./components/Post/Post";
import { v4 as uuidv4 } from "uuid"

function generateRandomId() {
  return uuidv4();
}

const posts = [
  {
    id: generateRandomId(),
    author: {
      avatarUrl: "http://github.com/vitornpaes.png",
      name: "Vitor Paes",
      role: "Web Developer",
    },
    content: [
      { id: generateRandomId(), type: "paragraph", content: "Fala galeraa 👋" },
      {
        id: generateRandomId(),
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { id: generateRandomId(), type: "link", content: "👉 jane.design/doctorcar" },
    ],
    publishedAt: new Date("2023-07-18 20:00:00"),
  },
  {
    id: generateRandomId(),
    author: {
      avatarUrl: "http://github.com/vitornpaes.png",
      name: "Vitor Paes",
      role: "Web Developer",
    },
    content: [
      { id: generateRandomId(), type: "paragraph", content: "Fala galeraa 👋" },
      {
        id: generateRandomId(),
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { id: generateRandomId(), type: "link", content: "👉 jane.design/doctorcar" },
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
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
        ))}
      </div>
    </div>
  </React.StrictMode>
);
