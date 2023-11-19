'use client';

import { memo } from 'react';
import dynamic from 'next/dynamic';
import Skeleton from '../UI/Skeleton';
import Textarea from '../UI/Textarea';
import { useForm } from 'react-hook-form';
import { createCommentAction } from 'actions';
import PropTypes from 'prop-types';
import styles from './CommentForm.module.css';

const Button = dynamic(() => import('../UI/Button'), {
  loading: () => <Skeleton animation="wave" sx={{ marginBottom: 0 }} variant="rounded" height={48} width={82} />,
});

const CommentForm = ({ postSlug }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm();
  const { comment: commentError } = errors;

  const handleCreateComment = handleSubmit(async ({ comment: desc }) => {
    await createCommentAction({ postSlug, desc });

    reset();
  });

  return (
    <form className={styles.root} action={handleCreateComment}>
      <Textarea
        label="Comment"
        helperText="Write your comment"
        placeholder="Your comment..."
        name="comment"
        required
        showError={commentError}
        isValid={!!commentError}
        ariaLabel="Enter your comment"
        errorMessage={commentError ? commentError.message : null}
        register={register}
        controlName="comment"
      />
      <Button
        text="Send"
        type="submit"
        color="accent"
        title="Send a comment"
        disabled={!isDirty || !isValid || isSubmitting}
        ariaLabel="Submit a comment"
      />
    </form>
  );
};

CommentForm.propTypes = {
  postSlug: PropTypes.string.isRequired,
};

export default memo(CommentForm);
