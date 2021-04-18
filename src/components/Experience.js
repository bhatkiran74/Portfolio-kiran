import React from 'react'

function Experience() {
    return (
        <div className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Education</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2017-2021</h3>
                        <p><b>Government College Of Engineering, Jalgaon</b></p>
                        <p>Bachelor Of Technology [ Computer Science & Engineering ]</p>
                        <p>7<sup>th</sup> Semister GCPA - 6.93 </p>

                    </div>
                </div>
                {/*  */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2014-2016</h3>
                        <p><b>Mahatma Basweshwar Mahavidhyalaya, Latur</b></p>
                        <p>HSC - 62 % </p>
                    </div>
                </div>
                {/*  */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2013-2014</h3>
                        <p><b>Dnyaneshwar Highschool , Latur</b></p>
                        <p>SSC - 90.80%</p>
                    </div>
                </div>
                {/*  */}

            </div>

        </div>
    )
}

export default Experience
