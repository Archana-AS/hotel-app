import React from 'react'
import Navbar from './Navbar'

const Searchhotel = () => {
  return (
    <div>
        <Navbar/>
  <div class="container">
    <div class="row">
      <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <div class="row g-3">

          <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" class="form-label">Landmark</label>
            <input type="text" name="" id="" class="form-control"/>
          </div>

          <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" class="form-label">Address</label>
            <input type="text" name="" id="" class="form-control"/>
          </div>

          <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button class="btn btn-primary w-100">Search Hotel nearby🔍</button>
          </div>

        </div>


      </div>
    </div>
  </div>


    </div>
  )
}

export default Searchhotel