import React from 'react';

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
      };
    return (
        <footer className='py-3' style={{backgroundColor:'#2f4d6e', color:'white'}}>
            <p className='mt-3'>Copyright &copy; {getCurrentYear()}-{getCurrentYear() + 2} All Rights Reserved by Imran Hossen </p>
        </footer>
    );
};

export default Footer;