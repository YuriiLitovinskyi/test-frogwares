import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
	mutations: {
		SetMainPageInfo(state, mainPageInfo) {
			state.mainPageInfo = mainPageInfo;
		},
		SetGeneralQuestinfo(state, generalQuestInfo) {
			state.generalQuestInfo = generalQuestInfo;
		},
		SetFinishedQuestleafs(state, finishedQuestleafs) {
			state.finishedQuestleafs = finishedQuestleafs;
		}
	},
	actions: {
		FetchMainPageInfo({ commit }) {
			axios
			.get("http://localhost:3004/")
			.then((response) => {
				commit("SetMainPageInfo", response.data);
				//console.log(response.data);
			})
			.catch((error) => {
				console.log(error.statusText);
			})
		},
		FetchGeneralQuestInfo({ commit }) {
			axios
			.get("http://localhost:3004/general")
			.then((response) => {
				commit("SetGeneralQuestinfo", response.data);
				//console.log(response.data);
			})
			.catch((error) => {
				console.log(error.statusText);
			})
		},
		FetchFinishedQuestleafs({ commit }) {
			axios
			.get("http://localhost:3004/finished")
			.then((response) => {
				commit("SetFinishedQuestleafs", response.data);
				//console.log(response.data);
			})
			.catch((error) => {
				console.log(error.statusText);
			})
		}
	},
	state: {
		mainPageInfo: [],
        generalQuestInfo: [], 
		finishedQuestleafs: []
	},
	isActive: 0    ////this value is changing according to icon that was clicked in table from MainTable.vue
});