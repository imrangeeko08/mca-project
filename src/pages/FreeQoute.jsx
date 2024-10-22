import React from 'react'

const Qoute = () => {
  return (
    <>
    <div className='contact-sections'>
        </div>
      <div class="contact-section position-relative">
  <div class="container">
    <h2 class="text-center">GET IN TOUCH</h2>
    <p class="text-center">Contact APL Logistics</p>
    <p class="text-center">For sales inquiry or feedback...</p>

    <div class="contact-form-wrapper">
      <form>
        <div class="form-group mb-3 d-flex  flex-md-row flex-column gap-3">
          <label>Are you an APL Logistics customer?</label>
        <div className='d-flex'>

        <div class="form-check d-flex  form-check-inline">
            <input class="form-check-input w-25" type="radio" name="customer" id="yes" value="yes"/>
            <label class="form-check-label" for="yes">Yes</label>
          </div>
          <div class="form-check d-flex form-check-inline">
            <input class="form-check-input w-25 " type="radio" name="customer" id="no" value="no"/>
            <label class="form-check-label" for="no">No</label>
          </div>
        </div>
          
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="firstName">First Name</label>
            <input type="text" class="form-control" id="firstName" placeholder="First Name"/>
          </div>
          <div class="col-md-6 mb-3">
            <label for="lastName">Last Name</label>
            <input type="text" class="form-control" id="lastName" placeholder="Last Name"/>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="companyName">Company Name</label>
            <input type="text" class="form-control" id="companyName" placeholder="Company Name"/>
          </div>
          <div class="col-md-6 mb-3">
            <label for="jobTitle">Job Title</label>
            <input type="text" class="form-control" id="jobTitle" placeholder="Job Title"/>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="emailAddress">Email Address</label>
            <input type="email" class="form-control" id="emailAddress" placeholder="Email Address"/>
          </div>
          <div class="col-md-6 mb-3">
            <label for="phone">Phone</label>
            <input type="text" class="form-control" id="phone" placeholder="Phone"/>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="location">Location</label>
            <input type="text" class="form-control" id="location" placeholder="Location"/>
          </div>
          <div class="col-md-6 mb-3">
            <label for="city">City</label>
            <input type="text" class="form-control" id="city" placeholder="City"/>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="originCargo">Origin of Cargo</label>
            <input type="text" class="form-control" id="originCargo" placeholder="Origin of Cargo"/>
          </div>
          <div class="col-md-6 mb-3">
            <label for="destinationCargo">Destination of Cargo</label>
            <input type="text" class="form-control" id="destinationCargo" placeholder="Destination of Cargo"/>
          </div>
        </div>

        <div class="form-group mb-3">
          <label for="inquiries">Inquiries</label>
          <textarea class="form-control" id="inquiries" rows="5"></textarea>
        </div>

        <div class="form-group mb-3">
          <label for="source">How did you hear about us?</label>
          <select class="form-control" id="source">
            <option>Please Select</option>
            {/* <!-- Add more options here --> */}
          </select>
        </div>


        <button type="submit" class="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  </div>
</div>

</>  
  )
}

export default Qoute;