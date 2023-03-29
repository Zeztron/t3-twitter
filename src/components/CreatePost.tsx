import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { api } from '~/utils/api';

interface CreatePostProps {
  profileImageUrl: string;
}

const CreatePost: React.FC<CreatePostProps> = ({ profileImageUrl }) => {
  const [input, setInput] = useState<string>('');

  const ctx = api.useContext();

  const { mutate, isLoading: isPosting } = api.posts.create.useMutation({
    onSuccess: () => {
      setInput('');
      ctx.posts.getAll.invalidate();
    },
    onError: (e) => {
      const errorMessage = e.data?.zodError?.fieldErrors.content;

      if (errorMessage && errorMessage[0]) {
        toast.error(errorMessage[0]!);
      } else {
        toast.error('Failed to post! Please try again later.');
      }
    },
  });

  return (
    <div className='flex w-full gap-3'>
      <Image
        width={56}
        height={56}
        src={profileImageUrl}
        alt='Profile Image'
        className='h-10 w-10 rounded-full'
      />
      <input
        placeholder='Type some emojis!'
        className='grow bg-transparent outline-none'
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isPosting}
      />
      {!isPosting && input && (
        <button disabled={isPosting} onClick={() => mutate({ content: input })}>
          Post
        </button>
      )}
      {isPosting && (
        <Loader2 className='h-6 w-6 animate-spin' color='#1DA1F2' />
      )}
    </div>
  );
};

export default CreatePost;
