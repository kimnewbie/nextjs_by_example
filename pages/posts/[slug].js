import Head from 'next/head';
import { getPost, getSlugs } from '../../lib/posts';

export async function getStaticPaths() {
    const slugs = await getSlugs();
    return {
        paths: slugs.map((slug) => ({
            params: { slug },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    console.log('[PostPage] getStaticProps():', slug);
    const post = await getPost(slug); // slug는 파일 이름
    return {
        props: { post },
    };
}

function PostPage({ post }) {
    console.log('[PostPage] render:', post);
    return (
        <>
            <Head>
                <title>{`${post.title} - My Blog`}</title>
            </Head>
            <main>
                <p>{post.date}</p>
                <h1>{post.title}</h1>
                <article dangerouslySetInnerHTML={{ __html: post.body }} />
            </main>
        </>
    );
}

export default PostPage;