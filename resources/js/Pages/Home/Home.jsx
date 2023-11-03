import Nav from '../../Components/Nav.jsx'
import Hero from './partials/Hero.jsx'

const Home  = ({auth}) => {
    return (
        <>
            <Nav 
                auth={auth}
            />
            <Hero />
            <h3>Home</h3>
        </>
    )
}  

export default Home;