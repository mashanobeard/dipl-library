import React from 'react';
import useStyles from './style';
import { Button, Typography, TextField, Avatar } from '@material-ui/core';

const Comment = (props) => {
  const classes = useStyles();
  const { comments, comment, setComment, handleComment } = props;
  console.log(props);

  return (
    <div>
      haha
      {comments?.map((comment, index) => (
        <form>
          <div className={classes.comment}>
            <Avatar src={comment.pic} alt="avatar" />
            <Typography variant="h6" className={classes.username}>
              {comment.postedBy}:
            </Typography>
            <Typography className={classes.text} key={index}>
              {comment.content}
            </Typography>
          </div>
        </form>
      ))}
      <h4>What do you think about this book?</h4>
      <div>
        <TextField
          variant="standard"
          label="type your comment..."
          fullWidth
          multiline
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          maxLength="280"
        />
        <Button
          type="submit"
          className={classes.updateButton}
          disabled={!comment}
          onClick={handleComment}
        >
          Enter
        </Button>
      </div>
    </div>
  );
};

export default Comment;
