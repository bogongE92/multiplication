<template>
	<div class="container">
		<h1>구구단 과제</h1>
		<div class="card">
			<input v-model="inputTime" type="number" placeholder="단수를 입력해 주세요." />
			<input v-model="inputLines" type="number" placeholder="출력할 줄을 입력해 주세요." />
			<button class="execution-btn" type="button" @click="multipy">구구단 실행</button>
		</div>
		<div class="print">
			<p>{{ inputTime }}</p>
			<p>{{ inputLines }}</p>
			<ul>
				<li v-for="(number, index) in inputResult" :key="index"
				> 
					{{ inputTime }}단 x {{ inputLines }} = {{ number[index] }}
				</li>
			</ul>
		</div>
	</div>
</template>


<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputTime = ref(null);
		const inputLines = ref(null);
		const inputResult = ref([]);
		// const multiply = ref (false);

		const multipy = (e) => {
			// e.preventDefault();
			// console.log(e);

			// for써서  배열에 넣고 위에서 뿌려준다.
			// 배열에 push 
			inputResult.value = inputTime.value
			if( inputTime.value === null || inputLines.value === null) {
				alert('숫자를 입력해주세요');
			}
			
		}

		
		return {
			inputTime,
			inputLines,
			inputResult,
			multipy
		};
	},
};
</script>
<style scoped>
.read-the-docs {
	color: #888;
}
</style>
