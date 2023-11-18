import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const DoctorApplicationForm = () => {
	return (
		<AuthenticatedLayout
            user={auth.user}
            locale ={locale}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{auth.user.name}</h2>}
        >
			<h3>hey</h3>
		</AuthenticatedLayout>
	)
}

export default DoctorApplicationForm;