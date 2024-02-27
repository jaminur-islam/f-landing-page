import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';


interface INavBarProps {
}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
    return <nav className="flex justify-between items-center py-8">
        <div>
            <Link href={"/"} className="text-3xl font-bold text-white">
                <Image
                    src={"/logo.png"}
                    alt="logo"
                    width={150}
                    height={100}
                />

            </Link>
        </div>
        <div>
            <Link className='span' href="/mission">
                Mission
            </Link>
        </div>
    </nav>
};

export default NavBar;
