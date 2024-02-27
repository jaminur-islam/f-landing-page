import * as React from 'react';

interface IHeroFormProps {
}

const HeroForm: React.FunctionComponent<IHeroFormProps> = (props) => {
    return <form>
        <input
            placeholder='Enter your email'
            className='bg-primary px-5 py-2 w-full md:w-[397px] outline-none rounded-lg' />
        <button className='text-[16px] bg-secondary w-full md:w-auto  px-5 py-2 rounded-lg mt-3.5 md:mt-0 md:ml-2'>Join the waiting list</button>
    </form>
};

export default HeroForm;
