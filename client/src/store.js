import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import { BASE_URL } from './main';

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		mainPageInfo: [],
        generalQuestInfo: [], 
		finishedQuestleafs: [],
		isActive: 0    //this value is changing according to icon that was clicked in table from MainTable.vue
	},
	getters: {
		getMainPageInfo(state) {
			return state.mainPageInfo;
		},
		getGeneralQuestInfo(state) {
			return state.generalQuestInfo;
		},
		getFinishedQuestLeafs(state) {
			return state.finishedQuestleafs;
		},
		getIsActiveValue(state) {
			return state.isActive;
		}
	},
	mutations: {
		SetMainPageInfo(state, mainPageInfo) {
			state.mainPageInfo = mainPageInfo;
		},
		SetGeneralQuestinfo(state, generalQuestInfo) {
			state.generalQuestInfo = generalQuestInfo;
		},
		SetFinishedQuestleafs(state, finishedQuestleafs) {
			state.finishedQuestleafs = finishedQuestleafs;
		},
		SetIsActiveValue(state, isActive) {
			state.isActive = isActive;
		}
	},
	actions: {
		FetchMainPageInfo({ commit }) {
			axios
			.get(`${BASE_URL}`)
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
			.get(`${BASE_URL}/general`)
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
			.get(`${BASE_URL}/finished`)
			.then((response) => {
				commit("SetFinishedQuestleafs", response.data);
				//console.log(response.data);
			})
			.catch((error) => {
				console.log(error.statusText);
			})
		}
	},		
});