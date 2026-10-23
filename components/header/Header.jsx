import './SearchBar.jsx';
import SearchBar from './SearchBar.jsx';

function Header(){
    return(
        <header className='row h-25'>
            <img src="" alt="logo sklepu" className='col-4' />
            <div className="container col">
            <div className="row">
                <div className="col">
                    <SearchBar/>
                </div>
                <div className="col-5">
                <div className='container'>
                    <div className='col-2 d-flex flex-wrap justify-content-center'>
                    <img src="./assets/icons/phone.png" alt="phoneIcon" />
                    <span className='fw-bold'>kontakt</span>
                    </div>
                    <div className='col-2 d-flex flex-wrap justify-content-center'>
                    <img src="./assets/icons/home.png" alt="phoneIcon" />
                    <span className='fw-bold'>salony</span>
                    </div>
                    <div className='col-2 d-flex flex-wrap justify-content-center'>
                    <img src="./assets/icons/account.png" alt="phoneIcon" />
                    <span className='fw-bold'>konto</span>
                    </div>
                    <div className='col-2 d-flex flex-wrap justify-content-center'>
                    <img src="./assets/icons/shoppingCart.png" alt="phoneIcon" />
                    <span className='fw-bold'>koszyk</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </header>
    );
}

export default Header;