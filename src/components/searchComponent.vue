
<template>
  <div class="input-group">
  <div class="form-outline">
    <vue-google-autocomplete
    class="form-control"
    ref="address"
    id="map form1"
    classname="from-control"
    placeholder="Enter city"
    v-model="data"
    v-on:placechanged="getAddressData"
    types="(cities)"
    >
    </vue-google-autocomplete>
  </div>
</div>
</template>
<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'
export default {
  components:{ VueGoogleAutocomplete },
  emits:['location'],
    data:()=>{
      return{
        address:'',
        data:"",
        lan:"",
        lat:""
      }
    },
    mounted(){
      this.$refs.address.focus()
    },
    methods:{
       getAddressData:async function(addressData,placeResultData,id){
        console.log("inside data")
        this.address=addressData;
        console.log(this.address.latitude);
        this.lat=this.address.latitude
        this.lan=this.address.longitude
        console.log(id)
        this.$emit('location',{lan:this.lan,lat:this.lat})
      }
    }
}
</script>
<style scoped>
  .form-control{
    width:140%;
    margin-left: 55px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>