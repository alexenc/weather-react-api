import React from 'react'

const Header = ({mainTitle}) => {
    return ( 
        <nav>
            <div className="nav-wrapper light-blue darken-2" >
                <a href="#!" className="brand-logo">{mainTitle}</a>
            </div>            
        </nav>
     );
}
 
export default Header;