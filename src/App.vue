<template>
  <div id="AppMain">
    <div>
    <searchComponet @location="getAddressData"></searchComponet>
    <weatherDataDisplay :data="data" :src="finalSrc"></weatherDataDisplay>
    </div>
  </div>
</template>
<script>
import weatherDataDisplay from './components/weatherDataDisplay'
import weatherDataMixin from './mixin/weatherDataMixin'
import searchComponet from './components/searchComponent'
export default {
  components:{searchComponet,weatherDataDisplay},
  mixins:[weatherDataMixin],
    methods:{
       getAddressData:function(lan){
        this.getWeatherData(lan)
        console.log(lan)
      }
    }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:40px;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

}
#AppMain{
    display: flex;
  justify-content: center;
  }
</style>
