import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword, locale, auth}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login', {locale : 'en'}));
    };

    return (
        <GuestLayout
            auth={auth}
            locale={locale}
        >
            <section className='flex items-center justify-center bg-blue-400' style={{height : "calc(100vh - 6rem)",}}>
                <section className='w-[28rem] bg-white/80 shadow-lg px-8 py-14 rounded-lg'>

                    <Head title="Log in" />

                    {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                        </div>

                        <div id='sso-box' className='flex items-center justify-center gap-2 h-[2.5rem] my-4'>
                            <a 
                            id='google' 
                            className='h-full py-2 bg-slate-300 w-full flex items-center justify-center'
                            href="/auth/redirect/google"
                            >
                                <img 
                                src="https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227" 
                                alt="" 
                                className='h-full'
                                />
                            </a>

                            <a 
                            id='github' 
                            className='h-full py-2 bg-slate-600 w-full flex items-center justify-center'
                            href="/auth/redirect/github"
                            >
                                <img 
                                src="https://pic.onlinewebfonts.com/thumbnails/icons_411880.svg" 
                                alt="" 
                                className='h-full'
                                />
                            </a>
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            {canResetPassword && (
                                <Link
                                    href={route('password.request',{locale : locale})}
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Forgot your password?
                                </Link>
                            )}

                            <PrimaryButton className="ml-4" disabled={processing}>
                                Log in
                            </PrimaryButton>
                        </div>
                    </form>
                </section>

            </section>
        </GuestLayout>
    );
}
