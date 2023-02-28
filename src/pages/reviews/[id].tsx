import React from "react";
import Rating from "@/src/components/Rating";
import Header from "@/src/components/Header";
import { getReviewPostData, getReviewPostsData } from "@/lib/posts";
import { getMDXComponent } from "mdx-bundler/client";
import Quote from "@/src/components/Quote";
import VideoEmbed from "@/src/components/VideoEmbed";
import AboutMeSnippet from "@/src/components/AboutMeSnippet";
import useFormatDate from "@/src/hooks/useFormatDate";

export async function getStaticProps({ params }: any) {
  let review = await getReviewPostData(params.id);
  review = JSON.parse(JSON.stringify(review));
  return {
    props: {
      ...review,
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

const Post = ({ code, frontmatter }: any) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <Header type="small" title={frontmatter.title} narrow>
        <p>Written on {useFormatDate(frontmatter.createdAt)}</p>
      </Header>
      <div className="container--narrow">
        <h2>The Bottom Line</h2>
        <p className="lead">{frontmatter.bottomLine}</p>
        <Component
          components={{
            Quote,
            VideoEmbed,
          }}
        />
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
          me to review? Let me know on
          <a href="https://twitter.com/ItsHipHopSeason" target="_blank">
            Twitter
          </a>
          or
          <a href="https://www.instagram.com/itshiphopseason/" target="_blank">
            Instagram
          </a>
          and I'll add it to my list.
        </p>
        <AboutMeSnippet />
      </div>
    </>
  );
};

export default Post;
