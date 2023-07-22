import { Avatar } from "../Avatar";
import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

function generateRandomId() {
  return uuidv4();
}

export function Comment({ content, onDeleteComment }) {
  const commentId = generateRandomId();

  function handleDeleteComment() {
    onDeleteComment();
  }
  return (
    <div className={styles.comment} key={commentId}>
      <Avatar src="https://avatars.githubusercontent.com/u/90912841?v=4" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <div className={styles.header}>
            <div className={styles.authorAndTime}>
              <strong>Vitor Paes</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </div>

          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

Comment.propTypes = {
  content: PropTypes.string.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
};
