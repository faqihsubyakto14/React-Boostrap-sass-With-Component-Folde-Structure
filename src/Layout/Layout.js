import React from 'react'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout