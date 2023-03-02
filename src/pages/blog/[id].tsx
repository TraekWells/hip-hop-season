import React, { SetStateAction } from "react";
import Header from "@/src/components/Header";
import { getBlogPostData, getBlogPostsData } from "@/lib/posts";
import { getMDXComponent } from "mdx-bundler/client";
import Quote from "@/src/components/Quote";
import VideoEmbed from "@/src/components/VideoEmbed";
import AboutMeSnippet from "@/src/components/AboutMeSnippet";
import useFormatDate from "@/src/hooks/useFormatDate";
import Button from "@/src/components/Button";
import FeaturedPosts from "@/src/components/FeaturedPosts";

interface BlogProps {
  params: any;
}

export async function getStaticProps({ params }: any) {
  let blog = await getBlogPostData(params.id);
  blog = JSON.parse(JSON.stringify(blog));

  // Get all reviews and pass to Post
  let blogs = await getBlogPostsData();
  blogs = JSON.parse(JSON.stringify(blogs));
  return {
    props: {
      ...blog,
      blogs,
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

const Post = ({ code, frontmatter, blogs }: any) => {
  const [morePosts, setMorePosts] = React.useState<SetStateAction<any>>([]);
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  React.useEffect(() => {
    const randomPosts = blogs
      .filter((blog: BlogProps) => blog.params.draft === false)
      .filter((blog: BlogProps) => blog.params.title !== frontmatter.title)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);

    setMorePosts(randomPosts);
  }, []);
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
          <FeaturedPosts posts={morePosts} />
          <Button href="/reviews" type="primary">
            See All Posts
          </Button>
        </div>
      </section>
    </>
  );
};

export default Post;
