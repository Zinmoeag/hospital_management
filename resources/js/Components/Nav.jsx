import { Head, Link, useForm } from '@inertiajs/react';

const Nav = ({auth,locale}) => {

    return (
        < >
            <section className="bg-emerald-500 fixed left-0 right-0 shadow-md top-0">
                <div className="flex justify-between items-center px-10 h-[3rem] bg-white">
                    <div className='flex items-center'>
                        <img 
                            className='w-10'
                            src="/image/logo.png" 
                            alt=""
                        />
                        <h3 className="text-2xl uppercase font-bold text-emerald-600">Heaven</h3>
                    </div>

                    <div className='flex gap-4 items-center justify-center'>
                        <div className='flex gap-2'>
                        <Link 
                        href={route('home', { locale: 'en' })}
                        className={`${locale === "en" ? "bg-white border-2 border-blue-200" : "bg-blue-500"} px-5 py-1 `}>
                            en
                        </Link>
                        <Link 
                        href={route('home', { locale: 'my' })}
                        className={`${locale === "my" ? "bg-white border-2 border-blue-200" : "bg-blue-500"} px-5 py-1 `}>
                            my
                        </Link>
                        </div>
                        {auth?.user ? (
                            <div className=' flex gap-2 text-slate-700'>
                                <Link className='hover:text-emerald-800'>
                                    Profile
                                </Link>

                            </div>
                        ): (
                            <div className=' flex gap-2 text-green-700'>
                                <Link
                                href='/en/login'
                                className='hover:text-emerald-800'>
                                    Login
                                </Link>
                                |
                                <Link 
                                href='/register'
                                className='hover:text-emerald-800'>
                                    Register
                                </Link>

                                <a href="/auth/redirect/google">google</a>
                            </div>
                        )}
                    </div>

                </div>

                <div className='bg-gradient-to-r from-white via-blue-300 to-green-500 h-[3rem] flex items-center justify-between relative overflow-hidden'> 
                    <div className='text-slate-700 bg-white flex items-center w-[20rem] h-full left-0 ps-10 skew-x-[15deg]'>
                        <div className='skew-x-[-15deg] text-slate-500'>
                            <h3>
                                call us now +959 852 415 5822
                            </h3>
                        </div>
                    </div>

                    <ul className='text-white  flex gap-4 px-10'>
                        <li>
                            <Link
                            className='hover:text-green-800'
                            href="/appointment"
                            >
                            Appointment
                            </Link>
                        </li>

                        <li>
                            <Link
                            className='hover:text-green-800'
                            href="/appointment"
                            >
                            Doctor
                            </Link>
                        </li>
                    </ul>

                </div>
            </section>            
        </>
    )
}

export default Nav;