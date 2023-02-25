import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogPostsDirectory = path.join(process.cwd(), "./src/posts/blog");
const listPostsDirectory = path.join(process.cwd(), "./src/posts/lists");
const reviewPostsDirectory = path.join(process.cwd(), "./src/posts/reviews");

export const getBlogPostsData = () => {
  // Get file names under /posts/blog
  const fileNames = fs.readdirSync(blogPostsDirectory);
  const blogPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");
    const slug = `/blog/${id}`;

    // Read markdown file as string
    const fullPath = path.join(blogPostsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      slug,
      ...matterResult.data,
    };
  });

  return blogPostsData;
};

export const getListPostsData = () => {
  // Get file names under /posts/blog
  const fileNames = fs.readdirSync(listPostsDirectory);
  const listPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");
    const slug = `/lists/${id}`;

    // Read markdown file as string
    const fullPath = path.join(listPostsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      slug,
      ...matterResult.data,
    };
  });

  return listPostsData;
};

export const getReviewPostsData = () => {
  // Get file names under /posts/blog
  const fileNames = fs.readdirSync(reviewPostsDirectory);
  const reviewPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");
    const slug = `/reviews/${id}`;

    // Read markdown file as string
    const fullPath = path.join(reviewPostsDirectory, `${fileName}`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      slug,
      ...matterResult.data,
    };
  });

  return reviewPostsData;
};
