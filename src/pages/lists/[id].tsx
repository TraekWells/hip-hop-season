import React, { SetStateAction } from "react";
import Header from "@/src/components/Header";
import { getListPostData, getListPostsData } from "@/lib/posts";
import { getMDXComponent } from "mdx-bundler/client";
import Quote from "@/src/components/Quote";
import VideoEmbed from "@/src/components/VideoEmbed";
import AboutMeSnippet from "@/src/components/AboutMeSnippet";
import useFormatDate from "@/src/hooks/useFormatDate";
import Button from "@/src/components/Button";
import FeaturedPosts from "@/src/components/FeaturedPosts";
import MetaData from "@/src/components/MetaData";
import { useRouter } from "next/router";

interface ListProps {
  params: any;
}

export async function getStaticProps({ params }: any) {
  let list = await getListPostData(params.id);
  list = JSON.parse(JSON.stringify(list));

  // Get all reviews and pass to Post
  let lists = await getListPostsData();
  lists = JSON.parse(JSON.stringify(lists));

  return {
    props: {
      ...list,
      lists,
    },
  };
}

export async function getStaticPaths() {
  const paths = getListPostsData();
  return {
    paths,
    fallback: false,
  };
}

const Post = ({ code, frontmatter, lists }: any) => {
  const route = useRouter();
  const [moreLists, setMoreLists] = React.useState<SetStateAction<any>>([]);
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  React.useEffect(() => {
    const randomLists = lists
      .filter((list: ListProps) => list.params.draft === false)
      .filter((review: ListProps) => review.params.title !== frontmatter.title)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);

    setMoreLists(randomLists);
  }, [lists, frontmatter.title]);
  return (
    <>
      <MetaData
        title={frontmatter.title}
        description={frontmatter.summary}
        image={`https://www.hiphopseason.com/images/${frontmatter.image}`}
        type="article"
        url={`https://www.hiphopseason.com${route.asPath}`}
        createdAt={frontmatter.createdAt}
      />
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
          <h2>More Lists</h2>
          <FeaturedPosts posts={moreLists} />
          <Button href="/reviews" type="primary">
            See All Lists
          </Button>
        </div>
      </section>
    </>
  );
};

export default Post;
