import React from 'react'
import '../../styles/Resume.css';
import SkillIcon from '../SkillIcon';
export default function Resume() {
  return (
    <div className='resume-container'>
      <h3>My Skills</h3>

      <div className='container'>
      <div className='row'>

      <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}} className='icon1 col-xs-6 col-md-3'>
            HTML
      <SkillIcon
      className='icon1'
      name='html'
      img='/images/html.jpg'/>
      </div>

      <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}} className='icon2 col-xs-6 col-md-3'>
            CSS
            <SkillIcon
      name='CSS'
      img='/images/css.png'/>
      </div>

      <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}} className='icon3 col-xs-6 col-md-3'>
            Javascript
            <SkillIcon
      name='Javascript'
      img='/images/js.svg'/>
      </div>
      <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}} className='icon4 col-xs-6 col-md-3'>
            Node
            <SkillIcon
      name='NodeJS'
      img='/images/node.png'/>
      </div>
      <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}} className='icon5 col-xs-6 col-md-3'>
            MongoDB
            <SkillIcon
      name='MongoDB'
      img='/images/mongo.png'/>
            </div>

      <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}} className='icon6 col-xs-6 col-md-3'>
            MySQL
            <SkillIcon
      name='MySQL'
      img='/images/mysql.png'/>
      </div>

      <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}} className='icon7 col-xs-6 col-md-3'>
            React
            <SkillIcon
      name='React'
      img='/images/react.png'/>
      </div>

      <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}} className='icon8 col-xs-6 col-md-3'>
            Git
                  <SkillIcon
      name='Git'
      img='/images/git.png'/>
      </div>
      </div>
      </div>
      <h2>Download my resume <a className='resume-link' href="/resume.pdf" download>here</a></h2>
    </div>
  )
}
