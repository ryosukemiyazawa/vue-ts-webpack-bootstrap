import { Content } from "../domain/Content"

interface ContentUseCaseOutput {
	onLoadContent(content: Content) : void;
	onFailedLoadContent() : void;
}

type ContentUseCaseInput = {
	signature : string
}

interface IContentUseCase {

	listen(output: ContentUseCaseOutput) : void;
	load(input: ContentUseCaseInput) : void;

}

export { 
	IContentUseCase,
	ContentUseCaseInput,
	ContentUseCaseOutput
}