<template>
 <div class="touzi-border">
   <div class='nav'>
     <router-link to="/cal"><img src="src/assets/cal.png"></router-link>
     <router-link to="/rel"><img src="src/assets/rel.png"></router-link>
     <router-link to="/choice"><img src="src/assets/lucky.png"></router-link>
     <router-link to="/touzi"><img src="src/assets/touzi.png"></router-link>
 </div>
      <div class="row group">
      </div>

          <div class="touzi-items touzi-row last">
          <div class="touzi-item" @click="touzi">摇就完事了</div>
          </div>
          <div class="row touzi">

                <img :src="src1" alt="" >
                <img :src="src2" alt="" >
                <img :src="src3" alt="" >
                <img :src="src4" alt="" >
                <img :src="src5" alt="" >

          </div>
        </div>
</template>

<script>
export default {
  name: 'touzi',
  data () {
    return {
     src1: "",
     src2: "",
     src3: "",
     src4: "",
     src5: "",
     current :'',
     newTodoText: '',
    todos: [
      {
        id: 1,
        title: '您可以单击删除掉这些选项',
      },
      {
        id: 2,
        title: '我们会随机帮你选择您的决定',
      }
    ],
    nextTodoId: 3
    }
  },
  mounted () {
    this.touzi();
  },

  methods:{
    touzi: function () {
      let num = Math.floor((Math.random()*6)) + 1;
      this.src1 = 'src/assets/' + num +'.gif';
      num = Math.floor((Math.random()*6)) + 1;
      this.src2 = 'src/assets/' + num +'.gif';
      num = Math.floor((Math.random()*6)) + 1;
      this.src3 = 'src/assets/' + num +'.gif';
      num = Math.floor((Math.random()*6)) + 1;
      this.src4 = 'src/assets/' + num +'.gif';
      num = Math.floor((Math.random()*6)) + 1;
      this.src5 = 'src/assets/' + num +'.gif';

    },
    remove: function (index) {
      this.todos.splice(index, 1)
    },
    addNewTodo: function () {
      if(this.newTodoText){
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      }
    },
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
          let option = {text: me.current, sex: me.sex, reverse: me.reverse, type: 'default'}
          let result = touziship(option)
          console.log(result)
          if (result.length) me.current = result;
          else me.current = '无法得到结果，请检查是否正确输入'
        }
        else{
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
 .touzi {
   padding-top: 5%;
   border: 0.15rem solid #b9b4b4;
   margin: 1rem;
   width: 92.3%;
   height: 50%;
   background-color: #f5f8f8;
   border-radius: 0.4rem;
 }
 .touzi img {
   width:100px;
   height: 100px;
 }
 .touzi-display{
  text-align:center;
  border: 0.15rem solid #b9b4b4;
  background-color: #f5f8f8;
  margin:1rem;
  height: 7rem;
  width: 92.3%;
  font-size: 2rem;
  -webkit-border-radius: 0.4rem;
  -moz-border-radius: 0.4rem;
  -ms-border-radius: 0.4rem;
  -o-border-radius: 0.4rem;
  border-radius: 0.4rem;
  -webkit-box-shadow: 1rem 1rem 0.5rem #b55858;
  box-shadow: 0.1rem 0.1rem 0.5rem #b55858;
}


 .touzi-formula{
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

 .touzi-result{
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

  .touzi-items{
  /*border: 1px solid black;*/
  margin:3rem 1rem;
  text-align: left;
  width: 92.3%;
  height: auto;
}

  .touzi-items .touzi-row
{
  margin-bottom: 2.3%;
  width: 100%
}

 .touzi-items .touzi-item{
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
 .touzi-items .num {
  background-color: #bbb;
 }

  .touzi-items .touzi-item:hover{
  color: #f1f5f7;
  -webkit-box-shadow: 0.3rem 0.3rem 0.5rem #b55858;
  box-shadow: 0.3rem 0.3rem 0.5rem #b55858;

}

  .touzi-items .touzi-item:active{
  transform: translate(0.05rem,0.05rem);
  -moz-transform: translate(0.05rem,0.05rem);
    -webkit-transform: translate(0.05rem,0.05rem);

}



 .touzi-border .last  .touzi-item:nth-child(odd){
  width:100%;
  background-color: rgba(244, 135, 135, 0.78);
}

 .touzi-border .touzi-row .touzi-item:nth-child(4),
 .touzi-border .last .touzi-item:nth-child(1){
  margin-right: 0;

}


</style>
