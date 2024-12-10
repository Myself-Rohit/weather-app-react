import axios from "axios";
import { useEffect, useState } from "react";
import Time from "./Time";
import useDescription from "./description";

function App() {
	const [search, setSearch] = useState("london");
	const [data, setData] = useState([]);
	const [description, setDescription] = useState({});
	const [input, setInput] = useState("");

	useEffect(() => {
		const getWeatherData = async () => {
			try {
				await axios
					.get(
						`http://api.weatherapi.com/v1/current.json?key=266a3463236a46f9bc0153539240612&q=${search}&aqi=no`
					)
					.then((response) => response.data)
					.then((data) => {
						setDescription(useDescription(data?.current?.temp_c));
						setData(data);
					});
			} catch {
				setData(null);
			}
		};
		getWeatherData();
	}, [search]);

	const handleChange = (e) => {
		e.preventDefault();
		setSearch(input);
	};

	let d = new Date();
	let date = d.getDate();
	let year = d.getFullYear();
	let month = d.toLocaleString("default", { month: "long" });
	let day = d.toLocaleString("default", { weekday: "long" });

	return (
		<>
			<img
				className="absolute h-screen w-screen -z-50 bg-no-repeat"
				src={description?.bgImage}
			/>

			<div className="flex flex-col items-center justify-center h-screen ">
				<form
					onSubmit={handleChange}
					className="flex items-center bg-white rounded-lg"
				>
					<input
						className="px-2 py-1 rounded-l-lg "
						type="search"
						name="search"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="search place"
					/>
					<button type="submit" className="active:scale-95">
						<img
							className="w-[32px] h-[32px] shrink-0"
							src="https://img.icons8.com/ios-glyphs/2x/google-web-search.png"
						/>
					</button>
				</form>

				{data ? (
					<div className="py-10 mt-5 w-2/3 h-4/5 flex flex-col items-center bg-black bg-opacity-70 rounded-md text-white ">
						<h1 className="font-extrabold text-4xl sm:text-5xl">
							{search && search[0].toUpperCase() + search.substring(1)}
						</h1>
						<p className="font-medium text-sm sm:text-xl  mt-5 mb-5">
							{day}, {month}, {year}, {date}
						</p>

						<Time />
						<span className="my-4 border-t border-white w-full"></span>

						<img className="w-20 h-20" src={data?.current?.condition?.icon} />
						<p>{data?.current?.condition?.text}</p>

						<h1 className="text-3xl font-bold mb-5">
							{data?.current?.temp_c}&deg;C
						</h1>
						<p className="font-bold"></p>
						<p className="text-xl sm:text-2xl flex">
							<div className="flex flex-col items-center">
								<p>{data?.current?.humidity}</p>
								<p>humidity</p>
							</div>
							<span className="mx-3 font-sm text-4xl">|</span>{" "}
							<div className="flex flex-col items-center">
								<p>{data?.current?.wind_kph}km/h</p>
								<p>wind speed</p>
							</div>
						</p>
					</div>
				) : (
					<div className="mt-5 w-2/3 h-4/5 flex justify-center items-center bg-black bg-opacity-70 rounded-md text-white ">
						can't access data for this location {search}
					</div>
				)}
			</div>
		</>
	);
}

export default App;
