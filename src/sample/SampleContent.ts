import ApplicationPresenter from "./web/presenter/ApplicationPresenter";
import IApplicationController, { ApplicationControllerImpl } from "./web/controller/IApplicationController";

//import vuex
import Vue from "vue";
import Vuex from "vuex";
import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import { Content } from "./core/domain/Content";
import ContentUseCaseImpl from "./core/usecase/impl/ContentUseCaseImpl";
import { ContentRepository } from "./data/ContentRepository";
Vue.use(Vuex);

//Store
interface ContentStore {
	content : Content | null
	
}
const store = new Vuex.Store<ContentStore>({})

@Module({ dynamic: true, name : "content_store", store })
class Store extends VuexModule implements ContentStore{
	
	//state
	content : Content =  {
		signature: "loading",
		title : "読込中",
		body : "loading..."
	}


	@Mutation
	public SET_CONTENT(content : Content) {
		console.log("set_content", content.body)
		this.content = content
	}


}


export default class SampleContent {
	
	private static instance: SampleContent;

	static get shared() : SampleContent {
		if (!SampleContent.instance) {
			SampleContent.instance = new SampleContent();
		}

		return SampleContent.instance;
	}

	public controller!: IApplicationController;
	public presenter!: ApplicationPresenter;
	$store! : Store;

	constructor(){
		this.initialize();
	}

	initialize(){
		
		this.$store = getModule(Store);

		let repos = new ContentRepository()
		let usecase = new ContentUseCaseImpl(repos)

		this.presenter = new ApplicationPresenter(usecase)
		this.controller = new ApplicationControllerImpl(usecase)

		
	}

	onmount(){

		this.controller.chanePage("page0")
	}

}
