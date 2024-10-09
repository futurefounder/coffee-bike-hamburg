import { getSortedPostsData } from "../lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPostsData();
  return (
    <section className="max-w-2xl mx-auto">
      <br />
      <ul className="ml-5 mr-5">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}{" "}
      </ul>
    </section>
  );
}
