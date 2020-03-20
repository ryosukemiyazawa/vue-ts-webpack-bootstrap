import { IContentUseCase, ContentUseCaseInput, ContentUseCaseOutput } from "../IContentUseCase";
import { Content } from "../../domain/Content";
import IContentRepository from "../../../data/ContentRepository";

export default class ContentUseCaseImpl implements IContentUseCase {

	private _repository : IContentRepository;
	private _output : ContentUseCaseOutput | null = null;

	constructor(repos : IContentRepository){
		this._repository = repos
	}

	listen(output: ContentUseCaseOutput) : void {
		this._output = output
	}

	load(input: ContentUseCaseInput) : void {

		let output = this._output || {
			onLoadContent(content: Content) : void {

			},
			onFailedLoadContent() : void {

			}
		}

		this._repository.load(input.signature, c => {
		
			if(!c){
				output.onFailedLoadContent()
				return
			}

			output.onLoadContent(c)

		})

	}

}