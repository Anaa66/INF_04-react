import './HeaderLink.jsx';
import HeaderLink from './HeaderLink.jsx';

function HeaderLinks(){
    const [linksData, setLinksData] = [
        ["phone", "phoneIcon", "kontakt"],
        ["home", "homeIcon", "salony"],
        ["account", "accountIcon", "konto"],
        ["shoppingCart", "shoppingCartIcon", "koszyk"]
    ];

    return(
      <div className='container'>
        {linksData.map((link, index) => (
            <HeaderLink imgUrl={link[0]} 
                        imgAlt={link[1]} 
                        txt={link[2]} />
        ))}
    </div>  
    );
};

export default HeaderLinks;