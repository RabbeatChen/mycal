<template>
 <div class="relation-border">
   <div class='nav'>
     <router-link to="/cal"><img src="src/assets/cal.png"></router-link>
     <router-link to="/rel"><img src="src/assets/rel.png"></router-link>
     <router-link to="/choice"><img src="src/assets/lucky.png"></router-link>
     <router-link to="/touzi"><img src="src/assets/touzi.png"></router-link>
 </div>
      <div class="row group">
        <div class="row">
            <input class="relation-display"id="input"  v-model="current"></input>
        </div>
        <div class="row choice">
          <div class="field">
            我的性别：
            <label for="male">
              <input id="male" type="radio" name="sex" value='1' v-model="sex" >
              <span>男</span>
            </label>
            <label for="female">
              <input id="female" type="radio" name="sex" v-model="sex" value='0'>
              <span>女</span>
            </label>
          </div>
          <div class="field">
            称呼方式：
            <label for="call">
              <input id="call" type="radio" name="reverse" value="false" v-model="reverse" >
              <span>我称呼对方</span>
            </label>
            <label for="called">
              <input id="called" type="radio" name="reverse" v-model="reverse" value="true">
              <span>对方称呼我</span>
            </label>
          </div>
        </div>
      </div>
          <div class="relation-items">
          <div class="relation-row">
          <div class="relation-item" @click="press">爸爸</div>
          <div class="relation-item" @click="press">妈妈</div>
          <div class="relation-item" @click="press">老公</div>
          <div class="relation-item" @click="press">老婆</div>
          </div>

           <div class="relation-row">
          <div class="relation-item " @click="press">儿子</div>
          <div class="relation-item " @click="press">女儿</div>
          <div class="relation-item " @click="press">哥哥</div>
          <div class="relation-item" @click="press">弟弟</div>
          </div>

          <div class="relation-row">
          <div class="relation-item " @click="press">姐姐</div>
          <div class="relation-item " @click="press">妹妹</div>
          <div class="relation-item num" @click="press"><=</div>
          <div class="relation-item num" @click="press">C</div>
          </div>

          <div class="relation-row last">
          <div class="relation-item" @click="press">=</div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'Relation',
  data () {
    return {
     current :'',
     sex:1,
     reverse: "false",
     ifWrong: ''
    }
  },
  mounted () {
  },

  methods:{
      press: function (event) {
        let me = this
        let key = event.target.textContent
        if(key == 'C') {me.current = ''}

        else if(key == '<='){
          if(me.current.length == 2) me.current = ''
          else   me.current = me.current.substring(0, me.current.length - 3)
        }
        else if(key == '=')
        {
          let sex = parseInt(me.sex);
          let reverse;
          if(me.reverse == 'false')  reverse = false;
          else reverse = true;

          let option = {text: me.current, sex: sex, reverse: reverse, type: 'default'}
          console.log(option)
          let result = relationship(option)
          if (result.length) me.current = result;
          else
          {
            me.current = '无法得到结果，请检查是否正确输入'
            me.ifWrong = true;
          }
        }
        else{
          if(me.ifWrong) {
            me.current = '';
            me.ifWrong = false;
          }

          if(me.current !== '')
          {
            me.current += '的'
            me.current += key
          }else{
            me.current += key
          }
        }

      }
  }
}
</script>

<style>
/*vue*/
[v-cloak] { display: none; }
.nav {
  padding-left: 40px;
  padding-top: 10px;
}
.nav img {
  width: 40px;
  height:40px;
  margin-right: 30px;
}
.choice {
  padding-top: 5%;
  font-size: 20px;
  margin-bottom:10%;
  padding-left:5%;
  text-align: left;
  color: white;
}

 .relation-display{
  text-align:center;
  border: 0.15rem solid #b9b4b4;
  background-color: #f5f8f8;
  margin:1rem;
  /*width: 24rem;*/
  height: 12rem;
  width: 92.3%;
  font-size: 2rem;
  /*height:18.4%;*/
  -webkit-border-radius: 0.4rem;
  -moz-border-radius: 0.4rem;
  -ms-border-radius: 0.4rem;
  -o-border-radius: 0.4rem;
  border-radius: 0.4rem;:
  -webkit-box-shadow: 1rem 1rem 0.5rem #b55858;
  box-shadow: 0.1rem 0.1rem 0.5rem #b55858;
}


 .relation-formula{
  /*border: 1px solid red;*/
  width: 100%;
  height: 42.9%;
  text-align: right;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  color: #ce3b3b;
  text-overflow: ellipsis;
  white-space:nowrap;
  overflow:hidden;
}

 .relation-result{
  /*border: 1px solid blue;*/
  width: 100%;
  height: 57.1%;
  text-align: right;
  box-sizing: border-box;
  padding: 1.5rem 1rem;
  color: #2A363B;
  text-overflow: ellipsis;
  white-space:nowrap;
  overflow:hidden;
}

  .relation-items{
  /*border: 1px solid black;*/
  margin:3rem 1rem;
  text-align: left;
  width: 92.3%;
  height: auto;
}

  .relation-items .relation-row
{
  margin-bottom: 2.3%;
  width: 100%
}

 .relation-items .relation-item{
   border: 0.1rem solid rgba(166, 98, 98, 0.74);
  width: 20%;
  height: 15%;
  display: inline-block;
  text-align: center;
  line-height: 4rem;
  margin-right: 3%;
  color: white;
  cursor: pointer;
  -webkit-border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;
  -ms-border-radius: 0.5rem;
  -o-border-radius: 0.5rem;
  border-radius: 10%;
  background-color: rgba(244, 135, 135, 0.78);
  -webkit-box-shadow: 0.1rem 0.1rem 0.3rem rgb(85, 65, 65);
  box-shadow: 0.1rem 0.1rem 0.3rem rgb(85, 65, 65);
  transition: all 0.1s;
  -webkit-transition: all 0.1s;

}
 .relation-items .num {
  background-color: #bbb;
 }

  .relation-items .relation-item:hover{
  color: #f1f5f7;
  -webkit-box-shadow: 0.3rem 0.3rem 0.5rem #b55858;
  box-shadow: 0.3rem 0.3rem 0.5rem #b55858;

}

  .relation-items .relation-item:active{
  transform: translate(0.05rem,0.05rem);
  -moz-transform: translate(0.05rem,0.05rem);
    -webkit-transform: translate(0.05rem,0.05rem);

}



 .relation-border .last  .relation-item:nth-child(odd){
  width:95%;
  background-color: rgba(244, 135, 135, 0.78);
}

 .relation-border .relation-row .relation-item:nth-child(4),
 .relation-border .last .relation-item:nth-child(1){
  margin-right: 0;

}


</style>
