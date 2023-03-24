import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { type RouterOutputs } from '~/utils/api';

dayjs.extend(relativeTime);

type PostWithUser = RouterOutputs['posts']['getAll'][number];

const Post = (props: PostWithUser) => {
  const { post, author } = props;
  return (
    <div className='flex gap-3 border-b border-slate-400 p-4'>
      <img
        src={author.profileImageUrl}
        className='h-10 w-10 rounded-full'
        alt='Profile Image'
      />
      <div className='flex flex-col'>
        <div className='flex gap-x-1'>
          <span className='pr-2 font-bold text-white'>{author.firstName}</span>
          <span className='text-slate-400'>{`@${author.username}`}</span>
          <span className='text-slate-400'>
            {` · ${dayjs(post.createdAt).fromNow()}`}
          </span>
        </div>
        <span>{post.content}</span>
      </div>
    </div>
  );
};

export default Post;
