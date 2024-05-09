<template>
	<div class="container">
		<h1>구구단 과제</h1>
		<div class="card">
			<input calss="stage" type="text" placeholder="단수를 입력해 주세요(숫자만)" />
			<input class="line" type="text" placeholder="출력할 줄을 입력해 주세요(숫자만)" />
			<button class="execution-btn" type="button" @click="count++">구구단 실행</button>
		</div>
		<div class="print">
		
		</div>
	</div>
</template>


<script>
import { ref } from 'vue';

export default {
	setup() {
		const count = ref(0);

		return {
			count
		};
	},
};
</script>
<style scoped>
.read-the-docs {
	color: #888;
}
</style>
