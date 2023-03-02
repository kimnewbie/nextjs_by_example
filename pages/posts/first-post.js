import Head from "next/head";

export async function getStaticProps() {
  return {
    props: {
      post: {
        title: 'Fist Post',
        body: 'My first post, as static props'
      }
    }
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
