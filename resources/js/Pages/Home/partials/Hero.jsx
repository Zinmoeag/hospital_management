import { Head, Link, useForm } from '@inertiajs/react';

const Hero = ({translationFile}) => {

    console.log(translationFile)
    return(
        <>
            <section id="hero">
                <div className="h-[35rem] bg-gradient-to-r from-blue-100 to-blue-200 flex items-center px-20 justify-between pt-[6rem]">
                    <div className="flex flex-col justify-center w-[50rem] flex-none px-10">
                        <h3 className="text-[7rem] uppercase font-bold text-emerald-500 mb-4">{translationFile.hero_title}</h3>
                        <p className="text-xl text-slate-600">{translationFile.hero_text} </p>
                        <Link
                        className='mt-10 text-lg bg-emerald-400 hover:bg-emerald-600 hover:text-white w-fit px-10 py-2 rounded-tr-full rounded-bl-full text-emerald-900' 
                        >
                           {translationFile.hero_action}
                        </Link>
                    </div>

                    <div className='flex flex-1 items-center justify-center'>
                        <img 
                            className='w-[80%]'
                            src="/image/logo.png" 
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </>
    )
}


export default Hero;