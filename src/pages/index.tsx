import { GetStaticProps } from "next";
import Button from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";
import Header from "../components/Header";
import LinkWithIcon from "../components/LinkWithIcon";
import { getBlogPostsData, getReviewPostsData } from "@/lib/posts";
import PreviewCard, { PreviewCardType } from "../components/PreviewCard";
import FeaturedPosts from "../components/FeaturedPosts";
import { NextSeo } from "next-seo";

interface HomepageProps {
  // I don't want this to be 'any' but I don't know how else to fix it
  blogs: Array<PreviewCardType>;
  reviews: Array<PreviewCardType>;
}

export const getStaticProps: GetStaticProps = async () => {
  let blogs = getBlogPostsData();
  let reviews = getReviewPostsData();
  blogs = JSON.parse(JSON.stringify(blogs));
  reviews = JSON.parse(JSON.stringify(reviews));

  return {
    props: {
      blogs,
      reviews,
    },
  };
};

export default function Home({ blogs, reviews }: HomepageProps) {
  const featuredReviews = reviews.filter(
    (review) => review.params.featured === true
  );
  const latestReviews = reviews
    .filter(
      (review) =>
        review.params.featured !== true && review.params.draft === false
    )
    .sort();
  const featuredPosts = blogs.filter((blog) => blog.params.featured === true);
  const latestPosts = blogs
    .filter(
      (blog) => blog.params.featured !== true && blog.params.draft === false
    )
    .sort();
  return (
    <>
      <NextSeo
        title="Hip Hop Album Reviews"
        description="Your home for underground hip hop album reviews and blog for everything related to hip hop music and the culture."
        openGraph={{
          url: "https://www.hiphopseason.com",
        }}
        canonical="https://www.hiphopseason.com"
      />
      <Header
        type="large"
        title="Welcome to Hip Hop Season"
        image="/images/homepage-hero-image.jpg"
      >
        <p className="lead mt-4">
          Your home for <span className="underline">underground</span> Hip-Hop
          album reviews and blogs about all things related to Hip-Hop music and
          the culture.
        </p>
        <ButtonGroup>
          <Button type="primary" href="/reviews">
            Read the Reviews
          </Button>
          <LinkWithIcon href="/blog" className="color-white">
            Read the Blog
          </LinkWithIcon>
        </ButtonGroup>
      </Header>
      <section>
        <div className="container">
          <h2>Featured Reviews</h2>
          <FeaturedPosts posts={featuredReviews} />
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Latests Reviews</h2>
          {latestReviews.map((review) => {
            return (
              <PreviewCard
                orientation="horizontal"
                key={review.params.id}
                post={review}
              />
            );
          })}
          <Button href="/reviews" type="primary">
            See more reviews
          </Button>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Featured Posts</h2>
          <FeaturedPosts posts={featuredPosts} />
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Latests Posts</h2>
          {latestPosts.map((post) => {
            return (
              <PreviewCard
                orientation="horizontal"
                key={post.params.id}
                post={post}
              />
            );
          })}
          <Button href="/blog" type="primary">
            See more Posts
          </Button>
        </div>
      </section>
    </>
  );
}
