import { Button } from "../components/ui/button";

const Hero = () => {
	return (
		<section className="my-8">
			<div className="mb-4 text-2xl space-y-4">
				<h3>Hello there!</h3>
				<h1 className="text-5xl">
					I'm <strong>Ronan Kitten</strong>
				</h1>
				<h2 className="text-4xl">
					Entushiasm in{" "}
					<strong className="text-purple-600">web designer</strong> and{" "}
					<strong className="text-purple-600">front-end developer</strong>
				</h2>
			</div>
			<p className="my-4">
				A computer engineering graduate with a GPA of 3.83 and 6 years of school
				administration and IT support experience. Able to work independently and
				as part of a team, eager to learn, develop skills, and contribute to an
				innovative company.
			</p>
			<div className="mb-4 border-black border p-4">
				<p>Currently working on Portfolio</p>
			</div>
			<Button>Contact Me!</Button>
		</section>
	);
};

export default Hero;
