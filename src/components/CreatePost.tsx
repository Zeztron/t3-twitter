import Image from 'next/image';
import React, { useState } from 'react';
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
      <button onClick={() => mutate({ content: input })}>Post</button>
    </div>
  );
};

export default CreatePost;
