<template>
  <div id="calculator">

    <section class="calculator" id="calculator">
      <router-view></router-view>
    </section>
    <header>
      <!-- <h3>Calculator</h3> -->
      <span class="author">
        By Rabbeat & Sigawen

    </span>
    </header>
  </div>
</template>

<script>
import CalculatorContent from 'components/CalculatorContent.vue'
import Relation from 'components/Relation.vue'
export default {
  name: 'calculator',
  components: {
    CalculatorContent,
    Relation
  }
 }

</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Pacifico');


html{
   font-size:62.5%;  /* =10px */
   font-family: 'Microsoft Yahei';
}

body{
  background-color:#f4f1f1; /* HEX */
  margin:0px;
}


header{
  font-size: 1.8rem;
}

header .author{
  font-family: 'Pacifico';
  font-size: 1.5rem;
  margin: 0;
}

header .author a{
  text-decoration: none;
}

header , .calculator {
  margin: 2.5rem auto;
  text-align: center;
}

.calculator{
  margin-top: 0;
  border: 0.8rem solid #c5a2a2;
  height: 100%;
  background-color: #dec8c8;
  font-size: 1.6rem;
  -webkit-border-radius: 1rem;
  -moz-border-radius: 1rem;
  -ms-border-radius: 1rem;
  -o-border-radius: 1rem;
  border-radius: 1rem;:
  -webkit-box-shadow: 1rem 1rem 0.5rem #ccc;
  box-shadow: 1rem 1rem 0.5rem #ccc;

}


</style>
