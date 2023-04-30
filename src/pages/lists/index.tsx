import { getListPostsData } from "@/lib/posts";
import FeaturedPosts from "@/src/components/FeaturedPosts";
import Header from "@/src/components/Header";
import PreviewCard, { PreviewCardType } from "@/src/components/PreviewCard";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import React from "react";

interface ListPageProps {
  lists: Array<PreviewCardType>;
}

export const getStaticProps: GetStaticProps = async () => {
  let lists = getListPostsData();
  lists = JSON.parse(JSON.stringify(lists));

  return {
    props: {
      lists,
    },
  };
};

const Lists = ({ lists }: ListPageProps) => {
  const featuredLists = lists.filter((list) => list.params.featured === true);
  const latestLists = lists
    .filter(
      (list) => list.params.featured !== true && list.params.draft === false
    )
    .sort();
  return (
    <>
      <NextSeo
        title="Lists"
        description="Everybody has their own hip hop music lists. Here are a few of mine."
        openGraph={{
          url: "https://www.hiphopseason.com/lists",
        }}
        canonical="https://www.hiphopseason.com/lists"
      />
      <Header type="small" title="Lists" image="/images/review-header.jpg">
        <p className="lead">
          Everybody has their own hip hop music lists. Here are a few of mine.
        </p>
      </Header>
      <section>
        <div className="container">
          <FeaturedPosts posts={featuredLists} />
        </div>
      </section>
      <section>
        <div className="container">
          <h2>All Posts</h2>
          {latestLists.map((list) => {
            return (
              <PreviewCard
                orientation="horizontal"
                key={list.params.id}
                post={list}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Lists;
