<template>
	<nav class="shadow navbar navbar-expand-lg bg-body-tertiary sticky-top">
		<div class="container">
			<a class="navbar-brand" href="#">API</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li
						v-for="(link, idx) in links"
						:key="'link-' + idx"
						class="nav-item"
					>
						<router-link
							class="nav-link"
							:class="{ active: activeLink === link.path }"
							:aria-current="activeLink === link.path"
							:to="link.path"
						>
							{{ link.name }}
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const links = ref([
	{ name: "Home", path: "/" },
	{ name: "Cats", path: "/cats" },
	{ name: "Quotes", path: "/quotes" },
	{ name: "TedTalk", path: "/ted-talk" },
	{ name: "News", path: "/news" },
	{ name: "Countries", path: "/countries" },
]);
const activeLink = computed(() => {
	return route.path;
});
</script>
