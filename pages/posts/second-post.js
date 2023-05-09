import Head from "next/head";
import { getPost } from "../../lib/posts";

/* Props를 넘기는 Nextjs의 방법 */
export async function getStaticProps() {
    const post = await getPost('second-post'); // slug
    return {
        props: { post },
    };
};

function SecondPostPage({ post }) {
    console.log('[SecondPostPage] render:', post)
    return (
        <>
            <Head>
                <title>{post.title} - My Blog</title>
            </Head>
            <main>
                <p>{post.date}</p>
                <h1>{post.title}</h1>
                <article dangerouslySetInnerHTML={{ __html: post.body }}></article>
            </main>
        </>
    )
}

export default SecondPostPage;