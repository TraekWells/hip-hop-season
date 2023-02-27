import React from "react";
import { getReviewPostData, getReviewPostsData } from "@/lib/posts";
import { getMDXComponent } from "mdx-bundler/client";
import Header from "@/src/components/Header";
import Rating from "@/src/components/Rating";

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
      <Header type="small" title={frontmatter.title} narrow></Header>
      <div className="container--narrow">
        <h2>The Bottom Line</h2>
        <p className="lead">{frontmatter.bottomLine}</p>
        <Component />
        <Rating
          lyrics={frontmatter.rating.lyrics}
          production={frontmatter.rating.production}
          replayValue={frontmatter.rating.replayValue}
          variety={frontmatter.rating.variety}
          image={frontmatter.image}
          title={frontmatter.title}
        />
      </div>
    </>
  );
};

export default Post;
