import React from 'react'
import '../../styles/Resume.css';
import SkillIcon from '../SkillIcon';
export default function Resume() {
  return (
    <div>
      <h1>Download my <a href="/GabrielWarnerRESUME.pdf" download>resume</a></h1>
      <h3>My Skills</h3>
      <div className='skills'>
      <SkillIcon
      name='html'
      img='/images/html.jpg'/>
            <SkillIcon
      name='CSS'
      img='/images/css.png'/>
            <SkillIcon
      name='Javascript'
      img='/images/js.svg'/>
            <SkillIcon
      name='NodeJS'
      img='/images/node.png'/>
            <SkillIcon
      name='MongoDB'
      img='/images/mongo.png'/>
            <SkillIcon
      name='MySQL'
      img='/images/mysql.png'/>
            <SkillIcon
      name='React'
      img='/images/react.png'/>
                  <SkillIcon
      name='Git'
      img='/images/git.png'/>
      </div>
    </div>
  )
}
