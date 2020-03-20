/*
 * app bootstratp
 * usage
 *  - app.run("element-id", { "foo" : "bar "})
 */
import Vue from 'vue';
import Vuex from 'vuex'

import sample from "./sample";

let run = (elm_id : string, config : any) => {

	//Vueの初期化
	Vue.use(Vuex);

	//コンポーネントのマウント
	let v : Vue = new Vue({
		el: "#" + elm_id,
		template: `
			<app />
		`,
		components : {
			"app" : sample.components.ApplicationContainer
		},
		mounted : () => {
			sample.app.onmount()
		}
	});

}

export {
	run
}