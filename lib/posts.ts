import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";

const blogPostsDirectory = path.join(process.cwd(), "./src/posts/blog");
const listPostsDirectory = path.join(process.cwd(), "./src/posts/lists");
const reviewPostsDirectory = path.join(process.cwd(), "./src/posts/reviews");

export const getBlogPostsData = () => {
  // Get file names under /posts/blog
  const fileNames = fs.readdirSync(blogPostsDirectory);
  const blogPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, "");
    const slug = `/blog/${id}`;

    // Read markdown file as string
    const fullPath = path.join(blogPostsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      params: {
        id,
        slug,
        ...matterResult.data,
      },
    };
  });

  return blogPostsData;
};

export const getListPostsData = () => {
  // Get file names under /posts/blog
  const fileNames = fs.readdirSync(listPostsDirectory);
  const listPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, "");
    const slug = `/lists/${id}`;

    // Read markdown file as string
    const fullPath = path.join(listPostsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      params: {
        id,
        slug,
        ...matterResult.data,
      },
    };
  });

  return listPostsData;
};

export const getReviewPostsData = () => {
  // Get file names under /posts/blog
  const fileNames = fs.readdirSync(reviewPostsDirectory);
  const reviewPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, "");
    const slug = `/reviews/${id}`;

    // Read markdown file as string
    const fullPath = path.join(reviewPostsDirectory, `${fileName}`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      params: {
        id,
        slug,
        ...matterResult.data,
      },
    };
  });

  return reviewPostsData;
};

export function getAllBlogPostIds() {
  const fileNames = fs.readdirSync(blogPostsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}

export function getAllReviewPostIds() {
  const fileNames = fs.readdirSync(reviewPostsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}

export function getAllListPostIds() {
  const fileNames = fs.readdirSync(listPostsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}

export async function getBlogPostData(id: string) {
  const fullPath = path.join(blogPostsDirectory, `${id}.mdx`);
  const mdxSource = fs.readFileSync(fullPath, "utf8");

  const { code, frontmatter } = await bundleMDX({
    source: mdxSource,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      options.rehypePlugins = [...(options.rehypePlugins ?? [])];

      return options;
    },
  });

  return {
    code,
    frontmatter,
  };
}

export async function getReviewPostData(id: string) {
  const fullPath = path.join(reviewPostsDirectory, `${id}.mdx`);
  const mdxSource = fs.readFileSync(fullPath, "utf8");

  const { code, frontmatter } = await bundleMDX({
    source: mdxSource,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      options.rehypePlugins = [...(options.rehypePlugins ?? [])];

      return options;
    },
  });

  return {
    code,
    frontmatter,
  };
}

export async function getListPostData(slug: string) {
  const fullPath = path.join(listPostsDirectory, `${slug}.mdx`);
  const mdxSource = fs.readFileSync(fullPath, "utf8");

  const { code, frontmatter } = await bundleMDX({
    source: mdxSource,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      options.rehypePlugins = [...(options.rehypePlugins ?? [])];

      return options;
    },
  });

  return {
    slug,
    code,
    frontmatter,
  };
}
