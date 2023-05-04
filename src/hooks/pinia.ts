// 引入创建pinia的构造函数：
import { createPinia } from 'pinia'
// 引入小菠萝本地存储：
import persisted from 'pinia-plugin-persistedstate'
// 掉用createPinia创建小菠萝：
let pinia = createPinia()
// 将存储挂载到小菠萝上：
pinia.use(persisted)
// 将小菠萝暴露出去：
export default pinia
