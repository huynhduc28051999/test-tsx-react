import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='d-sm-flex justify-content-center justify-content-sm-between'>
        <span className='text-muted d-block text-center text-sm-left d-sm-inline-block'>
          Copyright © bootstrapdash.com 2020
        </span>
        <span className='float-none float-sm-right d-block mt-1 mt-sm-0 text-center'>
          Free &nbsp;
          <a href='https://www.bootstrapdash.com/'>
            Bootstrap dashboard templates
          </a>
          &nbsp; from Bootstrapdash.com
        </span>
      </div>
    </footer>
  )
}

export default Footer
