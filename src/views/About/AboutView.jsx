import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./AboutView.scss"
import {MdSchool as SchoolIcon, MdWork as WorkIcon} from "react-icons/md"
import { MediumText, SmallText } from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const AboutView = () => {
  const navigate= useNavigate();
  const Data = [
    {id:1,
      date : "2016-2018",
    type:"school",
    header:"High School",
    header2:"Rabin Tel Mond",
    content:"Graduated high school with full Bagrut."
    },
    {id:2,
      date:"2018-2019",
      type:"school",
      header:"Styling course",
      header2:"Shenkar",
      content:"Successfully completed a comprehensive styling course, mastering industrial styling,\n editorial styling, branding, and production techniques for impactful visual storytelling."
    },
    {
      id:3,
      date:"2019-2021",
      type:"work",
      header:"Visual Commercial Stylist",
      header2:"Bershka",
      content:"Contributed to visual brand messaging by styling impactful commercial visuals for diverse campaigns and target audiences."
    },
    {
      id:4,
      date:"2021-2022",
      type:"school",
      header:"Full-Stack Web Development Course",
      header2:"Sela college",
      content:"Successfully completed an intensive full-stack course, equipping me with expertise in front-end and back-end development for comprehensive web application development."
    },
    {
      id:5,
      date:"2022-2023",
      type:"school",
      header:"Yahalom program - Extra Course",
      header2:"Sela College",
      content:"Enhanced my expertise through an intensive 3-month professional course and training, immersing myself in advanced full-stack development techniques to proficiently build scalable web applications."
    }
  ];
    
  
  return (
    <div>
        <SmallText>Hey there! I'm a programmer with a creative twist,
        combining my love for technology with my artistic side.
        <br></br>
         When I'm not coding, you'll find me dog dancing and working with animals,gaming, or drawing.
         <br></br>
        As an autodidact who enjoys learning, I'm always up for new challenges. 
        <br></br>
        <br></br>
        Here you can view some of my work and school history:
        </SmallText>
        <VerticalTimeline lineColor='#3E108A' className='vt'>
          {Data.map((data) => {
            return(
                <VerticalTimelineElement
                key={data.id}
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#3E108A', color: '#FF337E' , fontFamily:'Work Sans', fontWeight:'600',boxShadow:'none' }} 
                contentArrowStyle={{ borderRight: '7px solid #3E108A' , borderBottom: '7px solid #3E108A' }}
                date={data.date}
                iconStyle={{ background: '#FF337E', color: '#3E108A' , boxShadow: '0 0 0 4px #3E108A, inset 0 2px 0 #3E108A, 0 3px 0 4px #3E108A'}}
                icon={data.type === 'school' ? <SchoolIcon /> : <WorkIcon />}>
                  <h3>
                  {data.header}
                  </h3>
                  <h4>
                    {data.header2}
                  </h4>
                  <p>{data.content}</p>
                </VerticalTimelineElement>
          )
          })}
        </VerticalTimeline>
        <div className='center-button'>
        <Button onClick={()=> navigate("/skills")}>Go to skills</Button>
        </div>
        <div>
          <br/>
          <br/>
          <br/>
        </div>
        
    </div>

  )
  }
export default AboutView