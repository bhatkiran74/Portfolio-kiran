import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faAd } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'


const Services = () => {
    return (
        <div className="services">

            <div className="container">
                <h1 className="py-5">Services</h1>
                <div className="row">
                    <div className="col-md-3 col-sm-3">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faGlobe} size="2x" />
                            </div>
                            <h3>Web Development</h3>
                            <p>All about project development</p>
                        </div>

                    </div>
                    {/*  */}
                    {/* 2 */}
                    <div className="col-md-3 col-sm-3">
                        <div className="box">
                            <div className="circle">

                                <FontAwesomeIcon icon={faDesktop} className="icon" size="2x" />
                            </div>
                            <h3>UX/UI Design</h3>
                            <p>All about project development</p>
                        </div>

                    </div>
                    {/*  */}
                    <div className="col-md-3 col-sm-3">
                        <div className="box">
                            <div className="circle">

                                <FontAwesomeIcon icon={faMobileAlt} className="icon" size="2x" />
                            </div>
                            <h3>App Development</h3>
                            <p>All about project development</p>
                        </div>

                    </div>
                    {/*  */}
                    <div className="col-md-3 col-sm-3">
                        <div className="box">

                            <div className="circle">
                                <FontAwesomeIcon icon={faAd} className="icon" size="2x" />
                            </div>

                            <h3>Digital Marketing</h3>
                            <p>All about project development</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services
