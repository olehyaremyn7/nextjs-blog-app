'use client';

import clsx from 'clsx';
import { memo, useEffect, useState, startTransition, useRef } from 'react';
import dynamic from 'next/dynamic';
import Skeleton from '../UI/Skeleton';
import TitleInputSkeleton from '../Skeletons/TitleInputSkeleton';
import SelectCategorySkeleton from '../Skeletons/SelectCategorySkeleton';
import PublishButtonSkeleton from '../Skeletons/PublishButtonSkeleton';
import Loader from '../UI/Loader';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useForm, Controller } from 'react-hook-form';
import { storage } from '@/db/storage';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { createPostAction } from 'actions';
import { getProgress, getUploadedFileName } from './utils';
import { isLoading, isUnAuthenticated } from '@/utils/authorization';
import PropTypes from 'prop-types';
import styles from './CreatePostForm.module.css';
import 'react-quill/dist/quill.bubble.css';

const Input = dynamic(() => import('@/components/UI/Input'), {
  loading: () => <TitleInputSkeleton classes={styles.inputSkeleton} />,
});
const ReactQuill = dynamic(() => import('react-quill'), {
  loading: () => <Skeleton classes={styles.quill} sx={{ marginBottom: 0 }} />,
  ssr: false,
});
const Select = dynamic(() => import('@/components/UI/Select'), {
  loading: () => <SelectCategorySkeleton classes={styles.selectRoot} />,
});
const MediaOptions = dynamic(() => import('@/components/MediaOptions'), {
  loading: () => <Skeleton classes={styles.mediaOptionsSkeleton} variant="circular" height={55} width={55} />,
});
const Button = dynamic(() => import('@/components/UI/Button'), {
  loading: () => <PublishButtonSkeleton classes={styles.publish} />,
});

const CreatePostForm = ({ categories }) => {
  const timeoutRef = useRef(null);
  const { status } = useSession();
  const router = useRouter();
  const {
    control,
    register,
    setFocus,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm({
    defaultValues: {
      category: '',
    },
  });
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { title: titleError, category: categoryError } = errors;

  useEffect(
    () => () => {
      clearTimeout(timeoutRef.current);
    },
    [],
  );

  if (isUnAuthenticated(status)) {
    router.push('/');
  }

  const uploadPostContent = () => {
    const uploadTask = uploadBytesResumable(ref(storage, getUploadedFileName(file)), file);

    setProgress(0);
    setIsUploading(true);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        startTransition(() => {
          setProgress(getProgress(snapshot));
        });
      },
      null,
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setMedia(downloadURL);

          timeoutRef.current = setTimeout(() => {
            setIsUploading(false);
          }, 1000);
        });
      },
    );
  };

  useEffect(() => {
    if (file) {
      uploadPostContent();
      setFile(null);
    }
  }, [file]);

  const handleCreatePost = handleSubmit(
    async ({ title, category: catSlug, content: desc }) =>
      await createPostAction({
        title,
        desc,
        catSlug,
        img: media,
      }),
  );

  const handleFileChange = (event) => {
    event.preventDefault();

    const {
      target: { files },
    } = event;
    const [file] = files;

    if (file) {
      setFile(file);
    }
  };

  const handleEditorKeyDownCapture = (event) => {
    const { key, target, shiftKey } = event;

    if (key === 'Tab' && target.classList.contains('ql-editor')) {
      event.preventDefault();
      event.stopPropagation();

      document.getElementById(shiftKey ? 'media-options-button' : 'category-select')?.focus();
    }
  };

  return !isLoading(status) ? (
    <form className={styles.root} action={handleCreatePost}>
      <Input
        classNameRoot={clsx(styles.inputRoot, !!titleError && styles.invalid)}
        classNameControl={styles.inputControl}
        classNameInput={styles.titleInput}
        label="Title"
        helperText="Enter article title"
        placeholder="Title"
        name="title"
        required
        showError={titleError}
        isValid={!!titleError}
        ariaLabel="Enter article title"
        errorMessage={titleError ? titleError.message : null}
        register={register}
        controlName="title"
        shouldFocus
        isLabelHidden
        isHelperTextHidden
        setFocus={setFocus}
      />
      <MediaOptions
        id="media-options-button"
        onFileChange={handleFileChange}
        progress={progress}
        isUploading={isUploading}
      />
      <div
        role="textbox"
        aria-label="Article text editor"
        className={styles.editor}
        onKeyDownCapture={handleEditorKeyDownCapture}
      >
        <Controller
          name="content"
          control={control}
          rules={{
            required: 'Please enter the article content',
          }}
          render={({ field }) => (
            <ReactQuill
              className={styles.quill}
              theme="bubble"
              placeholder="Tell your story..."
              preserveWhitespace
              {...field}
              onChange={(text) => {
                field.onChange(text);
              }}
            />
          )}
        />
      </div>
      <Select
        id="category-select"
        classNameRoot={styles.selectRoot}
        label="Category"
        helperText="Select article category"
        placeholder="Select article category"
        name="category"
        required
        showError={categoryError}
        isValid={!!categoryError}
        ariaLabel="Select article category"
        errorMessage={categoryError ? categoryError.message : null}
        options={categories}
        register={register}
        controlName="category"
        isLabelHidden
        isHelperTextHidden
      />
      <Button
        id="publish"
        text="Publish"
        type="submit"
        classes={styles.publish}
        title="Publish post"
        disabled={!isDirty || !isValid || isSubmitting}
        ariaLabel="Publish post"
      />
    </form>
  ) : (
    <Loader isWrapper wrapperClasses={styles.loading} />
  );
};

CreatePostForm.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      disabled: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default memo(CreatePostForm);
