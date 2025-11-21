<template>
  <HeaderCom>体检报告</HeaderCom>
  <div class="main">
    <nav>
      <div @click="itemPage(0)" :class="myData.itemPageShow[0]==1?'itemShow':''">总检结论</div>
      <div @click="itemPage(1)" :class="myData.itemPageShow[1]==1?'itemShow':''">报告详情</div>
    </nav>
    <div class="zjjl" v-show="myData.itemPageShow[0]==1">
      <ul>
        <li>
          <div class="title">异常项</div>
<!--          <div class="content">-->
            <div class="list">
              <div class="row">
                <div class="left">
                  <span>异</span>白细胞计数
                </div>
                <div class="right">
                  <p class="rightTop">
                    3.56 10^9/L
                  </p>
                  <p class="rightBottom">
                    正常值范围：4-10
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="left">
                  <span>异</span>白细胞计数
                </div>
                <div class="right">
                  <p class="rightTop">
                    3.56 10^9/L
                  </p>
                  <p class="rightBottom">
                    正常值范围：4-10
                  </p>
                </div>
              </div>


            </div>
<!--          </div>-->

        </li>
        <li>
          <div class="title">一、尊敬的顾客，您本次体检结论如下：</div>
            <div class="list">
              <div class="row">
                <p><span>1、</span>超重</p>
              </div>
              <div class="row">
                <p><span>2、</span>血压增高</p>
              </div>
              <div class="row">
                <p><span>3、</span>血常规异常</p>
              </div>
          </div>
        </li>
        <li>
          <div class="title">二、尊敬的顾客，您本次体检建议信息日下：</div>
            <div class="list">
              <div class=" row02">
                  <p class="title">1、超重</p>
                  <p class="content">
                    您的体重指标属超重。体内脂肪过度增加，使体重超过正常范围，可引起高血压、高血脂、糖尿病、冠心病以及免疫功能降低等并发症。 建议: 合理膳食，以低盐、低脂、高纤维为原则；三餐定时，不吃零食；根据自身情况适量运动，以消耗体内脂肪，维持正常体重。
                  </p>
              </div>
              <div class=" row02">
                <p class="title">2、血压增高</p>
                <p class="content">
                  此次检测血压增高，已经达到高血压的诊断标准，建议就诊心血管内科进一步明确高血压诊断，积极控制好血压。低盐、低脂、低胆固醇饮食。 戒烟酒，避免情绪激动，长期过度紧张工作或劳累，保存心境平和，保证充足睡眠。定期到医院系统复查，预防并发症。
                </p>
              </div>
              <div class=" row02">
                <p  class="title">3、血常规异常</p>
                <p class="content">
                  此次检测白细胞减少，将会导致免疫功能的下降。建议就诊做进一步诊断。 同时注意：胆固醇高不要吃油的，甜的，多吃水果和蔬菜，多吃富含蛋白质的食物，如牛奶和豆奶。注意锻炼，坚持每天三次，超过10分钟，中等强度，每周锻炼不少于5次。
                </p>
              </div>
            </div>

        </li>
      </ul>
    </div>

    <div class="bgxq"  v-show="myData.itemPageShow[1]==1">
      <ul>
        <li>
          <div class="title">一般检测</div>
<!--          <div class="content">-->
            <div class="list">
              <div class="row">
                <div class="left">
                  <span>异</span> 收缩压
                </div>
                <div class="right">
                  <p class="rightTop">
                    149
                  </p>
                  <p class="rightBottom">
                    正常值范围：<140
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="left">
                  <span>异</span> 舒张压
                </div>
                <div class="right">
                  <p class="rightTop">


                    90
                  </p>
                  <p class="rightBottom">
                    正常值范围：<90
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="left">
                   身高
                </div>
                <div class="right">
                  <p>
                    177.00 cm
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="left">
                   体重
                </div>
                <div class="right">
                  <p>
                    80 kg
                  </p>
                </div>
              </div>
            </div>
