import GuestLayout from '../../Layouts/GuestLayout.jsx'
import Hero from './partials/Hero.jsx'

const Home  = ({auth,  heroTranslationFile, locale}) => {

    return (
        <>
            <GuestLayout
                auth={auth}
                locale={locale}
            >
                <Hero 
                translationFile={heroTranslationFile}
                />
            </GuestLayout>
        </>
    )
}  

export default Home;