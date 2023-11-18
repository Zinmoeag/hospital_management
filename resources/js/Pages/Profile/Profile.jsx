import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head , Link } from '@inertiajs/react';

export default function Profile({ auth, locale }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            locale ={locale}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{auth.user.name}</h2>}
        >

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg">
                        <section className="flex">
                            <div className='w-[18rem] bg-white py-8 px-4 rounded-lg'>
                                <div id='profile-pic' className="w-full rounded-full">
                                    <img 
                                    src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
                                    alt="" 
                                    />
                                </div>


                                <ul id="option">
                                    <li className="py-2 px-4">
                                        <Link 
                                        href={route("profile.applyDoctor", {locale: locale})}
                                        className="hover:text-blue-500"
                                        >
                                            Apply Doctor
                                        </Link>
                                    </li>

                                    <li className="py-2 px-4">
                                        <Link 
                                        href="/"
                                        className="hover:text-blue-500"
                                        >
                                            Records
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </section> 
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
