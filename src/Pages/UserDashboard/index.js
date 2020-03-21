import React from 'react';
import IntroSection from './IntroSection'
import { userPageStyles } from './styles';
import CountriesTable from './CountriesTable';

const UserDashboard = () => {
    const classes = userPageStyles();

    return (
        <div className={classes.pageContainer}>
            <IntroSection />

            <CountriesTable />
        </div>
    )
}

export default UserDashboard