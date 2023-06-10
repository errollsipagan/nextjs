import Link from "next/link";


const index = () => {
    return (
        <div>
            <h1>Products</h1>
            <ul>
                <li>
                    <Link href="/product/1">Product 1</Link>
                    <Link href="/product/2">Product 2</Link>
                    <Link href="/product/3">Product 3</Link>
                </li>
            </ul>
        </div>
    );
};

export default index;

export async function getStaticProps() {
    const response = await fetch('http://localhost:4000/');

    const data = await response.json();

    return {
        props: {
            data,
        },
    };
}