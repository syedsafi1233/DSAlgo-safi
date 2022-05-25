import React from 'react';
import { Data } from './Data';
import { EmiItem } from './EmiItem';
import { Productitem } from './Productitem';

export const Home = () => {
    return (
        <div className='home'>
            <div className='prod'>
            <Productitem/>
            </div>
            <div className='prod'>
            <EmiItem/>
            </div>
            <div className='prod'>
            <Data/>
            </div>
        </div>
    );
};

