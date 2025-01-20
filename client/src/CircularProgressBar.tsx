import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBar: React.FC = () => {
	return (
		<div className="w-8 text-green-500">
			<CircularProgressbar
				value={25}
				strokeWidth={12}
				styles={buildStyles({
					pathColor: "rgb(34, 197, 94)",
				})}
			/>
		</div>
	);
};

export default CircularProgressBar;
