<template>
	<div>
		<h1>张三</h1>
		<ul>
			<li v-for="(u, index) in users" :key="index">
				{{ u.name }}
			</li>
		</ul>
	</div>
</template>


<script lang="ts">
import { defineComponent, ref, onMounted, getCurrentInstance } from 'vue'
// ref将数据设置为响应式，读取ref响应式的值需要通过 .value
// getCurrentInstance -- 调用全局方法的函数，先引用，再声明，最后使用：
export default defineComponent({
	setup() {
		// vue3中无法再使用this，调用全局方法需要使用👇getCurrentInstance：
		const { proxy }: any = getCurrentInstance()
		// 声明一个类型为任意类型的数组用以接收axios请求回来的数据：
		const users = ref<any[]>([])
		// 👇onMounted--生命周期钩子，组件挂载完成后执行：
		onMounted(() => {
			proxy.$http.get('/index.json').then((result: any) => {
				if (result.state > 0) {
					alert(result.message)
					return
				}
				console.log(result.data);
				users.value = result.data
				// console.log(users.value);
			})
		})
		return {
			users

		}
	},
})
</script>
