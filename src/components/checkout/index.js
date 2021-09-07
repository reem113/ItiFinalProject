import axios from 'axios';
import { React, useState } from 'react'
import { useHistory } from 'react-router';

export default function Checkout() {

  const [street, setStreet] = useState();
  const [apartment, setApartment] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [zip, setZipCode] = useState();
  const history = useHistory();
  const _userId = localStorage.getItem("ID");


  const submitAddress = (event) => {
    const URL = `http://localhost:8000/api/v1/addresses`;
    let address = { _userId, apartment, street, city, country, zip }
    axios.post(URL, address)
      .then(() => {
        setApartment('');
        setStreet('');
        setCity('');
        setCountry('');
        setZipCode('');
        history.push("/placeOrder");

      })
      .catch(error => { console.log(error); })
  }


  return (
    <>
      <form className="container" method="POST" onSubmit={(e) => submitAddress(e)}>

        <div className="mb-3">
          <label className="form-label" for="address">
            Address:
          </label>
          <input
            type="text"
            name="street"
            className="form-control"
            value={street}
            onChange={(event) => { setStreet(event.target.value); }}
            placeholder="Street Address"
            id="street"
          />
          <input
            type="number"
            name="apartment"
            className="form-control mt-3"
            value={apartment}
            onChange={(event) => { setApartment(event.target.value); }}
            placeholder="Apartment,Building No."
            id="apartment"
          />
        </div>

        <div className="mb-3">
          <label className="form-label" for="city">
            City:
          </label>
          <input
            type="text"
            name="city"
            className="form-control"
            value={city}
            onChange={(event) => { setCity(event.target.value); }}
            placeholder="city"
            id="city"
          />
        </div>

        <div className="mb-3">
          <label className="form-label" for="country">
            Country
          </label>
          <input
            type="text"
            name="country"
            className="form-control"
            value={country}
            onChange={(event) => { setCountry(event.target.value); }}
            placeholder="country"
            id="country"
          />
        </div>

        <div className="mb-3">
          <label className="form-label" for="zip">
            Zip Code:
          </label>
          <input
            type="text"
            name="zip"
            className="form-control"
            value={zip}
            onChange={(event) => { setZipCode(event.target.value); }}
            placeholder="12345"
            id="zip"
          />
        </div>

        <div className="d-flex justify-content-center m-2">
          <input type="submit" value="Proceed to Buy" className="btn btn-main btn-hover btn-200" />
        </div>
      </form>
    </>
  )
}

