import React from 'react'

const About = () => {

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col">
                    <div className="section-title text-center mb-4 pb-2">
                        <h4 className="title mb-3">How It Works</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">A great plateform to buy, sell and products without any agent or commisions.</p>
                    </div>
                </div>
            </div>

            <div className="row g-4 mt-0">
                <div className="col-md-4">
                    <div className="position-relative features text-center mx-lg-4 px-md-1">
                        <div className="feature-icon position-relative overflow-hidden d-flex justify-content-center">
                            <div className="position-absolute top-50 start-50 translate-middle">
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-muted mt-3 mb-0">If the distribution of letters and words  is random, the reader will not be distracted from making</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
