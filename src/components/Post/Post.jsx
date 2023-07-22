import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./Post.module.css";
import PropTypes from "prop-types";
import { Comment } from "./Comment";
import { Avatar } from "../Avatar";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState([""]);

  let publishedDateFormatted;
  let publishedDateRelativeFormatted;

   if (!(publishedAt instanceof Date && !isNaN(publishedAt))) {
    // Se não for uma data válida, defina publishedDateFormatted como uma string vazia ou mensagem de erro
    publishedDateFormatted = "Data inválida";
    publishedDateRelativeFormatted = "Data inválida";
  } else {
    publishedDateFormatted = format(
      publishedAt,
      "d 'de' LLLL 'às 'HH:mm'h'",
      {
        locale: ptBR,
      }
    );
    publishedDateRelativeFormatted = formatDistanceToNow(publishedAt, {
      locale: ptBR,
      addSuffix: true,
    });
  }

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }
  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeFormatted}
        </time>
      </div>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.id}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.id}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment key={comment.id} content={comment} />;
        })}
      </div>
    </div>
  );
}

Post.propTypes = {
  author: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  publishedAt: PropTypes.instanceOf(Date).isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
