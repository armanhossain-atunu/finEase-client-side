import React from 'react';
import MyContainer from '../Components/MyContainer';
import AccountSummary from '../Components/AccountSummary';

const DashboardHome = () => {
    return (
        <div>
            <div className='text-center'>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-lg font-medium">Welcome to your dashboard!</p>
            <hr />
            </div>
            <MyContainer>
                <AccountSummary></AccountSummary>
            </MyContainer>
        </div>
    );
};

export default DashboardHome;