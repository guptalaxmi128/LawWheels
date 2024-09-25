import React from 'react';
import Navbar from '../navbar/Navbar';
import Service from './Service';
import Footer from '../footer/Footer';
import ContactForm from '../contact/ContactForm';
import Choose from '../../shared/Choose';
import Settlement from './Settlement';
import ChildSection from './ChildSection';

const Process = () => {
    return <div>
        <Navbar />
        <div className='py-20'>
        <Service />
        <Choose />
        <div className='py-5'>
        <ChildSection />
        </div>
        <Settlement />
        <ContactForm />
        </div>
        <Footer />
    </div>
}



export default Process;