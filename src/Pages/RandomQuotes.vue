<template>
	<main class="bg-gray card p-5">
		<h1>Quotes API</h1>
		<section v-if="quote">
			<div class="mx-auto pt-3">
				<div class="card">
					<div class="card-header text-capitalize">
						{{ quote.tags.join(", ") }}
					</div>
					<div class="card-body">
						<blockquote class="blockquote mb-0">
							<p id="quote">{{ quote.content }}</p>
							<footer class="blockquote-footer" id="author">
								{{ quote.author }}
							</footer>
						</blockquote>
					</div>
					<div class="card-footer">
						<small class="text-muted" id="date">{{ quote.dateAdded }}</small>
					</div>
				</div>
			</div>
			<button @click="getRandomQuote()" class="btn btn-primary mt-3">
				Get random quote
			</button>
		</section>
	</main>
</template>
<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const quote = ref("");
const options = {
	method: "GET",
	url: "https://api.quotable.io/random",
};
const getRandomQuote = async () => {
	axios.request(options).then(function (response) {
		quote.value = response.data;
	});
};
onMounted(async () => {
	await getRandomQuote();
});
</script>
