<template>
  <div id="AppMain">
    <div id="mainDiv">
      <h1 id="tag" class = "shadow-lg p-3 mb-5 rounded">Open Weather</h1>
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
  #tag{
    width:300px;
    margin-left:100px;
    background-color:rgba(245, 245, 245, 0.763) ;
  }
#mainDiv{
  width:500px;
  height:400px;
  border: 2px solid;
  border-radius: 30px;
  background-color: rgba(245, 245, 245, 0.763);
}
</style>
