import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './components/header/Header.jsx';
import Header from './components/header/Header.jsx';

function App() {
  //nie ma strata bez tremolo
  const stratocasterGit = [
    {
      id: 'e1', 
      title: 'FENDER CUSTOM SHOP JEFF BECK SIGNATURE STRATOCASTER NOS OWT - GITARA ELEKTRYCZNA',
      image: './assets/stratocasters/jeff-beck-signature-stratocaster.png',
      price: 18555.00,
      availability: true,
      color: 'white', 
      fretsNumb: 22,
      tremoloBridge: true,
      brand: "FENDER"
    },
    {
      id: 'e2',
      title: 'ARIA 714-MK2 TQBL - GITARA ELEKTRYCZNA',
      image: './assets/stratocasters/aria-mk2.png',
      price: 1407.00,
      availability: true,
      color: 'blue', 
      fretsNumb: 22,
      tremoloBridge: true,
      brand: "ARIA"
    },
    {
      id: 'e3', 
      title: 'BE JOE ATLANTA GE-288 HSS SB - GITARA ELEKTRYCZNA',
      image: './assets/stratocasters/be-joe-atlanta.png',
      price: 799.00,
      availability: true,
      color: 'black', 
      fretsNumb: 22,
      tremoloBridge: true,
      brand: "BE JOE"
    },
    {
      id: 'e4', 
      title: 'CHARVEL PRO MOD SAN DIMAS 3 HSS FR PLATINUM PEARL - GITARA ELEKTRYCZNA',
      image: './assets/stratocasters/charvel-pro-mod.png',
      price: 3799.00,
      availability: true,
      color: 'white', 
      fretsNumb: 22,
      tremoloBridge: true,
      brand: "CHARVEL"
    },
    {
      id: 'e5', 
      title: 'IBANEZ GRG120QASPBGD - GITARA ELEKTRYCZNA',
      image: './assets/stratocasters/ibanez-grg120.png',
      price: 1299.00,
      availability: true, 
      color: 'blue',
      fretsNumb: 24,
      tremoloBridge: true,
      brand: "IBANEZ"
    }
  ];
  const telecasterGit = [
    {
      id: 'e1', 
      title: 'JET JT-300 CAR S P90 - GITARA ELEKTRYCZNA',
      image: './assets/telecasters/jet-jt-300.png',
      price: 1111.00,
      availability: true, 
      color: 'red', 
      fretsNumb: 22,
      tremoloBridge: false,
      brand: "JET"
    },
    {
      id: 'e2', 
      title: 'SPIRA T-400 MBK HH - GITARA ELEKTRYCZNA',
      image: './assets/telecasters/spira-t-400.png',
      price: 1530.00,
      availability: true, 
      color: 'black', 
      fretsNumb: 24,
      tremoloBridge: false,
      brand: "SPIRA"
    },
    {
      id: 'e3', 
      title: '',
      image: './assets/telecasters/.png',
      price: 0,
      availability: true, 
      color: '', 
      fretsNumb: 0,
      tremoloBridge: true,
      brand: ""
    },
    {
      id: 'e4', 
      title: '',
      image: './assets/telecasters/.png',
      price: 0,
      availability: true, 
      color: '', 
      fretsNumb: 0,
      tremoloBridge: true,
      brand: ""
    },
    {
      id: 'e5', 
      title: '',
      image: './assets/telecasters/.png',
      price: 0,
      availability: true, 
      color: '', 
      fretsNumb: 0,
      tremoloBridge: true,
      brand: ""
    }
  ];
  //czy wielkosc liter w nazwie folderu ma znaczenie?
  /*const lesPaulGit = [
    {
      id: 'e1', 
      title: '',
      image: './assets/telecasters/.png',
      price: ,
      availability: true, 
      color: '', 
      fretsNumb: ,
      tremoloBridge: true,
      brand: ""
    },
    {
      id: 'e2', 
      title: '',
      image: './assets/telecasters/.png',
      price: ,
      availability: true, 
      color: '', 
      fretsNumb: ,
      tremoloBridge: true,
      brand: ""
    },
    {
      id: 'e3', 
      title: '',
      image: './assets/telecasters/.png',
      price: ,
      availability: true, 
      color: '', 
      fretsNumb: ,
      tremoloBridge: true,
      brand: ""
    },
    {
      id: 'e4', 
      title: '',
      image: './assets/telecasters/.png',
      price: ,
      availability: true, 
      color: '', 
      fretsNumb: ,
      tremoloBridge: true,
      brand: ""
    },
    {
      id: 'e5', 
      title: '',
      image: './assets/telecasters/.png',
      price: ,
      availability: true, 
      color: '', 
      fretsNumb: ,
      tremoloBridge: true,
      brand: ""
    }
  ]*/
  const guitarBrands = [
    "FENDER",
    "ARIA",
    "BE JOE", 
    "CHARVEL", 
    "IBANEZ", 
    "JET", 
    "SPIRA", 
    "", 
    ""
  ]

  //dorobic kropki jak jest tekst dluzszy niz iles tam
  return(

    <div className='p-4'>
      <Header/>

      <section className='row'>
        <aside className='col-3'>

        </aside>

        <section className='col'>
          <div className="card w-25">
            <img className='card-img-top pt-3' src={stratocasterGit[0].image} alt={stratocasterGit[0].title}/>
            <div className="container mt-3">
              <div className="row">
                <span className='two-line-truncate card-text'>
                  {stratocasterGit[0].title}
                </span>
              </div>
              <div className='row pt-3 pb-2'>
                <div className="col-8 d-flex align-items-center justify-content-start">
                  <span className=' fw-bold'>{stratocasterGit[0].price} zł</span>
                </div>
                <div className="col">
                  <button className='btn rounded-pill btn-outline-warning' type='button'>
                      <img src="./assets/icons/shoppingCart.png" alt="koszyk" id='cartImg'/>
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

/*
<div className="row">
  <div className="col">
    <p className='fw-bold w-2 text-start m-0'>{stratocasterGit[0].price} zł</p>
  </div>
  <div className="col">
    <button className='btn-icon rounded-pill d-flex align-items-right' type='button'>
      <svg className='bi' width="16" height="16" >

      </svg>
    </button>
  </div>
</div>
*/

export default App
