import React from 'react';

const CreatePost = (profileImageUrl: string) => {
  return (
    <div className='flex w-full gap-3'>
      <img
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
