import Head from "next/head";
import { getPost } from '../../lib/posts';

export async function getStaticProps() {
  const post = await getPost('first-post');

  /* server에서만 보이는 부분 */
  return {
    props: { post }
  }
}

function FirstPostPage({ post }) {
  return (
    <>
      <Head>
        <title>
          {post.title} - My Blog
        </title>
      </Head>
      <main>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </main>
    </>
  );
}
export default FirstPostPage;
