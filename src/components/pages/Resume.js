import React from 'react'
import '../../styles/Resume.css';
import SkillIcon from '../SkillIcon';
export default function Resume() {
  return (
    <div>
      <h1>Download my <a href="/GabrielWarnerRESUME.pdf" download>resume</a></h1>
      <h3>My Skills</h3>
      <div className='skills'>

      <div className='icon1'>
      <SkillIcon
      className='icon1'
      name='html'
      img='/images/html.jpg'/>
      </div>
      <div className='icon2'>
            <SkillIcon
      name='CSS'
      img='/images/css.png'/>
      </div>

      <div className='icon3'>
            <SkillIcon
      name='Javascript'
      img='/images/js.svg'/>
      </div>
      <div className='icon4'>

            <SkillIcon
      name='NodeJS'
      img='/images/node.png'/>
      </div>
      <div className='icon5'>
            
            <SkillIcon
      name='MongoDB'
      img='/images/mongo.png'/>
            </div>

      <div className='icon6'>
            <SkillIcon
      name='MySQL'
      img='/images/mysql.png'/>
      </div>

      <div className='icon7'>
            <SkillIcon
      name='React'
      img='/images/react.png'/>
      </div>

      <div className='icon8'>
                  <SkillIcon
      name='Git'
      img='/images/git.png'/>
      </div>
      </div>
    </div>
  )
}
