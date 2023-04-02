<template>
	<main class="bg-gray card p-2 p-md-5">
		<h1>Cat API</h1>
		<section>
			Select {{ selectedBreed }}
			<select
				v-model="selectedBreed"
				class="form-select"
				aria-label="Default select example"
			>
				<option
					:value="breed.id"
					v-for="(breed, idx) in breeds"
					:selected="idx === 0"
					>{{ breed.name }}</option
				>
			</select>
			<div v-if="breedInfo">
				<img
					:src="endpoints[0] + '/v1/images/' + breedInfo.reference_image_id"
					alt=""
				/>
				<h1>{{ breedInfo.name }}</h1>
				<h4>{{ breedInfo.origin }}</h4>
				<p>{{ breedInfo.description }}</p>
				<p>
					<i>{{ breedInfo.temperament }}</i>
				</p>
				<div class="col-6">
					<table class="table">
						<tbody>
							<tr>
								<th scope="row">Weight</th>
								<td>{{ breedInfo.weight.metric }} Kg</td>
							</tr>
							<tr>
								<th scope="row">Life Span</th>
								<td>{{ breedInfo.life_span }} Years</td>
							</tr>
							<tr>
								<th scope="row">Altername Name</th>
								<td v-if="breedInfo.alt_names">{{ breedInfo.alt_names }}</td>
								<td v-else>N/A</td>
							</tr>
							<tr>
								<th scope="row">Wikipedia</th>
								<td colspan="2">
									<a href="breedInfo.wikipedia_url" target="_blank">{{
										breedInfo.wikipedia_url
									}}</a>
								</td>
							</tr>
							<tr
								v-for="prop in [
									'adaptability',
									'affection_level',
									'child_friendly',
									'dog_friendly',
									'energy_level',
									'grooming',
									'health_issues',
									'intelligence',
									'shedding_level',
									'social_needs',
									'stranger_friendly',
									'vocalisation',
									'experimental',
									'hairless',
									'natural',
									'rare',
									'rex',
									'suppressed_tail',
									'short_legs',
								]"
							>
								<th scope="row text-capitalize">
									{{ prop.replace("_", " ").toUpperCase() }}
								</th>
								<td colspan="2">
									<a>{{
										breedInfo[prop]
											? new Array(breedInfo[prop]).fill("&#x25CF;").join(" ")
											: "NO"
									}}</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	</main>
</template>
<script setup>
import axios from "axios";
import { ref, onMounted, computed } from "vue";
const breeds = ref([]);
const selectedEndpointIdx = ref(0);
const selectedBreed = ref("beng");
const endpoints = ref(["https://api.thecatapi.com"]);
const breedInfo = computed(() => {
	const idx = breeds.value.findIndex((b) => {
		return b.id === selectedBreed.value;
	});
	return breeds.value[idx];
});
const getBreeds = async () => {
	let res = await axios.get(
		endpoints.value[selectedEndpointIdx.value] + "/v1/breeds",
		{
			headers: "application/json",
		}
	);
	breeds.value = res.data;
};
onMounted(() => {
	getBreeds();
});
</script>
<style>
.text-capitalize {
	text-transform: capitalize;
}
</style>
