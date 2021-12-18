import axios from 'axios'
class FetchController {
  constructor(props) {
    this.state = {
      ...props,
      baseOnURL:false,
      url:'',
      method:'get'|| 'post' || 'put' || "delete",
      data: {},
      headers: {},
      callback: (values)=> {},
      onError: (error)=> {}
    }
    this.index()
  }

  index(){
    try{
      if(this.state.baseOnURL){
        switch (this.state.method){
          case "get":
            this._AxiosDefault().get(this.state.url)
              .then((res)=> {
                this.state.callback(res)
              })
              .catch((error)=>{
                this.state.onError(error)
              })
            break;
          case "post":
            this._AxiosDefault().post(this.state.url,{...this.state.data},{...this.state.headers})
              .then((res)=> {
                this.state.callback(res)
              })
              .catch((error)=>{
                this.state.onError(error)
              })
            break;
          case "put":
            this._AxiosDefault().put(this.state.url,{...this.state.data},{...this.state.headers})
              .then((res)=> {
                this.state.callback(res)
              })
              .catch((error)=>{
                this.state.onError(error)
              })
            break;
          case "delete":
            this._AxiosDefault().delete(this.state.url,{...this.state.headers})
              .then((res)=> {
                this.state.callback(res)
              })
              .catch((error)=>{
                this.state.onError(error)
              })
            break;
          default:
            this._AxiosDefault().get(this.state.url)
              .then((res)=> {
                this.state.callback(res)
              })
              .catch((error)=>{
                this.state.onError(error)
              })


        }
      }else{
        switch (this.state.method){
          case "get":
            axios.get(this.state.url,{...this.state.headers})
              .then((res)=> {
                this.state.callback(res)
              })
              .catch((error)=>{
                this.state.onError(error)
              })
            break;
          case "post":
            axios.post(this.state.url,{...this.state.data},{...this.state.headers})
              .then((res)=> {
                this.state.callback(res)
              })
              .catch((error)=>{
                this.state.onError(error)
              })
            break;
          case "put":
            this._AxiosDefault().put(this.state.url,{...this.state.data},{...this.state.headers})
              .then((res)=> {
                this.state.callback(res)
              })
              .catch((error)=>{
                this.state.onError(error)
              })
            break;
          case "delete":
            this._AxiosDefault().delete(this.state.url,{...this.state.headers})
              .then((res)=> {
                this.state.callback(res)
              })
              .catch((error)=>{
                this.state.onError(error)
              })
            break;
          default:
            this._AxiosDefault().get(this.state.url)
              .then((res)=> {
                this.state.callback(res)
              })
              .catch((error)=>{
                this.state.onError(error)
              })


        }
      }
    }catch(err){
      Emkalab.Utils.message('error', err.message)
    }

  }

  _AxiosDefault(){
    let BASEURL = Emkalab._fetch.baseURL


    let headers = {}
    const axiosInstance = axios.create({
      baseURL:BASEURL,
      headers:{
        ...headers,
        // 'Authorization': `Bearer ${Utils.GetCookies('token',false)}`
      },
    })
    axiosInstance.isCancel = axios.isCancel;

    axiosInstance.interceptors.response.use(
      (res)=>

        new Promise((resolve,reject)=>{
          resolve(res)
        }),

      (err)=>{
        if (!err.response){
          return new Promise((resolve,reject)=> {
            reject(err)
          })
        }
        if  (err.response.status === 401){
          console.warn(err.response.status)
          // console.log(err.response.status)
        }else{
          return new Promise((resolve,reject)=> {
            reject(err)
          })
        }
      }

    )

    return axiosInstance

  }

}


export default FetchController
