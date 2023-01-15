import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import FirstFloor from '../components/common/Firstfloor';
import SecondFloor from '../components/common/Secondfloor';

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    
    
    return (
        <div id="layout">
            <Header />
            <FirstFloor />
            <SecondFloor />
            <Footer />
        </div>
    )
}

export default MainLayout;