<!--          </div>-->
        </li>

        <li>
          <div class="title">血常规</div>
          <div class="list">
            <div class="row">
              <div class="left">
                <span>异</span> 白细胞计数
              </div>
              <div class="right">
                <p class="rightTop">
                  3.56 10^9/L
                </p>
                <p class="rightBottom">
                  正常值范围：4-10
                </p>
              </div>
            </div>
            <div class="row">
              <div class="left">
                <span>异</span> 红细胞压值
              </div>
              <div class="right">
                <p class="rightTop">
                  47.4 %
                </p>
                <p class="rightBottom">
                  正常值范围：36-5
                </p>
              </div>
            </div>
            <div class="row">
              <div class="left">
                <span>异</span> 淋巴细胞计数百分比
              </div>
              <div class="right">
                <p class="rightTop">
                  19.03 %
                </p>
                <p class="rightBottom">
                  正常值范围：18.3-47.9
                </p>
              </div>
            </div>
            <div class="row">
              <div class="left">
                <span>异</span> 单核细胞计数百分比
              </div>
              <div class="right">
                <p class="rightTop">
                  8.00 %
                </p>
                <p class="rightBottom">
                  正常值范围：4.2-15.2
                </p>
              </div>
            </div>
            <div class="row">
              <div class="left">
                <span>异</span> 嗜酸性粒细胞计数百分比
              </div>
              <div class="right">
                <p class="rightTop">
                  1.20 %
                </p>
                <p class="rightBottom">
                  正常值范围：0.2-7.6
                </p>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="title">尿常规</div>
          <!--          <div class="content">-->
          <div class="list">
            <div class="row">
              <div class="left">
                <span>异</span> 尿白细胞
              </div>
              <div class="right">
                <p class="rightTop">
                  - /ul
                </p>
                <p class="rightBottom">
                  正常值范围：-
                </p>
              </div>
            </div>
            <div class="row">
              <div class="left">
                <span>异</span> 尿亚硝酸盐
              </div>
              <div class="right">
                <p class="rightTop">
                  -
                </p>
                <p class="rightBottom">
                  正常值范围：阴性
                </p>
              </div>
            </div>
            <div class="row">
              <div class="left">
                <span>异</span> 尿液酸碱度
              </div>
              <div class="right">
                <p class="rightTop">
                  6.0
                </p>
                <p class="rightBottom">
                  正常值范围：5.5-6.5
                </p>
              </div>
            </div>

          </div>
          <!--          </div>-->
        </li>
        <li>
          <div class="title">妇科检查</div>
          <div class="list">
            <div class="row02">
              <p class="title">盆腔检查</p>
              <p class="content color999999">
                盆腔检查结果内容，盆腔检查结果内容，盆腔检查结果内容，盆腔检查结果内容，盆腔检查结果内容，盆腔检查结果内容，盆腔检查结果内容。
              </p>
            </div>
            <div class="row02">
              <p class="title">乳腺检查</p>
              <p class="content color999999">
                正常
              </p>
            </div>
            <div class="row02">
              <p class="title">子宫检查</p>
              <p class="content color999999">
                正常
              </p>
            </div>

          </div>
        </li>
      </ul>
    </div>
  </div>
  <div style="height: 10vw">

  </div>
  <FooterCom></FooterCom>
</template>

<script setup >
  import HeaderCom from "@/components/HeaderCom.vue";
  import FooterCom from "@/components/FooterCom.vue";
  import {defineComponent, reactive} from "vue";

  const myData=reactive({
    itemPageShow:[1,0]
  })
  function itemPage(index) {
    myData.itemPageShow = [0,0];
    myData.itemPageShow[index] = 1;
  }
</script>



<style scoped>
  /*nav div:first-child{
    background-color: red;
  }
  nav div:last-child{
    background-color: blue;
  }*/
  nav {
    display: flex;
    justify-content: space-around;
    background-color: #F9F9F9;
    height: 17vw;
    margin-bottom: 3vw;
  }
  nav div{
    width: 50vw;
    text-align: center;
    height: 15vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5vw;
    font-weight: 600;
    cursor: pointer;
  }
  .itemShow{
    color: #137E92;
    border-bottom-style: solid;
    border-bottom-width: 1vw;
    border-bottom-color: #137E92;
  }
  ul{
    margin-left: 3vw;
    margin-right: 3vw;
  }

  ul li >.title{
    background-color: #7BAFD7;
    height: 9vw;
    font-size: 4.5vw;
    display: flex;
    align-items: center;
    padding-left: 3vw;
    color: white;
    border-radius: 3vw 3vw 0 0;
    margin-bottom: 4vw;
    margin-top: 1vw;
  }
  li .list .row {
    display: flex;
    height: 12vw;
    font-size: 3vw;
    border-bottom-style: solid;
    border-bottom-color: #EEEEEE;
    border-bottom-width: 0.3vw;
    padding-top: 3vw;
  }
  li .list .row .left{

    font-weight: 600;
    width: 50vw;
    padding-left: 3vw;
  }
  li .list .row .left span{
    background-color: red;
    font-weight: 600;
    width: 50vw;
    padding: 0.5vw;
    border-radius: 1vw;
    margin-right: 2vw;
    color: white;
  }
  li .list .row .right{
    width: 50vw;
  }
  li .list .row .right .rightBottom{
    width: 50vw;
   color: #9A9999;
  }

  li .list .row > p {
    border-bottom-style: solid;
    border-bottom-color: #EEEEEE;
    border-bottom-width: 0.3vw;
    width: 100vw;
    margin-top: -6vw;
    display: flex;
    align-items: center;

  }
  li .list .row p span{
    margin-left: 3vw;
  }
  .row02{
    display: flex;
    flex-direction: column;
    font-size: 3vw;
  }
  .row02 .title{

    font-weight: 600;
  }
  .row02 .content {
    margin-top: 3vw;
    text-indent:6vw;
    margin-bottom: 3vw;
    border-bottom-style: solid;
    border-bottom-color: #EEEEEE;
    border-bottom-width: 0.3vw;
    padding-bottom: 3vw;
  }
  .color999999{
    color: #999999;
  }
</style>