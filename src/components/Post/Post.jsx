import styles from "./Post.module.css";

export function Post() {
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/90912841?v=4"
          />
          <div className={styles.authorInfo}>
            <strong></strong>
            <span></span>
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
        <p>#novoprojeto #nlw #rocketseat</p>
      </div>
    </div>
  );
}
