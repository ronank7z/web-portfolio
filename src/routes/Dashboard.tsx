import Header from "../components/Header";
import Hero from "../components/Hero";
import Quote from "../components/Quote";
import { Button } from "../components/ui/button";
import {
	IconBrandGithub,
	IconBrandLinkedin,
	IconMail,
	IconPhoneCall,
} from "@tabler/icons-react";
import Project from "../components/Project";

const Dashboard = () => {
	return (
		<>
			<section className="md:px-8">
				<Header />
			</section>
			<section className="md:px-8 py-2">
				<Hero />
			</section>
			<section className="md:px-8 py-2">
				<Quote />
			</section>
			<section className="md:px-8 py-4">
				<div className="flex justify-between items-center mb-4">
					<h1 className="text-purple-600 font-bold text-2xl">{"#"}projects</h1>
					<Button>View All</Button>
				</div>
				<div className="grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
					<Project />
				</div>
			</section>
			<section className="md:px-8 py-4">
				<div className="flex justify-between items-center mb-4">
					<h1 className="text-purple-600 font-bold text-2xl">{"#"}skills</h1>
				</div>
				<div className="grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
					<div className=" mb-4">
						<div className="p-2">
							<h1 className="font-bold">Languages</h1>
						</div>
						<div>
							<ul className="p-2 space-y-2">
								<li>Javascript</li>
								<li>Python</li>
								<li>C</li>
							</ul>
						</div>
					</div>
					<div className=" mb-4">
						<div className="p-2">
							<h1 className="font-bold">Databases</h1>
						</div>
						<div>
							<ul className="p-2 space-y-2">
								<li>MongoDB</li>
								<li>MySQL</li>
								<li>PostgreSQL</li>
							</ul>
						</div>
					</div>
					<div className=" mb-4">
						<div className="p-2">
							<h1 className="font-bold">Frameworks</h1>
						</div>
						<div>
							<ul className="p-2 space-y-2">
								<li>Django</li>
								<li>Next</li>
							</ul>
						</div>
					</div>
					<div className=" mb-4">
						<div className="p-2">
							<h1 className="font-bold">Build Tools</h1>
						</div>
						<div>
							<ul className="p-2 space-y-2">
								<li>Vite</li>
							</ul>
						</div>
					</div>
					<div className=" mb-4">
						<div className="p-2">
							<h1 className="font-bold">Library</h1>
						</div>
						<div>
							<ul className="p-2 space-y-2">
								<li>React</li>
							</ul>
						</div>
					</div>
					<div className=" mb-4">
						<div className="p-2">
							<h1 className="font-bold">Code Editor</h1>
						</div>
						<div>
							<ul className="p-2 space-y-2">
								<li>Visual Studio Code</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="md:px-8 py-4">
				<div className="flex justify-between items-center mb-4">
					<h1 className="text-purple-600 font-bold text-2xl">{"#"}about-me</h1>
				</div>
				<p className="mb-2">
					<span className="font-bold">Hello</span>, i&apos;m{" "}
					<span className="font-bold">RK-Dev</span>
				</p>
				<p className="mb-2">
					I'm a recent computer engineering graduate (3.83 GPA) driven by a
					passion for crafting interactive web experiences using React. My 6
					years in school administration and IT support equipped me with a
					strong technical foundation and honed my problem-solving skills. Now,
					I'm eager to leverage my knowledge of JavaScript and Python to build
					dynamic and user-friendly interfaces using React.
				</p>
				<p className="mb-2">
					I'm a quick learner, constantly seeking opportunities to expand my
					skillset and delve deeper into the world of front-end development,
					particularly focusing on React and its ecosystem. My experience in
					diverse school environments fostered excellent communication and
					collaboration skills.
				</p>
				<p className="mb-2">
					I'm a highly motivated individual with a strong work ethic and a
					dedication to excellence. I'm eager to learn from experienced
					professionals and contribute innovative ideas to your team. Let's
					connect and discuss how my React skills can benefit your next project!
				</p>
				<Button>Read More</Button>
			</section>
			<section className="md:px-8 py-4">
				<div className="flex justify-between items-center mb-4">
					<h1 className="text-purple-600 font-bold text-2xl">{"#"}contacts</h1>
				</div>
				<div className="grid md:grid-cols-2 md:gap-8">
					<div className=" space-y-2 py-2 space-x-2">
						<p className="pb-2">Get in touch</p>
						<div className="flex gap-4 items-center">
							<p>
								<IconPhoneCall />
							</p>
							<p>
								<a
									href="https://wa.me/085163087770/"
									className="hover:underline">
									(+62) 851-6308-7770
								</a>
							</p>
						</div>
						<div className="flex gap-4 items-center">
							<p>
								<IconMail />
							</p>
							<p>
								<a
									href="mailto:ronank.dev@gmail.com"
									className="hover:underline">
									ronank.dev@gmail.com
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>
			<footer className="md:px-8 py-4">
				<p className="font-bold">RK-Dev</p>
				<div className="md:flex md:justify-between">
					<div className="mb-4">
						<p>
							<a href="mailto:ronank.dev@gmail.com" className="hover:underline">
								ronank.dev@gmail.com
							</a>
						</p>
						<p>Web Designer and Front-end Developer</p>
					</div>
					<div className="mb-4">
						<p>Media Social</p>
						<div className="flex items-center gap-2">
							<a
								href="https://www.github.com/ronank7z/"
								target="_blank"
								className="border border-gray-600 p-2 rounded-full cursor-pointer hover:bg-gray-300">
								<IconBrandGithub size={24} />
							</a>
							<a
								href="https://www.linkedin.com/in/ronan-kitten/"
								target="_blank"
								className="border border-gray-600 p-2 rounded-full cursor-pointer hover:bg-gray-300">
								<IconBrandLinkedin size={24} />
							</a>
						</div>
					</div>
				</div>
				<div className="flex justify-center items-center text-xs">
					&copy; Copyright @ 2024. Made by Ronan Kitten.
				</div>
			</footer>
		</>
	);
};

export default Dashboard;
