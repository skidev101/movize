import React from 'react'

const Footer = () => {
  return (
      <footer className="footer">
         <div className="container">
         <p className="text-center">
            &copy; {new Date().getFullYear()} Movize. All rights reserved.
         </p>
         </div>
      </footer>
  )
}

export default Footer