import Link from "next/link";
import Layout from "../components/Layout";
// a tag is a hyper link
const About = () => (
	<Layout title="about">
		<h1>About</h1>
		<Link href="/">

		<a> Home </a>
		</Link>
		<p> Java Script stuff </p>
		<img src="../static/1vreqz3vgth71.jpeg" alt="pretty pics" height="200px"/>
	</Layout>
)


export default About