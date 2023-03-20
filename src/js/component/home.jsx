import React, { useState } from "react";
import "../../styles/index.css"

//create your first component
const Home = () => {
	const [lightUp, setLightUp] = useState("danger")
	const handleClick = (color) => {
		setLightUp(color);
	}
	return (
		<div className="flex-column d-flex align-items-center">
			<div className="tube bg-dark"></div>
			<div className="base flex-column gap-3 rounded d-flex align-items-center p-4 bg-dark">
				<div className={`light bg-danger ${lightUp == "danger" && "lightOn"}`} onClick={() => { handleClick("danger") }}></div>
				<div className={`light bg-warning ${lightUp == "warning" && "lightOn"}`} onClick={() => { handleClick("warning") }}></div>
				<div className={`light bg-success ${lightUp == "success" && "lightOn"}`} onClick={() => { handleClick("success") }}></div>
			</div>
			<div className="btn btn-dark mt-5 fs-2" onClick={() => {
				if (lightUp == "danger") { setLightUp("warning") }
				else if (lightUp == "warning") { setLightUp("success") }
				else if (lightUp == "success") { setLightUp("danger") }
			}}>Cambiar color</div>
		</div>
	);
};

export default Home;
