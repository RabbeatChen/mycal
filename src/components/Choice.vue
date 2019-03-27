<template>
 <div class="choice-border">
   <div class='nav'>
   <router-link to="/cal"><img src="src/assets/cal.png"></router-link>
   <router-link to="/rel"><img src="src/assets/rel.png"></router-link>
   <router-link to="/choice"><img src="src/assets/lucky.png"></router-link>
   <router-link to="/touzi"><img src="src/assets/touzi.png"></router-link>
 </div>
      <div class="row group">
        <div class="row">
            <input class="choice-display"id="input"  v-model="current"></input>
        </div>
      </div>
      <div id="todo-list-example">
        <form v-on:submit.prevent="addNewTodo">
          <p><label for="new-todo">输入您的备选项</label></p>
          <p>
            <input
              v-model="newTodoText"
              id="new-todo"
              placeholder="例如：去吃新食堂"
            >
            <button id='addBtn'>添加</button>
          </p>
        </form>
        <ul>
          <li
            v-for="(todo, index) in todos"
            @click="remove(index)"
          >{{todo.title}}</li>
        </ul>
      </div>
          <div class="choice-items choice-row last">
          <div class="choice-item" @click="choice">帮我选一个！</div>
          </div>

        </div>
</template>

<script>
export default {
  name: 'choice',
  data () {
    return {
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
  },

  methods:{
    choice: function (index) {
      if(this.todos.length) {
        this.current=this.todos[Math.floor((Math.random()*this.todos.length))].title;
      }else{
        this.current = '您还没有输入备选项哦，请输入'
      }
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
          let result = choiceship(option)
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
.choice-border {
  color: white;
  font-size: 20px;
}
#addBtn {
  background-color: rgba(244, 135, 135, 0.78);
  border: 0.1rem solid rgba(166, 98, 98, 0.74);
  border-radius: 0.4rem;
  height: 30px;
}
#new-todo {
  width: 80%;
  height: 30px;
  border: 0.1rem solid rgba(166, 98, 98, 0.74);
  border-radius: 0.4rem;
}
.nav {
  padding-left: 40px;
  padding-top: 10px;
}
.nav img {
  width: 40px;
  height:40px;
  margin-right: 30px;
}


 .choice-display{
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


 .choice-formula{
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

 .choice-result{
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

  .choice-items{
  /*border: 1px solid black;*/
  margin:3rem 1rem;
  text-align: left;
  width: 92.3%;
  height: auto;
}

  .choice-items .choice-row
{
  margin-bottom: 2.3%;
  width: 100%
}

 .choice-items .choice-item{
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
 .choice-items .num {
  background-color: #bbb;
 }

  .choice-items .choice-item:hover{
  color: #f1f5f7;
  -webkit-box-shadow: 0.3rem 0.3rem 0.5rem #b55858;
  box-shadow: 0.3rem 0.3rem 0.5rem #b55858;

}

  .choice-items .choice-item:active{
  transform: translate(0.05rem,0.05rem);
  -moz-transform: translate(0.05rem,0.05rem);
    -webkit-transform: translate(0.05rem,0.05rem);

}



 .choice-border .last  .choice-item:nth-child(odd){
  width:100%;
  background-color: rgba(244, 135, 135, 0.78);
}

 .choice-border .choice-row .choice-item:nth-child(4),
 .choice-border .last .choice-item:nth-child(1){
  margin-right: 0;

}


</style>
