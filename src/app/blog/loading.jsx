import Skeleton from '@/components/UI/Skeleton';
import PostsSkeleton from '@/components/Skeletons/PostsSkeleton';
import MenuSkeleton from '@/components/Skeletons/MenuSkeleton';

const Loading = () => (
  <>
    <Skeleton variant="heading" height={120} />
    <section className="content">
      <PostsSkeleton />
      <MenuSkeleton />
    </section>
  </>
);

export default Loading;
