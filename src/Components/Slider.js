import React from 'react'
import AwesomeSlider  from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

  






function Slider() {
  return (
    <>
      <AwesomeSlider style={{'maxwidth':'100%'}} animation="cubeAnimation">

    <div data-src="https://i.pinimg.com/originals/9f/79/72/9f7972b5f184706372bc0024adcbf03f.jpg"></div>

    <div data-src="https://media.slidesgo.com/storage/18830405/language-arts-subject-for-middle-school-6th-grade-vocabulary-skills1647938767.jpg"></div>

    <div data-src="https://24slides.com/templates/assets/templates-previews/4D8dYpoSU2VvpNde7SD43nA03Fr5sBZVgJi9cHNl.jpg"></div>
    
  </AwesomeSlider>
  </>
  )
}

export default Slider