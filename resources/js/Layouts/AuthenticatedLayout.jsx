import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

import AdminLayout from './AdminLayout.jsx'

export default function Authenticated({ user, header, children, locale }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    if(user.role === 'admin'){
        return(
            <AdminLayout 
                user = {user}
                locale = {locale}
                header={header}
            />
        )
    }
}
