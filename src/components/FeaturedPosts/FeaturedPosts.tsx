import styles from "./FeaturedPosts.module.scss";
import PreviewCard, { PreviewCardType } from "../PreviewCard";

const FeaturedPosts = ({ posts }: any) => {
  return (
    <div className={styles["featured-container"]}>
      {posts.map((post: PreviewCardType) => {
        return (
          <PreviewCard
            post={post}
            orientation="vertical"
            key={post.params.id}
          />
        );
      })}
    </div>
  );
};

export default FeaturedPosts;
