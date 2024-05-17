<template>
	<div class="container">
		<h1>구구단 과제</h1>
		<div class="card">
			<input v-model="inputTime" type="number" placeholder="단수를 입력해 주세요." />
			<input v-model="inputLines" type="number" placeholder="출력할 줄을 입력해 주세요." />
			<button class="execution-btn" type="button" @click="multipy">구구단 실행</button>
		</div>
		<div class="print">
			<ul>
				<li v-for="(result, index) in inputResult" :key="index"
				> 
					{{ savedTime }}단 x {{ result.number }} = {{ result.multiplyResult }}
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
		const savedTime = ref(null);

		const multipy = () => {
			if( inputTime.value === null || inputLines.value === null) {
				alert('숫자를 입력해주세요');
				return;
			}

			// inputTime 값을 savedTime에 저장
			savedTime.value = inputTime.value;

			// 이전 결과를 지우기 -> 안지워주면 결과값이 그대로 남아 있는다. 
			inputResult.value = []; 

			// for써서  배열에 넣고 위에서 뿌려준다.
			// 배열에 push 
			for(let number = 1; number <= inputLines.value; number++) {
				const multiplyResult = inputTime.value * number;
				inputResult.value.push({number, multiplyResult})
			}
			
			// 입력 상자를 빈 값으로 초기화하기
			inputTime.value = null;
			inputLines.value = null;
		}

		
		return {
			inputTime,
			inputLines,
			inputResult,
			savedTime,
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
