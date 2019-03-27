<template>
 <div class="calculator-border">
   <div class='nav'>
     <router-link to="/cal"><img src="src/assets/cal.png"></router-link>
     <router-link to="/rel"><img src="src/assets/rel.png"></router-link>
     <router-link to="/choice"><img src="src/assets/lucky.png"></router-link>
     <router-link to="/touzi"><img src="src/assets/touzi.png"></router-link>
 </div>

      <input class="calculator-display" v-model="current" />



          <div class="calculator-items">
          <div class="calculator-row">
          <div class="calculator-item" @click="press"><=</div>
          <div class="calculator-item" @click="press">C</div>
          <div class="calculator-item" @click="press">±</div>
          <div class="calculator-item" @click="press">+</div>
          <div class="calculator-item" @click="press">x ²</div>
          </div>

           <div class="calculator-row">
          <div class="calculator-item num" @click="press">7</div>
          <div class="calculator-item num" @click="press">8</div>
          <div class="calculator-item num" @click="press">9</div>
          <div class="calculator-item" @click="press">-</div>
          <div class="calculator-item" @click="press">%</div>
          </div>

          <div class="calculator-row">
          <div class="calculator-item num" @click="press">4</div>
          <div class="calculator-item num" @click="press">5</div>
          <div class="calculator-item num" @click="press">6</div>
          <div class="calculator-item" @click="press">*</div>
          <div class="calculator-item" @click="press">x^</div>
          </div>

          <div class="calculator-row">
          <div class="calculator-item num" @click="press">1</div>
          <div class="calculator-item num" @click="press">2</div>
          <div class="calculator-item num" @click="press">3</div>
          <div class="calculator-item" @click="press">/</div>
          <div class="calculator-item" @click="press">√</div>
          </div>
          <div class="calculator-row last">
          <div class="calculator-item num" @click="press">0</div>
          <div class="calculator-item num" @click="press">.</div>
          <div class="calculator-item" @click="press">=</div>
          </div>

          <div class="calculator-row">
          <div class="calculator-item" @click="press">sin</div>
          <div class="calculator-item" @click="press">cos</div>
          <div class="calculator-item" @click="press">tan</div>
          <div class="calculator-item" @click="press">log</div>
          <div class="calculator-item" @click="press">ln</div>
          </div>

          <div class="calculator-row">
          <div class="calculator-item" @click="press">e</div>
          <div class="calculator-item" @click="press">∘</div>
          <div class="calculator-item" @click="press">x !</div>
          <div class="calculator-item" @click="press">(</div>
          <div class="calculator-item" @click="press">)</div>
          </div>

        </div>
      </div>
</template>

<script>
export default {
  name: 'CalculatorContent',
  data () {
    return {
     current :"",
    }
  },

  methods:{
        press: function (event) {
      let me = this
      let key = event.target.textContent

      if (
        key != '=' &&
        key != 'C' &&
        key != '*' &&
        key != '/' &&
        key != '√' &&
        key != "x ²" &&
        key != "%" &&
        key != "<=" &&
        key != "±" &&
        key != "sin" &&
        key != "cos" &&
        key != "tan" &&
        key != "log" &&
        key != "ln" &&
        key != "x^" &&
        key != "x !" &&
        key != "π" &&
        key != "e" &&
        key != "rad" &&
        key != "∘"
      ) {
        me.current += key

      } else if (key === '=') {

        if ((me.current).indexOf('^') > -1) {
          let base = (me.current).slice(0, (me.current).indexOf('^'))
          let exponent = (me.current).slice((me.current).indexOf('^') + 1)
          me.current = eval('Math.pow(' + base + ',' + exponent + ')')
        } else {
          me.current = eval(me.current)
        }

      } else if (key === 'C') {

        me.current = ''

      } else if (key === '*') {

        me.current += '*'

      } else if (key === '/') {

        me.current += '/'

      } else if (key === '+') {

        me.current += '+'

      } else if (key === '-') {

        me.current += '-'

      } else if (key === '±') {

        if ((me.current).charAt(0) === '-') {
          me.current = (me.current).slice(1)
        } else {
          me.current = '-' + me.current
        }

      } else if (key === '<=') {

        me.current = me.current.substring(0, me.current.length - 1)

      } else if (key === '%') {

        me.current = me.current / 100

      } else if (key === 'π') {

        me.current = me.current * Math.PI

      } else if (key === 'x ²') {

        me.current = eval(me.current * me.current)

      } else if (key === '√') {

        me.current = Math.sqrt(me.current)

      } else if (key === 'sin') {

        me.current = Math.sin(me.current)

      } else if (key === 'cos') {

        me.current = Math.cos(me.current)

      } else if (key === 'tan') {

        me.current = Math.tan(me.current)

      } else if (key === 'log') {

        me.current = Math.log10(me.current)

      } else if (key === 'ln') {

        me.current = Math.log(me.current)

      } else if (key === 'x^') {

        me.current += '^'

      } else if (key === 'x !') {

        let number = 1
        if (me.current === 0) {
          me.current = '1'
        } else if (me.current < 0) {
          me.current = NaN
        } else {
          let number = 1
          for (let i = me.current; i > 0; i--) {
            number *= i
          }
          me.current = number
        }

      } else if (key === 'e') {

        me.current = Math.exp(me.current)

      } else if (key === 'rad') {

        me.current = me.current * (Math.PI / 180)

      } else if (key === '∘') {

        me.current = me.current * (180 / Math.PI)

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

.calculator .calculator-border .calculator-display{
  text-align:center;
  border: 0.15rem solid #b9b4b4;
  background-color: #f5f8f8;
  margin:1rem;
  /*width: 24rem;*/
  height: 7rem;
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


.calculator .calculator-border .calculator-formula{
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

.calculator .calculator-border .calculator-result{
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

.calculator .calculator-border .calculator-items{
  /*border: 1px solid black;*/
  margin:3rem 1rem;
  text-align: left;
  width: 92.3%;
  height: auto;
}

.calculator .calculator-border .calculator-items .calculator-row
{
  margin-bottom: 2.3%;
  width: 100%
}

.calculator .calculator-border .calculator-items .calculator-item{
   border: 0.1rem solid rgba(166, 98, 98, 0.74);
  width: 15%;
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
 .calculator .calculator-border .calculator-items .num {
  background-color: #bbb;
 }

.calculator .calculator-border .calculator-items .calculator-item:hover{
  color: #f1f5f7;
  -webkit-box-shadow: 0.3rem 0.3rem 0.5rem #b55858;
  box-shadow: 0.3rem 0.3rem 0.5rem #b55858;

}

.calculator .calculator-border .calculator-items .calculator-item:active{
  transform: translate(0.05rem,0.05rem);
  -moz-transform: translate(0.05rem,0.05rem);
    -webkit-transform: translate(0.05rem,0.05rem);

}



.calculator .calculator-border .last  .calculator-item:nth-child(odd){
  width: 35%;

}

.calculator .calculator-border .calculator-row .calculator-item:nth-child(5),
.calculator .calculator-border .last .calculator-item:nth-child(3){
  margin-right: 0;

}


</style>
