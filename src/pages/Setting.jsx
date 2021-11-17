import React from 'react'
import AnimationIcons from '../components/animationicon/AnimationIcons'
import './setting.css'
const Setting = () => {
    return (
        <div className='setting'>
<div className='form'>
    <input type='text' id='name' className='form-input' autocomplete="off" />
    <label for='name' className='form__label'> Your Name</label>
    <button> Start</button>
</div>

           <AnimationIcons/>
        </div>
    )
}

export default Setting
