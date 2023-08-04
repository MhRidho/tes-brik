import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
        <div className='p-1 border border-red-100 rounded-full'>
          <h1 className='py-56 text-5xl font-bold text-red-600 text-center'>Toko klontong BRIK.ID</h1>
        </div>
      <Footer/>
    </div>
  )
}

export default Home