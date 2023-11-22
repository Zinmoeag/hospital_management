import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {useRef} from 'react';
import { useForm } from '@inertiajs/react';
import FormInput from './Partials/FormInput.jsx'

const DoctorApplicationForm = ({auth,locale}) => {

	const {
		data,
		setData,
		processing,
		errors 
	} = useForm();

	const fileRef = useRef(null);


	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(data.name);
	}

	return (
		<AuthenticatedLayout
            user={auth.user}
            locale ={locale}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{auth.user.name}</h2>}
        >
        	<section className='px-36 py-8'>
        		<form onSubmit={handleSubmit}>
					<h3 className='text-2xl uppercase pb-4 font-bold'>Apply Doctor Form</h3>
					
					<p className='text-lg text-justify'>Please find attached the application PDF form for the doctor position. We kindly request that you fill out the form and submit it via email. Your prompt attention to this matter is greatly appreciated.Upon completion, kindly submit the filled application form via email using the provided contact information. Thank you. </p>

					<div className='py-8'>
						<FormInput
							label="Name"
							name='name'
							type="text"
							value={data.name}
							setData={setData}
						/>
						<FormInput
							label="Degree"
							name='degree'
							type="text"
							value={data.degree}
							setData={setData}
						/>
						<FormInput
							label="Name"
							name='name'
							type="text"
							value={data.name}
							setData={setData}
						/>
						<FormInput
							label="City"
							name='city'
							type="text"
							value={data.city}
							setData={setData}
						/>
						<FormInput
							label="Country"
							name='country'
							type="text"
							value={data.name}
							setData={setData}
						/>
						<FormInput
							label="Name"
							name='name'
							type="text"
							value={data.name}
							setData={setData}
						/>
						<FormInput
							label="Name"
							name='name'
							type="text"
							value={data.name}
							setData={setData}
						/>
						<FormInput
							label="Name"
							name='name'
							type="text"
							value={data.name}
							setData={setData}
						/>
					</div>

					<button 
					type="submit"
					className='bg-slate-700 hover:bg-slate-500 text-white px-8 py-2'
					>
						Send
					</button>
        		</form>
        	</section>
		</AuthenticatedLayout>
	)
}

export default DoctorApplicationForm;