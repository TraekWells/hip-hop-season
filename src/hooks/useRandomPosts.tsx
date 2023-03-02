const useRandomPosts = (posts: [], number: number) => {
  const randomPosts = posts[Math.floor(Math.random() * number)];
  console.log(randomPosts);
  return randomPosts;
};

export default useRandomPosts;
