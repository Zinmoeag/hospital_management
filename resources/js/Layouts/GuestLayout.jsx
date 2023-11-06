import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import Nav from '../Components/Nav.jsx'

export default function Guest({ children,auth,locale }) {
    return (
        <div className="">
            <Nav 
                auth={auth}
                locale={locale}
            />
            <div className="">
                {children}
            </div>
        </div>
    );
}
