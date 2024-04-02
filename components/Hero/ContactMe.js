import React from "react";

import { FaLinkedin, FaGithub, } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";

const ContactMe = () => {
    return (
        <div className='mx-8 px-8 relative border-blue-700 border rounded md:px-16 pb-4 pt-10 mt-6'>
        <h3 className='text-white bg-blue-700    absolute py-2 px-6 top-0 -mt-5 text-2xl font-bold uppercase'>Entre em contato comigo</h3>
        <p className='text-center'>
            <a href="https://www.linkedin.com/in/" target="_blank"><FaLinkedin className='text-6xl md:text-7xl inline-block mr-6' /></a>
            <a href="https://github.com/" target="_blank"><FaGithub className='text-6xl md:text-7xl inline-block mr-6' /></a>
            <a href="mailto:@gmail.com?subject=Vamos trabalhar juntos?" target="_blank" ><SiGmail className='text-6xl md:text-7xl inline-block mr-6' /></a>
            <a href="https://api.whatsapp.com/send?phone=5585996106094&text=Vamos trabalhar juntos?" target="_blank"><IoLogoWhatsapp className='text-6xl md:text-7xl inline-block mr-6' /></a>
        </p>
    </div>
    )
} 

export default ContactMe;