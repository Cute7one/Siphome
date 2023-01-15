import Intro from './components/Intro';
import Features from './components/Features'
import Logo from 'assets/images/logo.svg';
import pict2 from 'assets/images/pict2.png';

const Home = () => {
    return (
        <>
            <Intro />
            <Features />
            <img src={Logo} />
        </>
    )
}

export default Home;
