<script setup >

</script>

<template>
  <!--底部 -->
  <div class="footer">
    <ul>
      <li>
        <i class="fa fa-home" aria-hidden="true" ></i>
        <p>云医院</p>
      </li>
      <li>

        <i class="fa fa-opencart" aria-hidden="true" ></i>
        <p>商城</p>
      </li>
      <li>
        <i class="fa fa-compass"></i>
        <p>发现</p>
      </li>
      <li>
        <i class="fa fa-user" aria-hidden="true" ></i>
        <p>我</p>
      </li>
    </ul>
  </div>

</template>

<style scoped>
/*底部*/
.footer{
  position: fixed;
  left: 0vw;
  bottom: 0vh;
  width: 100%;
  background-color: #eeeeee;
}
.footer ul{
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 4vw;
}
.footer li{
  cursor: pointer;
}
</style>