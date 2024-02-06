import "./ChainSearch.css";
import { ImSearch } from "react-icons/im";
import CustomButtons from "../CustomButtons";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function ChainSearch({ addNewData, chains }) {
	const [searchParams, setSearchParams] = useSearchParams("");
	const [inputData, setInputData] = useState(searchParams.get("search"));

	useEffect(() => {
		inputData && setSearchParams({ search: inputData });

		if (inputData) {
			const newMap = Object.entries(chains).filter((key) =>
				key[1]?.name.toLowerCase().includes(inputData.toLowerCase())
			);
			addNewData(newMap);
		}
	}, [inputData]);

	const createFilter = (event) => {};

	return (
		<div className="ChainSearch">
			<div className="ChainSearch__Search">
				<p>Search Networks</p>
				<input
					value={inputData ? inputData : ""}
					onChange={(e) => setInputData(e.target.value)}
					// onChange={createFilter}
					type="text"
					placeholder="ETH, Fantom, ..."
				/>
				<button className="imSearch">
					<ImSearch />
				</button>
			</div>
			<div className="ChainSearch_DownDIV">
				<div className="ChainSearch__Checkbox">
					<input type="checkbox" /> Include Testnets{" "}
				</div>
				<CustomButtons buttonClass="ChainSearch__Button" buttonType={1} />
			</div>
		</div>
	);
}

export default ChainSearch;
