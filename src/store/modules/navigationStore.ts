import { defineStore } from 'pinia'
import { ref } from 'vue'

const getNavStore = defineStore(
	'navStore',
	() => {
		const navIndex = ref<number>(0)

		return {
			navIndex
		}
	},
	{
		persist: {
			key: 'navKey',
			storage: sessionStorage
		}
	}
)

export default getNavStore
