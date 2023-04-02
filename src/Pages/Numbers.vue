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
				<div class="col-12 col-sm-6 mx-auto card shadow p-3">
					{{ facts.number }} is {{ facts.text }}
				</div>
			</div>
		</section>
	</main>
</template>
<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import constants from "../constants.js";

const num = ref("");
const facts = ref("");
const getRandomFacts = async () => {
	const options = {
		method: "GET",
		params: { fragment: "true", json: "true" },
		headers: {
			"X-RapidAPI-Key": constants.NUMBERS_API_KEY,
			"X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
		},
	};
	const findNum = num.value || Math.floor(Math.random() * 100);
	options.url = "https://numbersapi.p.rapidapi.com/" + findNum + "/math";
	axios
		.request(options)
		.then(function (response) {
			facts.value = response.data;
		})
		.catch(function (error) {
			console.error(error);
		});
};
onMounted(async () => {
	await getRandomFacts();
});
</script>
