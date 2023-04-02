<template>
	<main class="bg-gray card p-5">
		<h1>Numbers API</h1>
		<section>
			<div class="mx-auto pt-3">
				<div class="mb-3">
					<label for="q" class="form-label">Search</label>
					<input
						v-model="num"
						type="number"
						class="form-control"
						id="q"
						placeholder="Input a number or leave blank for a random number facts"
					/>
				</div>
			</div>
			<button @click="getRandomFacts()" class="btn btn-primary mt-3">
				Get random number facts
			</button>
			<div class="text-center p-3">
				<div class="col-12 col-sm-6 mx-auto card shadow p-3">{{ facts }}</div>
			</div>
		</section>
	</main>
</template>
<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const num = ref("");
const facts = ref("");
const getRandomFacts = async () => {
	const findNum = num.value || Math.floor(Math.random() * 100);
	axios.get("http://numbersapi.com/" + findNum).then(function (response) {
		console.log(response);
		facts.value = response.data;
	});
};
onMounted(async () => {
	await getRandomFacts();
});
</script>
