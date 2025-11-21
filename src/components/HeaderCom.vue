

<template>
  <div class="header">
    <h1 style="flex: 10" @click="back"><i class="fa fa-angle-left"></i></h1>
    <p style="flex: 90">
      <slot></slot>
    </p>
  </div>
</template>
<script setup >
import {useRouter} from "vue-router";

let router = useRouter();
function back(){
  router.go(-1);
}
</script>
<style scoped>
.header{
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 5vw;
  margin-bottom: 5vw;
  background-color: white;
  width: 100vw;
}
.header h1{
  cursor: pointer;
}
.header p{
  text-align: center;
  font-size: 4vw;
}
</style>