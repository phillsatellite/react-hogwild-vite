import React, {useState} from "react";
import Nav from "./Nav";
import HogForm from "./HogForm";
import HogCard from "./HogCard";
import hogs from "../porkers_data";

function App() {
	const [hogList, setHogList] = useState(hogs);
	const [sortBy, setSortBy] = useState(""); 
	const [showGreased, setShowGreased] = useState(false); 

	//Display hogs based on filter and sorting. If show Greased is true only show greaased hogs otherwise show all 
	const displayedHogs = hogList.filter(hog => showGreased ? hog.greased : true)
		.sort((a,b) => {
			if(sortBy === "name") return a.name.localeCompare(b.name);
			if(sortBy === "weight") return a.weight - b.weight;
			return 0;
		});

	function handleAddHog(newHog) {
		setHogList([...hogList, newHog]);
	}

	return (
		<div className="App">
			<Nav />
			<HogForm onAddHog={handleAddHog}/>

			{/* Filters */}
			<div className="filters">
			<label htmlFor="sort">Sort by:</label>
			<select
				id="sort"
				value={sortBy}
				onChange={e => setSortBy(e.target.value)}
			>
				<option value="">None</option>
				<option value="name">Name</option>
				<option value="weight">Weight</option>
			</select>

			<label htmlFor="Greased" style={{marginLeft: "1rem"}}>Greased Pigs Only?</label>
			<input
				id="Greased"
				type="checkbox"
				checked={showGreased}
				onChange={e => setShowGreased(e.target.checked)}
			/>
			</div>

			{/* Hog Cards */}
			<div className="hogContainer">
			{displayedHogs.map((hog, index) => (
				<HogCard key={hog.name} hog={hog} />
			))}
			</div>
		</div>
	);
}

export default App;
