import PostHeader from './PostHeader';
import PostActions from './PostActions';
import ImageCarousel from './ImageCarousel';
import { Post } from '../types';

interface FeedPostProps {
  post: Post;
}

export default function FeedPost({ post }: FeedPostProps) {
  const isSingleImage = post.images.length === 1;

  return (
    <div className="flex flex-col bg-background-light dark:bg-background-dark pt-4" data-testid={`feed-post-${post.id}`}>
      <PostHeader author={post.author} />
      
      <div className="px-4 pb-3">
        <p className="text-base font-normal leading-normal">{post.content}</p>
      </div>

      {isSingleImage ? (
        <div 
          className="w-full bg-center bg-no-repeat aspect-video bg-cover"
          style={{ backgroundImage: `url("${post.images[0]}")` }}
          role="img"
          aria-label="Post image"
          data-testid="post-single-image"
        />
      ) : (
        <ImageCarousel images={post.images} postId={post.id} />
      )}

      <PostActions 
        likes={post.likes}
        comments={post.comments}
        shares={post.shares}
      />
    </div>
  );
}
