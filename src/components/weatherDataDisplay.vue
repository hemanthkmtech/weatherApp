<template>
    <div id="wrapperDiv" class = "shadow-lg p-3 mb-5 rounded">
    <div v-if="data" id="div1" style="float:left">
        <div id="info">
        <small id="date">{{getDate}}</small>
        <h3><strong>{{data['data']['city']}} , {{data['data']['country']}} </strong></h3><br>
        </div>
        <div  style="float:left">
        <img :src="src"/>
    </div>
        <div  style="float:left">
        <h3>{{data["data"]['temp'].toFixed(1)}} C</h3>
    </div>
    
</div>
    <div v-if="data"  id="div2" style=";float:left">
        <div>
        <strong><small>Feels like {{data["data"]['temp'].toFixed(1)}} , {{data["data"]["weather"][0][0]["main"]}} , {{data['data']['weather'][0][0]['description']}} </small></strong>
        </div>
        <small>Humidity : <strong>{{data["data"]["humidity"]}}%</strong></small><br>
        <small>Pressure : <strong>{{data["data"]["pressure"]/100}}/mph</strong></small><br>
        <small>Visibility : <strong>{{data["data"]["visibility"]}}/km</strong></small><br>
        <small>Wind Speed : <strong>{{data["data"]["wind_speed"]}}/ms</strong></small><br>
    </div>
    
</div>
</template>
<script>
export default{
    props:{
        data:null,
        src:null
    },
    data(){
        return {
            date:null
        }
    },
    computed:{
        getDate:function(){
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
            ];
            let date=new Date();
            let day = date.getDate()
            let month=monthNames[date.getMonth()]
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            let dateValue =month+' : '+ day +' , '+ hours + ':' + minutes + ' ' + ampm;
            return dateValue
        }
    }
}
</script>
<style scoped>
#wrapperDiv{
    width: 100%;
    height: 100%;
}
#date{
    color:rgba(255, 87, 25, 0.925)
}
#info{
    padding-left: 0px;
}
#div2{
    border-left: 2px solid rgba(255, 83, 21, 0.52);
    
}
</style>
