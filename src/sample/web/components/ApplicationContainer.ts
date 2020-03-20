import { Component, Prop, Vue } from 'vue-property-decorator';
import SampleContent from '@/sample/SampleContent';
import { Content } from '@/sample/core/domain/Content';
import marked from "./lib/marked.js"

@Component({
	components: {
		
	}
})
export default class ApplicationContainer extends Vue { // s4

	page : number = 0

	get content() : Content {
		return SampleContent.shared.$store.content
	}

	get body() : string {
		return marked(this.content.body)
	}

	created(){
		console.log("created")
		console.log(marked);
	}

	mounted(){
		console.log("mounted ApplicationContainer")
	}

	updated(){
		console.log("updated ApplicationContainer")
	}

	selectPage(page : number){
		this.page = page
		SampleContent.shared.controller.chanePage("page" + page)
	}
}