// ES modules
import ReactDOMServer from 'react-dom/server';


import { message, Dropdown, Spin,Skeleton } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { renderToString } from 'react-dom/server'
import Constants from '../constants';
// parts[i] = renderToString(<Skeleton key={i}>{parts[i]}</Skeleton>)

class AntdSupport {
  constructor(props = {}) {
    this.state = {
      ...props,
      Skeleton:{
        ...props?.Skeleton,
        active:true,
        loading:true,
        block: true,
        shape:"default",
        size: "default",
        avatar:false,
        paragraph:{
          ...props?.Skeleton?.paragraph,
          rows:4
        }
      },
      Loading_spinner:{
        className: "w-full h-full flex items-center justify-center",
        style:{
          fontSize: "60px",
          opacity: 1,
          position:"relative",
          zIndex:5,
        }
      },

      data: {

        anime: [],
      }
    }

  }

  /**
   * @define - Message Antd
   */
  message(type = 'success', msg = ''){
    switch (type){
      case Constants.ANTD.MESSAGE.SUCCESS:
        return message.success(msg)
      case Constants.ANTD.MESSAGE.ERROR :
        return message.error(msg)
      case Constants.ANTD.MESSAGE.WARNING :
        return message.warning(msg)
      default:
        return message.success(msg)
    }
  }



  Skeleton(selectorAll = null){
    if (selectorAll === null) return false;
    let el = selectorAll.split('-')[selectorAll.split('-').length - 1]

    try{
      switch (el){
        case "list":
          try{
            document.querySelectorAll(`${selectorAll}`).forEach((elem)=> {
              let times
              try{
                times = parseInt(elem.getAttribute('data-time'))
              }catch(err){
                times = .5
              }


              let elemSkeleton = ReactDOMServer.renderToStaticMarkup(Skeleton({...this.state.Skeleton}))
              elem.prepend(Emkalab.Utils.htmlToElement(elemSkeleton))
              setTimeout(function(){
                elem.firstElementChild.remove()
                elem.lastElementChild.classList.remove('hidden')
              },times)
            })

          }catch(err){
            this.message('error',err.message)
          }
          break;
        case "input":
        case "image":
          try{



            // this.state.Skeleton = {
            //   ...this.state.Skeleton,
            //   avatar: true,
            //   shape: "circle",
            //   size: "large"
            // }
            // console.log(document.querySelectorAll(`${selectorAll}`),this.state.Skeleton);
            document.querySelectorAll(`${selectorAll}`).forEach((elem)=> {
              let times
              try{
                times = parseInt(elem.getAttribute('data-time'))
              }catch(err){
                times = .5
              }
              // let elemSkeleton = ReactDOMServer.renderToStaticMarkup(LoadingOutlined.render())
              this.LoadingSpinner(elem)
              // elem.prepend(Emkalab.Utils.htmlToElement(elemSkeleton))
              setTimeout(function(){
                elem.firstElementChild.remove()
                elem.lastElementChild.classList.remove('hidden')
              },times)
            })

          }catch(err){
            this.message('error',err.message)
          }
          break;
        case "button":
        default:
      }
    }catch(err){
      this.message('error',err.message)
    }
  }

  LoadingSpinner(parentElement = null){
    if (parentElement === null) return null
    try{
      let div = document.createElement('div')
      div.className = this.state.Loading_spinner.className
      let htmlEl = Emkalab.Utils.htmlToElement(ReactDOMServer.renderToStaticMarkup(LoadingOutlined.render()))
      Emkalab.Utils.AddStylesObject(htmlEl,this.state.Loading_spinner.style)
      div.append(htmlEl)
      parentElement.prepend(div)
    }catch(err){
      this.message('error',err.message)
    }

  }


  static DropdownMenu(menuText='', onClick = ()=> {}, parentElement = null){

    const Skeletonss = ReactDOMServer.renderToStaticMarkup(Skeleton({active:true,}))


    // parentElement.append(Emkalab.Utils.htmlToElement())
    parentElement.append(Emkalab.Utils.htmlToElement(Skeletonss))
  }
}

export default AntdSupport
