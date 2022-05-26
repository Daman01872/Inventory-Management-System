import  SignInOutContainer from './SignInOutContainer';
import  Home from '../components/Home';
import  './HomeUI.css';

const HomeUI = () => {
    return(
        <>    
            <div className='main'>
                    <Home/>
                    <SignInOutContainer/>
            </div>
        </>
    );
};

export default HomeUI;
