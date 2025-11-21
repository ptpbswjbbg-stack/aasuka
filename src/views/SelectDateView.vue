<template>
  <HeaderCom>
    请选择预约日期
  </HeaderCom>
	  <el-calendar v-model="selDate" >
		  <!-- 自定义单元格内容-->
	    <template #date-cell="{ data }" >
		 <p :class="data.isSelected ? 'is-selected' : ''" >
	       <div :class="data.isSelected ? 'date-selected' : ''" style="height:20px;">{{ parseInt(data.day.slice(8))}}</div>
			<span class="small">{{ getDataByDate(data.day) }}</span>
	       {{ data.isSelected ? '✔️' : '' }}
	      </p>
	    </template>
	  </el-calendar>
	  <button @click="submit()">submit</button>
</template>

<script setup >
import HeaderCom  from "@/components/HeaderCom.vue";
import { ref } from 'vue';
let dataMap=ref([
	{'2025-11-06':56},{'2025-11-07':20},{'2025-11-08':39}
])
let selDate=ref(new Date())
const getDataByDate = (date) => {
  const item = dataMap.value.find(item => item[date] !== undefined)
  return item ? '余'+item[date] : ''
}
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

let submit=()=>{
	alert(formatDate(selDate.value))
}


</script>

<style>
.is-selected {
  color: #1989fa;
}
.small{
	font-size: 12px;
	color:darkgray;
}
p{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
	
.date-selected{
	width:28px;
	height: 28px;
	color:white;
	background-color: orange;
	border-radius: 50%;
	display: flex;
	font-weight: 600;
	justify-content: center;
	align-items: center;
}


</style>