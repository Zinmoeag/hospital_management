const FormInput = ({label, name, type, value, setData}) => {
	return (
		<div className = 'w-fit flex flex-row items-center justify-center py-2'>
		 	<label htmlFor={name} className='w-[8rem]'>{label}</label>
			<input
			type={type}
			value={value}
			onChange={e => setData(name, e.target.value)}
			className='w-[20rem]'
			/>
		</div>
	)
}

export default FormInput;