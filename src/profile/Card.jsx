export default function Card({ post }) {
  return (
    <div>
      <p>{post.author}</p>
      <p>{post.content}</p>
      <p>{post.likes} likes</p>
    </div>
  );
}