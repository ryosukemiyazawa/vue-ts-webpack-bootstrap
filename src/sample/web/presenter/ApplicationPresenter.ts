import { IContentUseCase, ContentUseCaseOutput } from "../../core/usecase/IContentUseCase";
import { Content } from "../../core/domain/Content";
import SampleContent from "@/sample/SampleContent";

export default class ApplicationPresenter implements ContentUseCaseOutput {

	private _usecase : IContentUseCase;

	constructor(usecase : IContentUseCase){
		this._usecase = usecase
		this._usecase.listen(this)
	}
	
	/* ContentUseCaseOutput */
	
	onLoadContent(content: Content): void {
		SampleContent.shared.$store.SET_CONTENT(content)
	}

	onFailedLoadContent(): void {
		let content : Content = {
			signature: "error",
			title : "エラー",
			body : "ページが見つかりません"
		}
		SampleContent.shared.$store.SET_CONTENT(content)
	}
	


}