// import Head from "next/head";
// import { getPost } from "../../lib/posts";

// /* Props를 넘기는 Nextjs의 방법 */
// export async function getStaticProps() {
//     // 밑에 두 부분을 getStaticPaths()를 생성하여 옮겨준다.
//     // const data = await readFile('content/posts/first-post.json', 'utf8');
//     // const post = JSON.parse(data);
//     const post = await getPost('first-post'); // slug
//     return {
//         props: { post },
//     };
// };

// function FirstPostPage({ post }) {
//     console.log('[FirstPostPage] render:', post)
//     return (
//         <>
//             <Head>
//                 <title>{post.title} - My Blog</title>
//             </Head>
//             <main>
//                 <p>{post.date}</p>
//                 <h1>{post.title}</h1>
//                 <article dangerouslySetInnerHTML={{ __html: post.body }}></article>
//             </main>
//         </>
//     )
// }

// export default FirstPostPage;