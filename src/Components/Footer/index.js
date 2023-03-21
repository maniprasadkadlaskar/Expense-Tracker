import React from "react"

const Footer = () => {
    return (
        // Page-footer 
        <footer className='content-container text-white bg-black'>
            <div className='content-header'>
                <span>Expense Tracker</span>
            </div>

            <div className='text-content'>
                <span>Expense Tracker is human expenses tracking web application. This application helps user to track his day today
                    expenses. This web application is designed and developed by Maniprasad kadlaskar.
                </span>
            </div>
            
            <div className='content-header'>
                <span>Find me</span>
            </div>

            <div className='contact-container'>
                <a className='contact' href={'https://www.instagram.com/maniprasad_kadlaskar'}>
                    <i className="bi bi-instagram"></i>
                </a>
                <a className='contact' href={'https://twitter.com/ManiprasadKadl1'}>
                    <i className="bi bi-twitter"></i>
                </a>
                <a className='contact' href={'https://www.linkedin.com/in/maniprasad-kadlaskar-81368b1b5/'}>
                    <i className="bi bi-linkedin"></i>
                </a>
            </div>

            <div className='copyright text-content'>
                <span>copyright &copy; 2022 Expense Tracker - All Rights Reserved</span>
            </div>

        </footer>
    )
}

export default Footer