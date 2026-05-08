import Card from "./Card";

export default function Category({ post }) {
  return (
    <div>
      <h3>{post.category}</h3>
      <Card post={post} />
    </div>
  );
}