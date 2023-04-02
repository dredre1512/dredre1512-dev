<template>
	<main class="bg-gray card p-2 p-md-5">
		<h1>Country API</h1>
		<section class="overflow-auto x-flow">
			<div class="my-3">
				<i
					>You can click each country to open new tab and see their map in the
					globe</i
				>
			</div>
			<div class="input-group mb-5">
				<span class="input-group-text" id="basic-addon1">Search</span>
				<input
					v-model="keyword"
					type="text"
					class="form-control"
					placeholder="Country, Region, Capital etc."
					aria-label="search"
					aria-describedby="basic-addon1"
				/>
			</div>
			<div v-if="isLoading">
				<div class="text-center card p-3">
					<span><i>Loading...</i></span>
				</div>
			</div>
			<div v-else-if="isEmpty" class="text-center text-muted card p-3">
				<span>No news found.</span>
			</div>
			<table
				v-else
				class="table table-striped table-hover w-100 table-bordered"
			>
				<thead>
					<tr>
						<th scope="col">Flag</th>
						<th scope="col">CIOC</th>
						<th scope="col" @click="sortByName()">Name</th>
						<th scope="col">Timezones</th>
						<th scope="col">Official Name</th>
						<th scope="col">Region</th>
						<th scope="col">Subregion</th>
						<th scope="col">Population</th>
						<th scope="col">Capital</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="(country, idx) in countriesFiltered"
						:key="country.cioc"
						@click="openNewTab(country.maps.googleMaps)"
					>
						<td><img :src="country.flags.svg" style="width: 2em;" /></td>
						<td>{{ country.cioc }}</td>
						<th scope="row">{{ country.name.common }}</th>
						<th>{{ country.timezones && country.timezones.join(", ") }}</th>
						<td>{{ country.name.official }}</td>
						<td>{{ country.region }}</td>
						<td>{{ country.subregion }}</td>
						<td>
							{{
								country.population && country.population.toLocaleString("en-US")
							}}
						</td>
						<td>{{ country.capital && country.capital.join(", ") }}</td>
					</tr>
				</tbody>
			</table>
		</section>
	</main>
</template>
<script setup>
import axios from "axios";
import { ref, onMounted, computed } from "vue";
const countries = ref([]);
const isLoading = ref(false);
const isEmpty = ref(false);
const nameIsAsc = ref(false);
const keyword = ref("");

const countriesFiltered = computed(() => {
	if (countries.value && countries.value.length === 0) return [];
	const k = keyword.value.toLocaleLowerCase();
	return countries.value.filter((c) => {
		const name = c.name && c.name.common.toLocaleLowerCase();
		const cap = c.capital && c.capital.join(", ").toLocaleLowerCase();
		const off = c.official && c.official.toLocaleLowerCase();
		const reg = c.region && c.region.toLocaleLowerCase();
		const subregion = c.subregion && c.subregion.toLocaleLowerCase();
		const cioc = c.cioc && c.cioc.toLocaleLowerCase();
		return (
			(name && name.includes(k)) ||
			(cap && cap.includes(k)) ||
			(off && off.includes(k)) ||
			(reg && reg.includes(k)) ||
			(cioc && cioc.includes(k)) ||
			(subregion && subregion.includes(k))
		);
	});
});

const sortByName = () => {
	nameIsAsc.value = !nameIsAsc.value;
	let tempArr = [...countries.value];
	tempArr.sort((a, b) => {
		if (a.name.common > b.name.common) return nameIsAsc.value ? 1 : -1;
		if (a.name.common < b.name.common) return nameIsAsc.value ? -1 : 1;
		return 0;
	});
	countries.value = tempArr;
};
const openNewTab = (googleMaps) => {
	window.open(googleMaps, "_newtab");
};
onMounted(async () => {
	if (countries.value.length === 0) {
		let res = await axios.get("https://restcountries.com/v3.1/all");
		countries.value = res.data;
	}
});
</script>
<style scoped>
.x-flow {
	width: 100%;
	overflow-x: auto;
}
</style>
