<template>
	<ToastComponent
		v-if="showToast"
		:message="errorMessage"
		@hide="showToast = false"
	></ToastComponent>
	<main class="bg-gray card p-5">
		<h1>News API</h1>
		<section>
			<div class="mx-auto">
				<div class="mb-3">
					<label for="q" class="form-label">Search</label>
					<input
						v-model="params.q"
						type="email"
						class="form-control"
						id="q"
						placeholder="What's on your mind?"
					/>
				</div>
			</div>
			<button @click="search()" class="btn btn-primary mb-3">Search</button>
			<div v-if="isLoading">
				<div class="text-center card p-3">
					<span><i>Loading...</i></span>
				</div>
			</div>
			<div v-else-if="isEmpty" class="text-center text-muted card p-3">
				<span>No news found.</span>
			</div>
			<div v-else class="row">
				<div
					v-for="(n, idx) in news"
					:key="'news-' + idx"
					class="col-md-6 col-lg-4 col-12 mb-4"
				>
					<div class="card">
						<img
							v-if="n.urlToImage"
							:src="n.urlToImage"
							class="card-img-top"
							alt="..."
						/>
						<div class="card-body">
							<h5 class="card-title">{{ n.title }}</h5>
							<i class="text-muted">{{ n.author }}</i>
							<p class="card-text" v-html="n.description"></p>
							<a :href="n.url" class="btn btn-primary">Show more</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import constants from "../constants.js";
import ToastComponent from "../components/Toast.vue";

const config = {
	headers: {
		"X-Api-Key": constants.NEWS_API_KEY,
	},
};

const toast = (message) => {
	errorMessage.value = message;
	showToast.value = true;
};

const isLoading = ref(false);
const showToast = ref(false);
const errorMessage = ref("Something went wrong");
const params = ref({
	q: "",
	pageSize: 100,
});
const news = ref([]);
const isEmpty = computed(() => news.value.length === 0);
const search = async () => {
	if (params.value.q === "") {
		return await toast("Please input what you want to search");
	}
	news.value = [];
	isLoading.value = true;
	const res = await axios
		.get("https://newsapi.org/v2/everything", {
			...config,
			params: params.value,
		})
		.catch((err) => {
			if (err.response.data.code === "parametersMissing") {
				toast("Please input what you want to search");
			}
		});
	if (res && res.data && res.data.status == "ok") {
		news.value = res.data.articles;
	}
	isLoading.value = false;
};
onMounted(() => {});
</script>
<style scope>
.news-card:hover {
	cursor: pointer;
}
</style>
