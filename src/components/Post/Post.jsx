import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "../Avatar";

export function Post() {
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <div className={styles.author}>
          <Avatar hasBorder src="https://avatars.githubusercontent.com/u/90912841?v=4" />
          <div className={styles.authorInfo}>
            <strong>Vitor Paes</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de maio às 08:00" dateTime="2023-05-11 08:00:00">
          Publicado há 1h
        </time>
      </div>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto </p>que
        fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
        🚀
        <p>
          <a href="#">👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
}
