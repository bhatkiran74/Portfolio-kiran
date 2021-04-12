import React from 'react'
import Typed from 'react-typed';
const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Kiransing Bandusing Bhat</h1>
                <Typed
                    className="typed-text"
                    strings={[
                        'I Am Designer',
                        'I Am Developer',
                        'I Am Fullstack Developer']}
                    typeSpeed={40}
                    backSpeed={50}

                    loop >

                </Typed>
                <a className="btn-main-offer" href="#">Contact Us</a>
            </div>

        </div>
    )
}

export default Header
