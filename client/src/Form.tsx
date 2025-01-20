import React, { useState } from "react";
import { countries } from "countries-list";
import { GrFormCheckmark } from "react-icons/gr";

type FormData = {
	role: string;
	range: string;
	country: string;
	agreement: boolean;
};

const Form: React.FC = () => {
	// A hook to store form input
	const [form, setForm] = useState<FormData>({
		role: "",
		range: "",
		country: "",
		agreement: false,
	});
	const ranges = ["0 - 10", "11 - 50", "51 - 200", "201 - 500"];

	const countriesList = Object.entries(countries).map(([code, details]) => ({
		code,
		...details,
	}));

	function handleFormSubmit(event: React.FormEvent) {
		event.preventDefault();
		return;
	}

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { value } = event.target;
		setForm((prevForm) => ({
			...prevForm,
			role: value,
		}));
	}

	function handleRangeChange(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		const text = event.currentTarget.textContent;
		if (text && ranges.includes(text)) {
			setForm((prevForm) => ({
				...prevForm,
				range: text,
			}));
		}
	}

	function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
		const { value } = event.target;
		const countryExists = countriesList.filter(
			(country) => country.name === value
		);
		if (countryExists) {
			setForm((prevForm) => ({
				...prevForm,
				country: value,
			}));
		}
	}

	function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { checked } = event.target;
		setForm((prevForm) => ({ ...prevForm, agreement: checked }));
	}

	return (
		<div className="flex flex-col w-full max-w-md my-6 p-4">
			<h2 className="text-2xl font-medium tracking-wide my-4">
				Tell us a bit more
			</h2>
			<form onSubmit={handleFormSubmit} className="flex flex-col">
				<label htmlFor="role" className="mt-6">
					Role or job title
				</label>
				<input
					type="text"
					id="role"
					name="role"
					placeholder="Enter role or job title"
					className="mt-2 py-3 px-4 border-neutral-400 border-[1px] border-opacity-50 rounded-lg shadow-sm focus:outline-none"
					autoComplete="off"
					value={form.role}
					onChange={handleInputChange}
					required
				/>
				<p className="mt-6">How many people are there in your team?</p>
				<div className="flex w-full gap-2 mt-2 flex-wrap">
					{ranges.map((range) => (
						<button
							key={range}
							className={`border-2 px-4 py-3 rounded-lg ${
								range === form.range
									? "bg-gray-100 border-blue-700"
									: "hover:bg-gray-100 hover:border-gray-200"
							}`}
							onClick={handleRangeChange}
						>
							{range}
						</button>
					))}
				</div>
				<label htmlFor="country" className="mt-6">
					Country
				</label>
				<select
					name="country"
					id="country"
					className="mt-2 py-3 px-2 border-neutral-400 border-[1px] border-opacity-50 rounded-lg shadow-sm focus:outline-none"
					defaultValue={""}
					onChange={handleSelectChange}
				>
					<option value="" disabled>
						Select value
					</option>
					{countriesList.map((country) => (
						<option
							key={country.code}
							value={country.name}
							className="text-gray-400"
						>
							{country.name}
						</option>
					))}
				</select>
				<div className="flex justify-between items-center mt-10">
					<div className="flex items-center">
						<label
							htmlFor="agreement"
							className="flex gap-2 items-center cursor-pointer"
						>
							<input
								type="checkbox"
								name="agreement"
								id="agreement"
								className="opacity-0 cursor-pointer absolute"
								checked={form.agreement}
								onChange={handleCheckboxChange}
								required
							/>
							<div
								className={`flex items-center flex-shrink-0 justify-center w-5 h-5 border-neutral-400 border-[1px] rounded-md border-opacity-50 ${
									form.agreement
										? "bg-blue-700 opacity-85 border-blue-800"
										: ""
								}`}
							>
								{form.agreement ? (
									<GrFormCheckmark className="text-white" />
								) : (
									<></>
								)}
							</div>
							I'm okay with sharing this with the Baserow team.
						</label>
					</div>
					{/* Add info icon */}
				</div>
				<div className="text-center mt-20">
					<button
						type="submit"
						className="w-full bg-blue-700 opacity-85 text-white py-3 rounded-lg"
					>
						Continue
					</button>
					<p className="mt-5 text-gray-500">
						<a href="/">Skip for now</a>
					</p>
				</div>
			</form>
		</div>
	);
};

export default Form;
