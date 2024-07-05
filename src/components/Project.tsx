import { useState, useEffect } from "react";
import { Button } from "./ui/button";

interface dataProps {
	name: string;
	stack: string;
	img: string;
	desc: string;
	link: string;
}

const Project = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const res = await fetch("./projects.json");
			const jsonData = await res.json();
			setData(jsonData);
		};

		getData();
	}, []);

	console.log({ data });

	return (
		<>
			{data &&
				data.map((proj: dataProps) => (
					<div className="border mb-4 p-4">
						<div className="p-2">
							<img src={proj.img} className="object-cover" />
						</div>
						<div className="p-2">
							<p>{proj.stack}</p>
						</div>
						<div className="p-2">
							<h3 className="mb-2 font-bold">{proj.name}</h3>
							<p className="mb-2">{proj.desc}</p>
							<a href={proj.link} target="_blank">
								<Button>Go to site</Button>
							</a>
						</div>
					</div>
				))}
		</>
	);
};

export default Project;
