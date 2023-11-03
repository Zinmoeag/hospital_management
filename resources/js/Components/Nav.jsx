import { Head, Link, useForm } from '@inertiajs/react';

const Nav = ({auth}) => {
    return (
        < >
            <section className="bg-emerald-500 h-[6rem]">
                <div className="flex justify-between items-center px-10 h-full">
                    <div>
                        <h3 className="text-2xl uppercase font-bold text-white">Heaven</h3>
                    </div>

                    {auth.user ? (
                        <div className='text-white flex gap-2'>
                            <Link className='hover:text-emerald-800'>
                                Profile
                            </Link>

                        </div>
                    ): (
                        <div className='text-white flex gap-2'>
                            <Link className='hover:text-emerald-800'>
                                Login
                            </Link>
                            |
                            <Link className='hover:text-emerald-800'>
                                Register
                            </Link>
                        </div>
                    )}
                    
                </div>
            </section>            
        </>
    )
}

export default Nav;