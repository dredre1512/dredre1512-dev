<template>
	<ToastComponent
		v-if="showToast"
		:message="errorMessage"
		@hide="showToast = false"
	></ToastComponent>
	<main class="bg-gray card p-5">
		<section>
			<h1>TED Talks</h1>
			<div class="">
				Topic
				<select
					v-model="selectedTopic"
					class="form-select mb-3"
					aria-label="Default select example"
				>
					<option :value="''" selected>Select Topic</option>
					<option
						v-for="topic in params.topics"
						:key="'topic_' + topic.slug"
						:value="topic.slug"
						>{{ slugToNormal(topic.slug) }}</option
					>
				</select>
				Speaker
				<select
					v-model="selectedSpeaker"
					class="form-select mb-3"
					aria-label="Default select example"
				>
					<option :value="''" selected>Select Speaker</option>
					<option
						v-for="speaker in params.speakers"
						:key="'topic_' + speaker.slug"
						:value="speaker.slug"
						>{{ speaker.full_name }}</option
					>
				</select>
				Audio
				<select
					v-model="selectedAudio"
					class="form-select mb-3"
					aria-label="Default select example"
				>
					<option :value="''">Select Audio Language</option>
					<option
						v-for="a in params.audio_languages"
						:key="'audio_languages_' + a.slug"
						:value="a.slug"
						>{{ slugToNormal(a.slug) }}</option
					>
				</select>
				Subtitle
				<select
					v-model="selectedSubtitle"
					class="form-select mb-3"
					aria-label="Default select example"
				>
					<option :value="''" selected>Select Subtitle Language</option>
					<option
						v-for="s in params.subtitle_languages"
						:key="'topic_' + s.slug"
						:value="s.slug"
						>{{ slugToNormal(s.slug) }}</option
					>
				</select>
				<button @click="getTalks()" class="btn btn-primary">Filter</button>
			</div>
			<div class="text-right">Results: {{ results.length }}</div>
			<div class="text-center my-3" v-if="loading">
				Loading...
			</div>
			<div v-else-if="results && results.length !== 0" class="row">
				<div
					v-for="(result, idx) in results"
					:key="'ted-' + idx"
					class="col-md-6 col-lg-4 col-12 mb-4"
				>
					<div class="card mb-3">
						<img :src="result.thumbnail_url" class="card-img-top" alt="..." />
						<div class="card-body">
							<h5 class="card-title mb-3">{{ result.description }}</h5>
							<p class="card-text">
								{{ result.description }}
							</p>
							<a
								:href="result.embed_url"
								target="_blank"
								class="btn btn-primary"
								>Watch</a
							>
						</div>
					</div>
				</div>
			</div>
			<div class="text-center my-3" v-else>
				No data found, try other filters...
			</div>
		</section>
	</main>
</template>
<script setup>
import axios from "axios";
import { ref, onMounted, renderSlot } from "vue";
import ToastComponent from "../components/Toast.vue";
import constants from "../constants.js";

const options = {
	method: "GET",
	url: "https://ted-talks-api.p.rapidapi.com/topics",
	headers: {
		"X-RapidAPI-Key": constants.TED_TALK_API,
		"X-RapidAPI-Host": "ted-talks-api.p.rapidapi.com",
	},
};

const errorMessage = ref("Something went wrong");
const showToast = ref(false);
const loading = ref(false);
const toast = (message) => {
	errorMessage.value = message;
	showToast.value = true;
};
const results = ref([]);
const topics = ref([]);
const params = ref({});
const selectedTopic = ref("");
const selectedAudio = ref("en");
const selectedSubtitle = ref("en");
const selectedSpeaker = ref("");

const getTalks = async () => {
	loading.value = true;
	options.url = "https://ted-talks-api.p.rapidapi.com/talks";
	const newOption = { ...options, params: {} };
	if (selectedTopic.value) newOption.params.topic = selectedTopic.value;
	if (selectedAudio.value) newOption.params.audio_lang = selectedAudio.value;
	if (selectedSubtitle.value)
		newOption.params.subtitle_lang = selectedSubtitle.value;
	if (selectedSpeaker.value) newOption.params.speaker = selectedSpeaker.value;
	const res = await axios.request(newOption).catch(function (error) {
		toast(error.data.errors[0]);
	});
	if (res && res.data && res.data.errors.length) {
		toast(res.data.errors[0]);
	}
	if (res && res.data) results.value = res.data.result.results;
	loading.value = false;
};

const slugToNormal = (slug) => {
	return slug.replace("_", " ");
};

const getParams = async () => {
	loading.value = true;
	const paramsProps = [
		"audio_languages",
		"subtitle_languages",
		"topics",
		"speakers",
	];
	const requests = paramsProps.map((url) =>
		axios.request({
			...options,
			url: "https://ted-talks-api.p.rapidapi.com/" + url,
		})
	);
	Promise.all(requests)
		.then((responses) => {
			// Process response data here
			responses.forEach((response) => {
				params.value[response.data.get] = response.data.result.results;
			});
			loading.value = false;
		})
		.catch((error) => {
			toast("Please input what you want to search");
			loading.value = false;
		});
};

onMounted(async () => {
	await getParams();
	await getTalks();
});
</script>
