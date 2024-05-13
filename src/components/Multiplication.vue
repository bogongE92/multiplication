<template>
	<div class="container">
		<h1>구구단 과제</h1>
		<form class="card" @submit="onSubmitForm">
			<input v-model="inputTime" type="number" placeholder="단수를 입력해 주세요." />
			<input v-model="inputLines" type="number" placeholder="출력할 줄을 입력해 주세요." />
			<button class="execution-btn" type="submit" @click="multiply">구구단 실행</button>
		</form>
		<div class="print">
			<p>{{ inputTime }}</p>
			<p>{{ inputLines }}</p>
			<!-- <ul>
				<li v-for="inputLine in inputLines" 
					:key="inputLine" 
				> 
					{{ inputTime }}단 x {{ inputLine }} = {{ inputTime * inputLine }}
				</li>
			</ul> -->
		</div>
	</div>
</template>


<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputTime = ref('');
		const inputLines = ref('');
		// const multiply = ref (false);

		const onSubmitForm = (e) => {
			e.preventDefault();
			console.log(e);
			
		}
		const multiply = () => {
			if( inputTime.value === '' || inputLines.value === '') {
				alert('숫자를 입력해주세요');
			}
		};

		
		return {
			inputTime,
			inputLines,
			onSubmitForm,
			multiply
		};
	},
};
</script>
<style scoped>
.read-the-docs {
	color: #888;
}
</style>
