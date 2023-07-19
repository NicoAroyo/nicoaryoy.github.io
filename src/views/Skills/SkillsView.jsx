import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { MediumText, SmallText } from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import "./SkillsView.scss"
import { FaGithub } from "react-icons/fa";
const SkillsView = () => {

    {
        return (
            <>
            <div>
                <MediumText>Languages:</MediumText>
                <SmallText>C#, JS, TS, Bash.</SmallText>
                <MediumText>Backend:</MediumText>
                <SmallText>ASP.net, Node.js, Entity Framework, MySql, MongoDB, mongoose
                , MongoDbDriver,
                <br></br> MsSql/sqlServer, Nodemailer, Express,       
                Joi, cors, Jwt, Design patterns,
                <br></br>
                Git, Github, Azure DevOps, RestfulAPIs, Docker, LINQ.
                </SmallText>
                <MediumText>Frontend</MediumText>
                <SmallText>React, React-native, Redux, HTML, Css/Scss, Vite, WPF. </SmallText>
            </div>
               <div>
                <Carousel className='carousel'>
                    <div>
                        <MediumText>Testy Project</MediumText>
                        <SmallText>Made with Node + React
                        </SmallText>
                        <a>
                        <Button>Frontend
                            <br></br>
                            <FaGithub/>
                        </Button>
                        </a>
                      
                        <a>
                         <Button>Backend
                            <br></br>
                            <FaGithub/>
                         </Button>
                        </a>
                      
                       

                    </div>
                    <div>
                        <MediumText>Bunnies (social media) Project</MediumText>
                        <SmallText>Made with Node + React</SmallText>
                        <a href='https://github.com/NicoAroyo/BunniesFront'>
                        <Button>Frontend 
                            <br></br>
                        <FaGithub/>
                        </Button>
                        
                        </a>
                        <a href='https://github.com/NicoAroyo/BunniesBack'>
                        <Button>Backend <br></br>
                        <FaGithub/>
                        </Button>
                        </a>
                      

                    </div>
                </Carousel>
             </div>
            </>
         

          )
    }
  
}

export default SkillsView