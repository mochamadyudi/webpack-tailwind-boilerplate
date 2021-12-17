// ES modules
import ReactDOMServer from 'react-dom/server';


import { message, Dropdown, Spin,Skeleton } from 'antd';
import { renderToString } from 'react-dom/server'
import Constants from '../constants';
// parts[i] = renderToString(<Skeleton key={i}>{parts[i]}</Skeleton>)

class AntdSupport {
  constructor(props) {
    this.state = {
      ...props,
      Skeleton:{
        ...props?.Skeleton,
        active:true,
        loading:true,
        paragraph:{
          rows:4
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

  Skeleton(parentElement = null,childType="first",rows=4){
    if (parentElement === null) return false;
    const element = ReactDOMServer.renderToStaticMarkup(Skeleton({...this.state.Skeleton}))
    switch (childType){
      case "first":
        parentElement.prepend(Emkalab.Utils.htmlToElement(element))
        break;
      case "last":
        parentElement.append(Emkalab.Utils.htmlToElement(element))
        break;
      default:
        parentElement.append(Emkalab.Utils.htmlToElement(element))

    }
  }

  static DropdownMenu(menuText='', onClick = ()=> {}, parentElement = null){

    const Skeletonss = ReactDOMServer.renderToStaticMarkup(Skeleton({active:true,}))


    // parentElement.append(Emkalab.Utils.htmlToElement())
    parentElement.append(Emkalab.Utils.htmlToElement(Skeletonss))
  }
}

export default AntdSupport
