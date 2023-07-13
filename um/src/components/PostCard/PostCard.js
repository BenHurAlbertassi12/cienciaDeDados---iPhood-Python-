import props from 'prop-types';

export const PostCard = ({ cover, title, body }) => {
  return (
    <div className="post">
      <img src={cover} alt={title}></img>
      <div className="post-content">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  title: props.string.isRequired,
  cover: props.string.isRequired,
  body: props.string.isRequired,
};
