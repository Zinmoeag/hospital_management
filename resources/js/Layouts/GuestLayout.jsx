import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import Nav from '../Components/Nav.jsx'

export default function Guest({ children,auth }) {
    return (
        <div className="">
            <Nav 
                auth={auth}
            />
            <div className="">
                {children}
            </div>
        </div>
    );
}
