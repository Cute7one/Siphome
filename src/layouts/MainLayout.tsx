import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    
    
    return (
        <div id="layout">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout;
