import Image from 'next/image';
import React from 'react';

const CreatePost = (profileImageUrl: string) => {
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
        className='flex-grow bg-transparent outline-none'
      />
    </div>
  );
};

export default CreatePost;
