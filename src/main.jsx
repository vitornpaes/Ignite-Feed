import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import styles from "./main.module.css";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Siderbar/Sidebar";
import { Post } from "./components/Post/Post";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <Post />
    </div>
  </React.StrictMode>
);
