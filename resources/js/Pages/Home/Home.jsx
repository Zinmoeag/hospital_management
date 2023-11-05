import GuestLayout from '../../Layouts/GuestLayout.jsx'
import Hero from './partials/Hero.jsx'

const Home  = ({auth}) => {
    return (
        <>
            <GuestLayout
                auth={auth}
            >
                <Hero />
                <h3>Home</h3>
            </GuestLayout>
        </>
    )
}  

export default Home;