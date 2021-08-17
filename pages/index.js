import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => (
<Layout>
<h1> home </h1>

<Link href="/about">
	<a> to about</a>

</Link>
</Layout>
)
export default Index;