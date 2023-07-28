
import axios from 'axios'
 const weatherDataMixin = {
    data(){
        return{
            src:"https://openweathermap.org/img/wn/",
            url:"http://localhost:8080/",
            finalSrc:"",
            data:null
        }

    },
    methods: {
        getWeatherData(geoCode){
            const fileFormat = new FormData();
            fileFormat.append('lat',geoCode.lat);
            fileFormat.append('lan',geoCode.lan);
            axios.post("http://localhost:8080/",fileFormat).then(res=>{
            this.data=res
            this.finalSrc=this.src+this.data["data"]["weather"][0]["icon"]+"@2x.png"
            console.log(this.data["data"])
            }).catch(err=>{
            console.log(err)
            })
        }
    },
} 
export default weatherDataMixin