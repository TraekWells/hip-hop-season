import React, { SetStateAction } from "react";
import Rating from "@/src/components/Rating";
import Header from "@/src/components/Header";
import { getReviewPostData, getReviewPostsData } from "@/lib/posts";
import { getMDXComponent } from "mdx-bundler/client";
import Quote from "@/src/components/Quote";
import VideoEmbed from "@/src/components/VideoEmbed";
import AboutMeSnippet from "@/src/components/AboutMeSnippet";
import useFormatDate from "@/src/hooks/useFormatDate";
import Button from "@/src/components/Button";
import FeaturedPosts from "@/src/components/FeaturedPosts";
import MetaData from "@/src/components/MetaData";
import { useRouter } from "next/router";
interface PostProps {
  code: string;
  frontmatter: any;
  reviews: ReviewProps[];
}

interface ReviewProps {
  params: any;
}

export async function getStaticProps({ params }: any) {
  // Get the review for this dynamic URL
  let review = await getReviewPostData(params.id);
  review = JSON.parse(JSON.stringify(review));

  // Get all reviews and pass to Post
  let reviews = await getReviewPostsData();
  reviews = JSON.parse(JSON.stringify(reviews));

  return {
    props: {
      ...review,
      reviews,
    },
  };
}

export async function getStaticPaths() {
  const paths = getReviewPostsData();
  return {
    paths,
    fallback: false,
  };
}

const Post = ({ code, frontmatter, reviews }: PostProps) => {
  const route = useRouter();
  const [moreReviews, setMoreReviews] = React.useState<SetStateAction<any>>([]);
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  React.useEffect(() => {
    const randomReviews = reviews
      .filter((review: ReviewProps) => review.params.draft === false)
      .filter(
        (review: ReviewProps) => review.params.title !== frontmatter.title
      )
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);

    setMoreReviews(randomReviews);
  }, [reviews, frontmatter.title]);
  return (
    <>
      <MetaData
        title={frontmatter.title}
        description={frontmatter.bottomLine}
        image={`https://www.hiphopseason.com/images/${frontmatter.image}`}
        type="article"
        url={`https://www.hiphopseason.com${route.asPath}`}
        createdAt={frontmatter.createdAt}
      />
      <Header
        type="small"
        title={frontmatter.title}
        narrow
        artist={frontmatter.artist}
        image={frontmatter.image}
      >
        <p className="fs-small">
          Written on {useFormatDate(frontmatter.createdAt)}
        </p>
      </Header>
      <section className="post">
        <div className="container--narrow">
          <h2>The Bottom Line</h2>
          <p className="lead color-base-300">{frontmatter.bottomLine}</p>
          <Component
            components={{
              Quote,
              VideoEmbed,
            }}
          />
          <h2>Final Thoughts</h2>
          <p>{frontmatter.finalThoughts}</p>
          <Rating
            lyrics={frontmatter.rating.lyrics}
            production={frontmatter.rating.production}
            replayValue={frontmatter.rating.replayValue}
            variety={frontmatter.rating.variety}
            image={frontmatter.image}
            title={frontmatter.title}
          />
          <p className="text-centered">
            How would you rate this project? Have an album or mixtape you'd like
            me to review? Let me know on{" "}
            <a
              href="https://twitter.com/ItsHipHopSeason"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>{" "}
            or{" "}
            <a
              href="https://www.instagram.com/itshiphopseason/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>{" "}
            and I'll add it to my list.
          </p>
        </div>
      </section>
      <section>
        <div className="container--narrow">
          <AboutMeSnippet />
        </div>
      </section>
      <section>
        <div className="container">
          <h2>More Reviews</h2>
          <FeaturedPosts posts={moreReviews} />
          <Button href="/reviews" type="primary">
            See All Reviews
          </Button>
        </div>
      </section>
    </>
  );
};

export default Post;
