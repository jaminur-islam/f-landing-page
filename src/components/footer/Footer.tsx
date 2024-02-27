import Link from 'next/link';
import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    return <div className='mt-10 py-4'>
        <hr className="w-full text-white my-4"></hr>

        <div className="flex justify-between items-center container text-white">
            <div>
                <span className="span">HelloWorld, Inc. </span>
            </div>
            <div className='span'>
                <Link href="/#">
                    Privacy
                </Link>
                <Link className='ml-6' href="/#">
                    Terms&Conditions
                </Link>

            </div>
        </div>
    </div>
};

export default Footer;
