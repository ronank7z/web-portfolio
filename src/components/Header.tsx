import {
	IconBrandGithub,
	IconBrandLinkedin,
	IconMenu2,
} from "@tabler/icons-react";
import { Button } from "../components/ui/button";

const Header = () => {
	return (
		<header className="flex justify-between items-center my-8">
			<h1 className="font-bold text-2xl border-b-2 border-black pb-1.5">
				&lt;RK-Dev /&gt;
			</h1>
			<div className="sm:hidden">
				<Button>
					<IconMenu2 />
				</Button>
			</div>
			<div className="hidden sm:block">
				<nav className="flex items-center gap-3 text-lg">
					<a className="font-bold p-2 border-b-2 border-gray-600 cursor-pointer hover:border-gray-300">
						Home
					</a>
					<a className="p-2 border-b-2 border-transparent cursor-pointer hover:border-gray-300">
						Project
					</a>
					<a className="p-2 border-b-2 border-transparent cursor-pointer hover:border-gray-300">
						Skill
					</a>
					<a className="p-2 border-b-2 border-transparent cursor-pointer hover:border-gray-300">
						About Me
					</a>
					<div className="flex gap-2">
						<a
							href="https://www.github.com/ronank7z/"
							target="_blank"
							className="border border-gray-600 p-2 rounded-full cursor-pointer hover:bg-gray-300">
							<IconBrandGithub size={32} />
						</a>
						<a
							href="https://www.linkedin.com/in/ronan-kitten/"
							target="_blank"
							className="border border-gray-600 p-2 rounded-full cursor-pointer hover:bg-gray-300">
							<IconBrandLinkedin size={32} />
						</a>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
