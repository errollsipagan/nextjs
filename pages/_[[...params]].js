import { useRouter } from "next/router";

const index = () => {
    const router = useRouter();
    const { params = [] } = router.query;
    return (
        <div>
            <h1>Not found</h1>
            <code>{JSON.stringify(params)}</code>
        </div>
    );
};

export default index;