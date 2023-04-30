<template>
	<div>
		<h1>张三</h1>
	</div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
	setup() {


		return {
			users: ref<any[]>([])
		}
	},
	mounted() {

	},
})
</script>
