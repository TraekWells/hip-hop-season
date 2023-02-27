import { getAllReviewPostIds, getReviewPostData } from "@/lib/posts";
import Header from "@/src/components/Header";
import Rating from "@/src/components/Rating";

export async function getStaticProps({ params }: any) {
  let review = getReviewPostData(params.id);
  review = JSON.parse(JSON.stringify(review));
  return {
    props: {
      review,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllReviewPostIds();
  return {
    paths,
    fallback: false,
  };
}

const Post = ({ review }: any) => {
  return (
    <>
      <Header type="small" title={review.title}></Header>
      <div className="container">
        <h2>The Bottom Line</h2>
        <p className="lead">{review.bottomLine}</p>
        <Rating
          lyrics={review.rating.lyrics}
          production={review.rating.production}
          replayValue={review.rating.replayValue}
          variety={review.rating.variety}
          image={review.image}
          title={review.title}
        />
      </div>
    </>
  );
};

export default Post;
