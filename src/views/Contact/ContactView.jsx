import React, { useState } from 'react';
import { Input, BiggerInput } from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineDownload } from 'react-icons/hi';
import cv from '../../assets/cv.pdf';
import { ContactService } from '../../services/ContactService.js';
import { BigText, MediumText, SmallText } from '../../components/Text/Text';

const ContactView = () => {
  const service = new ContactService();
  const [contact, setContact] = useState({});

  const validate = () => {
    if (!contact.firstName || !contact.lastName || !contact.email || !contact.content) {
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) {
      alert('Invalid Inputs');
      return;
    }
    try {
      const response = await service.postAsync({ ...contact });
      console.log(response);
      console.log("b");
      if (response.ok) {
        alert('Thank you for contacting!');
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
    console.log(error);
      alert(error.message);
    }
  };

  return (
    <>
      <div>
        <div>
        <MediumText>
            Contact me via 
            <br></br>
            any of these platforms:

        </MediumText>
        </div>
        <br/>
        <div>
            <a href="https://mail.google.com/mail/u/0/?fs=1&to=nico.aroyo%40gmail.com&su=RE%3A+Job+inquiry&body=Hi+Nico&tf=cm">
                <Button>
                    <HiOutlineMail /> Email: nico.aroyo@gmail.com
                </Button>
            </a>
        </div>
        <br/>
        <div>
            <a href="https://wa.me/+972545540493?text=urlencodedtext">
                <Button>
                    <FaWhatsapp /> Whatsapp: +972545540493
                </Button>
            </a>
        </div>
        <br/>
        <div>
            <a href="https://www.linkedin.com/in/nico-aroyo-a4b4ab218">
            <Button>
                <FaLinkedin /> Linkedin
            </Button>
            </a> </div>
        <br/>
        <div>
            <a href="https://github.com/NicoAroyo">
          <Button>
            <FaGithub /> Github
          </Button>
            </a>
        </div>
        <br/>
        <div>
            <a href={cv}>
                <Button>
                    <HiOutlineDownload /> Download CV
                </Button>
            </a>
        </div>
        <br></br>
        <div>
            <br/>
            <br/>
        </div>
    
      </div>
     
    </>
  );
};

export default ContactView;




