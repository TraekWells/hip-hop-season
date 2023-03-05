import { getBlogPostsData } from "@/lib/posts";
import FeaturedPosts from "@/src/components/FeaturedPosts";
import Header from "@/src/components/Header";
import PreviewCard from "@/src/components/PreviewCard";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import React from "react";

interface BlogPageProps {
  blogs: Array<any>;
}

export const getStaticProps: GetStaticProps = async () => {
  let blogs = getBlogPostsData();
  blogs = JSON.parse(JSON.stringify(blogs));

  return {
    props: {
      blogs,
    },
  };
};

const Blog = ({ blogs }: BlogPageProps) => {
  const featuredPosts = blogs.filter((blog) => blog.params.featured === true);
  const latestPosts = blogs
    .filter(
      (blog) => blog.params.featured !== true && blog.params.draft === false
    )
    .sort();
  return (
    <>
      <NextSeo
        title="Blogs"
        description="My thoughts about hip hop topics, questions and general discussion."
        openGraph={{
          url: "https://www.hiphopseason.com/blog",
        }}
        canonical="https://www.hiphopseason.com/blog"
      />
      <Header type="small" title="Blog" image="blog-header.jpg">
        <p className="lead">Thoughts about random things related to Hip Hop.</p>
      </Header>
      <section>
        <div className="container">
          <FeaturedPosts posts={featuredPosts} />
        </div>
      </section>
      <section>
        <div className="container">
          <h2>All Posts</h2>
          {latestPosts.map((blog) => {
            return (
              <PreviewCard
                orientation="horizontal"
                key={blog.params.id}
                post={blog}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Blog;
