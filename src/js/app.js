
import '../scss/app.scss';
import '../assets/less/light-theme.less';
// import "../../node_modules/aos/dist/aos.css";

import Utils from './utils';
import AntdSupport from './modules/AntdSupport';
import PopMotionControll from './modules/PopMotionControll';
import FetchController from './modules/FetchController';
import AOSController from './modules/AOSController'
window.Emkalab = {
  React: import('react'),
  AOS: AOSController,
  Utils: Utils,
  PopMotion: PopMotionControll,
  antd: AntdSupport,
  _fetch:{
    baseURL :"https://localhost:8000",
    render:FetchController,
  }
}



document.getElementById('btn-header-profiles').addEventListener('click', ()=> {
  new Emkalab.antd().message('success','Clicked Boskuuu')
})

window.addEventListener('load', ()=> {
  new Emkalab.antd({}).Skeleton('#emk-skeleton-list')
  new Emkalab.antd({}).Skeleton('#emk-skeleton-image')
  // new Emkalab.PopMotion({})
  new Emkalab.AOS()
})

/* Demo JS */
import './demo.js';

