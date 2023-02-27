import styles from "./FeaturedPosts.module.scss";
import PreviewCard, { PreviewCardType } from "../PreviewCard";

interface FeaturedPostsProps {
  posts: any;
}

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  return (
    <div className={styles["featured-container"]}>
      {posts.map((post: PreviewCardType) => {
        return <PreviewCard post={post} orientation="vertical" key={post.id} />;
      })}
    </div>
  );
};

export default FeaturedPosts;
