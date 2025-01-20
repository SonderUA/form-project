import React, { useState } from "react";

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

	function handleFormSubmit(event: React.FormEvent) {
		event.preventDefault();
		return;
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
				/>
				<p>How many people are there in your team?</p>
				{/* Add buttons selection */}
				<label htmlFor="country" className="mt-6">
					Country
				</label>
				<select
					name="country"
					id="country"
					className="mt-2 py-3 px-2 border-neutral-400 border-[1px] border-opacity-50 rounded-lg shadow-sm focus:outline-none"
				>
					<option value="">Select value</option>
				</select>
				<div className="flex justify-between items-center mt-8">
					<div className="flex items-center gap-2">
						{/* Add custom checkbox */}
						<input type="checkbox" name="" id="" />
						<label htmlFor="">
							I'm okay with sharing this with Baserow team.
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
