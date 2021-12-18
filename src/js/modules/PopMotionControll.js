import * as popmotion from 'popmotion'
class PopMotionControll {
  constructor(props) {
    this.state = {
      ...props,
      type: "bounceOut",
      selectorAll: "#emk-popmotion-default",
      style: {
        transform: `scale(0)`,
        transition: '0.5s'
      }
    }
    this.defaultAnimation()
  }

  defaultAnimation(){
    try{
      let parentEL = document.querySelectorAll(this.state.selectorAll)
      console.log({...popmotion},this);
      // console.log();
      parentEL.forEach((element)=> {
        popmotion.animate({
          from: 0,
          to: 100,
          onUpdate: latest => {
            this.state.style ={
              ...this.state.style,
              transform: `scale(${latest / 100})`
            }
            // console.log();
            element.classList.remove(`scale-0`)
            element.classList.add(`scale-${Math.floor(latest)}`)
            // Emkalab.Utils.AddStylesObject(element,this.state.style)
            // element.style.transform = `scale(${(latest / 100)}`
          }
        })
      })

      console.log({...popmotion},this);
    }catch(err){
      console.error(err.message);
      Emkalab.Utils.message('error',err.message)
    }
  }
}

export default PopMotionControll
