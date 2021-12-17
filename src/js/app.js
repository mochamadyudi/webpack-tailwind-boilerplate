
import '../scss/app.scss';
import '../assets/less/light-theme.less';
import { Spin } from 'antd';

import Utils from './utils';
import AntdSupport from './modules/AntdSupport';



window.Emkalab = {
  React: import('react'),
  Utils: Utils,
  antd: AntdSupport
}
console.log(AntdSupport);


document.getElementById('btn-header-profiles').addEventListener('click', ()=> {
  AntdSupport.message('error','Clicked Boskuuu')

})

new Emkalab.antd({}).Skeleton(document.querySelector('.root'),'first')






/* Your JS Code goes here */

/* Demo JS */
import './demo.js';

// console.log(document.getElementsByTagName("BODY")[0].lastElementChild);
// document.getElementById('')
//

