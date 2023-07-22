import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./Post.module.css";
import PropTypes from "prop-types";
import { Comment } from "./Comment";
import { Avatar } from "../Avatar";
import { useState } from "react";

function generateRandomId() {
  return Math.random().toString(36).substr(2, 9);
}

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às 'HH:mm'h'",
    {
      locale: ptBR,
    }
  );
  const publishedDateRelativeFormatted = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }
  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }
  function handleKeyPress(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleCreateNewComment();
    }
  }
  function deleteComment(commentIndex) {
    const commentsWithoutDelete = comments.filter((index) => {
      return index !== commentIndex;
    });
    setComments(commentsWithoutDelete);
  }

  const isNewCommentEmpty = newCommentText.length === 0;
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
          onInvalid={handleNewCommentInvalid}
          onKeyPress={handleKeyPress}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => {
          return (
            <Comment
              key={generateRandomId() + index}
              content={comment}
              onDeleteComment={() => deleteComment(index)}
            />
          );
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
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
