import React from "react";
import Header from "@/src/components/Header";
import { getBlogPostData, getBlogPostsData } from "@/lib/posts";
import { getMDXComponent } from "mdx-bundler/client";
import Quote from "@/src/components/Quote";
import VideoEmbed from "@/src/components/VideoEmbed";
import AboutMeSnippet from "@/src/components/AboutMeSnippet";
import useFormatDate from "@/src/hooks/useFormatDate";
import Button from "@/src/components/Button";

export async function getStaticProps({ params }: any) {
  let blog = await getBlogPostData(params.id);
  blog = JSON.parse(JSON.stringify(blog));
  return {
    props: {
      ...blog,
    },
  };
}

export async function getStaticPaths() {
  const paths = getBlogPostsData();
  return {
    paths,
    fallback: false,
  };
}

const Post = ({ code, frontmatter }: any) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <Header
        type="small"
        title={frontmatter.title}
        narrow
        image={frontmatter.image}
      >
        <p className="fs-small">
          Written on {useFormatDate(frontmatter.createdAt)}
        </p>
      </Header>
      <section className="post">
        <div className="container--narrow">
          <Component
            components={{
              Quote,
              VideoEmbed,
            }}
          />
        </div>
      </section>
      <section>
        <div className="container--narrow">
          <AboutMeSnippet />
        </div>
      </section>
      <section>
        <div className="container">
          <h2>More Blogs</h2>
          <Button href="/reviews" type="primary">
            See All Posts
          </Button>
        </div>
      </section>
    </>
  );
};

export default Post;
