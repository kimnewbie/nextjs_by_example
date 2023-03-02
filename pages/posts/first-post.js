import { readFile } from 'fs/promises';
import Head from "next/head";

export async function getStaticProps() {
  const data = await readFile('content/posts/first-post.json', 'utf8');
  const post = JSON.parse(data);
  /* server에서만 보이는 부분 */
  return {
    props: { post }
  }
}

function FirstPostPage({ post }) {
  return (
    <>
      <Head>{post.title} - My Blog</Head>
      <main>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </main>
    </>
  );
}
export default FirstPostPage;
