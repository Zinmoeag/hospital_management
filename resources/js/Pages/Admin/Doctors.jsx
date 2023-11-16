import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Doctors({ auth, locale }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            locale ={locale}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div id="btn-group" className="justify-end items-center flex py-4 px-4">
                            <button className='bg-white hover:bg-slate-500 hover:text-white border-[0.01rem] border-slate-500 py-1 px-4 rounded-md text-sm  text-slate-600 overflow-hidden'>
                                Request
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}