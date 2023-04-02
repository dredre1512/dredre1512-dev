<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
	<NavBar />
	<div class="">
		<div class="container pt-5">
			<router-view></router-view>
		</div>
	</div>

	<div
		id="myToastEl"
		class="toast bg-danger text-white align-items-center right-0 float-end m-2 position-absolute"
		role="alert"
		aria-live="assertive"
		aria-atomic="true"
	>
		<div class="d-flex">
			<div class="toast-body">
				{{ errorMessage }}
			</div>
			<button
				type="button"
				class="btn-close me-2 m-auto"
				data-bs-dismiss="toast"
				data-bs-autohide="true"
				aria-label="Close"
			></button>
		</div>
	</div>
</template>

<style scoped>
.container {
	min-height: 100vh;
}
</style>
