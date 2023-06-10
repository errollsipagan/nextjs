import Link from "next/link";


const index = ({ data }) => {
    return (
        <div>
            <h1>Posts</h1>
            <ul>
            {data.map((post) => {
                return (
                    <><Link href={`/posts/${post.id}`}>{post.title}</Link> <br /></>
                );
            })}
            </ul>
        </div>
    );
};

export default index;

export async function getStaticProps () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await response.json();

    return {
        props: {
            data,
        },
    };
}