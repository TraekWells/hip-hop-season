import { getReviewPostsData } from "@/lib/posts";
import FeaturedPosts from "@/src/components/FeaturedPosts";
import Header from "@/src/components/Header";
import PreviewCard from "@/src/components/PreviewCard";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

interface ReviewPageProps {
  reviews: Array<any>;
}

export const getStaticProps: GetStaticProps = async () => {
  let reviews = getReviewPostsData();
  reviews = JSON.parse(JSON.stringify(reviews));

  return {
    props: {
      reviews,
    },
  };
};

const Reviews = ({ reviews }: ReviewPageProps) => {
  const featuredReviews = reviews.filter(
    (review) => review.params.featured === true
  );
  const latestReviews = reviews
    .filter(
      (review) =>
        review.params.featured !== true && review.params.draft === false
    )
    .sort();
  return (
    <>
      <NextSeo
        title="Reviews"
        description="Hip hop album reviews for underground projects."
      />
      <Header type="small" title="Reviews" image="review-header.jpg">
        <p className="lead">
          My thoughts and opinions about different albums and mixtapes.
        </p>
      </Header>
      <section>
        <div className="container">
          <FeaturedPosts posts={featuredReviews} />
        </div>
      </section>
      <section>
        <div className="container">
          <h2>All Reviews</h2>
          {latestReviews.map((review) => {
            return (
              <PreviewCard
                orientation="horizontal"
                key={review.params.id}
                post={review}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Reviews;
