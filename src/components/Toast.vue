<template>
	<div
		id="myToastEl"
		class="toast bg-danger text-white align-items-center right-0 float-end m-2 position-absolute text-capitalize"
		role="alert"
		aria-live="assertive"
		aria-atomic="true"
	>
		<div class="d-flex">
			<div class="toast-body">
				{{ message }}
			</div>
			<button
				type="button"
				class="btn-close btn-close-white me-2 m-auto"
				data-bs-dismiss="toast"
				data-bs-autohide="true"
				aria-label="Close"
			></button>
		</div>
	</div>
</template>
<script>
import { Toast } from "bootstrap";
export default {
	props: ["message"],
	emits: ["hide"],
	mounted() {
		const myToastEl = document.getElementById("myToastEl");
		var myToast = new Toast(myToastEl);
		myToastEl.addEventListener("hidden.bs.toast", () => {
			this.$emit("hide");
		});
		myToast.show();
	},
};
</script>
<style>
.toast {
	z-index: 99999;
}
</style>
