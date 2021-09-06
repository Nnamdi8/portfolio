import React from 'react'
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import design from '../img/design.png';
import intelligence from '../img/intelligence.jpg';
import gamedev from '../img/gamedev.jpeg';
import ServicesSection from '../Components/ServicesSection';

function AboutPage() {
    return (
        <div className="AboutPage">
           <Title title={"About Me"} span={"About Me"}/>
           <ImageSection/>
           <Title title={"My Skills"} span={"My Skills"}/>
          <div className="skillsContainer">
                <SkillsSection skill={'JavaScript'} progress={'60%'} width={'60%'}/>
                <SkillsSection skill={'TypeScript'} progress={'30%'} width={'30%'}/>
                <SkillsSection skill={'HTML & CSS'} progress={'70%'} width={'70%'}/>
                <SkillsSection skill={'React.Js'} progress={'80%'} width={'80%'}/>
                <SkillsSection skill={'Ruby'} progress={'90%'} width={'90%'}/>
                <SkillsSection skill={'Technical'} progress={'80%'} width={'40%'}/>
                <SkillsSection skill={'Python'} progress={'40%'} width={'5%'}/>
                <SkillsSection skill={'Java'} progress={'35%'} width={'5%'}/>
          </div>
            <Title title={'Services'} span={'Services'} />
          <div className="services-container">
              <ServicesSection image={design} title={'web development'}
               text={' Lorem ipsum dolor sit amet repudiandae tempore.'}/>

              <ServicesSection image={intelligence} title={'Artificial Intelligence'}
               text={' Lorem ipsum dolor sit amet repudiandae tempore.'}/>

              <ServicesSection image={gamedev} title={'Game development'}
               text={' Lorem ipsum dolor sit amet repudiandae tempore.'}/>

               
              
          </div>
        </div>
    )
}

export default AboutPage;
