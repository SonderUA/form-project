type FormSubmitProps = {
	text: string;
	className: string;
};

const FormSubmit: React.FC<FormSubmitProps> = ({ text, className }) => {
	return (
		<div className={`text-center ${className}`}>
			<button
				type="submit"
				className="w-full bg-blue-700 opacity-85 text-white py-3 rounded-lg"
			>
				{text}
			</button>
			<p className="mt-5 text-gray-500">
				<a href="/">Skip for now</a>
			</p>
		</div>
	);
};

export default FormSubmit;
