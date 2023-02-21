import React from 'react'
import "./Information.css";
const Information = () => {
  return (
    <section className="information">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="row row-gap-4">
              <div className="col-lg-6 col-12">
                <div className="row gap-0 row-gap-4">
                  <div className='col-lg-12 position-relative card-information'>
                    <img src="/images/Information1.png" className="img-responsive w-100 rounded-4" alt="" />
                  </div>
                  <div className='col-lg-12'>
                    <img src="/images/Information3.png" className="w-100 rounded-4" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <img src="/images/Information2.png" className="w-100 h-100 rounded-4 img-responsive" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <div className="information-info">
              <span className="note">
                <p>New For You</p>
              </span>
              <div className="Intro-info">
                <h1 className='Intro-info__title'>
                  enjoy your vacation
                  with a new experience
                </h1>
                <p className="Intro-info__desc">
                  Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s
                </p>
              </div>
              <div className="information-company d-flex">
                <div className="item item-1">
                  <span className="number">560+</span>
                  <p className="desc">Destination</p>
                </div>
                <div className="item item-2">
                  <span className="number">120+</span>
                  <p className="desc">Luxury Hotel</p>
                </div>
                <div className="item item-3">
                  <span className="number">360K</span>
                  <p className="desc">Happy tourist</p>
                </div>
              </div>
              <div className="info-btn">
                <button type="button" class="btn btn-primary">Get Started</button>
                <button type="button" class="btn btn-transparent">View More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Information