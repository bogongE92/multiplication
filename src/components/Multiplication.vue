<template>
	<div class="container">
		<h1>구구단 과제</h1>
		<div class="card">
			<input v-model.number="inputTime" calss="time" type="text" placeholder="단수를 입력해 주세요(숫자만)" />
			<input v-model.number="inputLines" class="line" type="text" placeholder="출력할 줄을 입력해 주세요(숫자만)" />
			<button class="execution-btn" type="button" @click="multiply">구구단 실행</button>
		</div>
		<div class="print">
			<p>{{ inputTime }}</p>
			<p>{{ inputLines }}</p>
			<ul>
				<li v-for="multiply in multiplies" 
					:key="multiply" 
					:ref="(el) => itemRefs.push(el.textContent)"
				>
					{{ multiply }}
				</li>
				<!-- <li v-for="multiply in multiplies" 
				:key="multiply" 
				:ref="(el) => multiplies.push(el.textContent)"
				>
					{{ multiply }}
				</li> -->
			</ul>
		</div>
	</div>
</template>


<script>
import { onMounted, ref } from 'vue';

export default {
	setup() {
		const inputTime = ref('');
		// const inputTimes = ref([]);

		const inputLines = ref('');
		const execution = ref();
		
		
		const multiplies = () => {
			/* inputTime.value */
			console.log(inputTime.value)
			console.log(inputLines.value)
			inputTime.value * inputLines.value

		}

		
		return {
			inputTime,
			inputLines,
			execution,
			multiplies
		};
	},
};
</script>
<style scoped>
.read-the-docs {
	color: #888;
}
</style>
