import React from 'react';
import './styles.css';

const Header = ({title, children}) => (
  <div className="Header">
      <div className="ListTop">
          <ul className="ListTopMenu">
              <div className="ListTopInformation">
                {title}
              </div>
              <div class="ListTopCredential">                  
                {children}
              </div>                
          </ul>   
      </div> 
  </div>

);

export default Header;