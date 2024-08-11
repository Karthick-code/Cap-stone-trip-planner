import React from 'react';
import Navbar from './navbar/Navbar';
import Container from '@mui/material/Container';
import PersistentDrawerLeft from './Dashboard';




function Layout({ children }) {
    return (
        <>
            {/* <Navbar /> */}
            <PersistentDrawerLeft />
            
            <Container style={{ marginTop: '20px' }}>
                {children}
            </Container>
        </>
    )
}

export default Layout