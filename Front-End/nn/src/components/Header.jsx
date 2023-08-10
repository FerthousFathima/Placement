import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state ={

        }
    }
    render() {
        return (
            <div>
                
                <header classname ="header">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                      <div className="navbar-brand">College Management App</div>
                      
                      <ul class ="menu">
                      <li class ="item"><a href="\colleges">Home</a></li>
                        <li class ="item"><a href="\add-colleges/">Add Colleges</a></li>
                        
                      </ul>
                      

                    </nav>
                  
                </header>
                
            </div>
        );
    }
}

export default Header;