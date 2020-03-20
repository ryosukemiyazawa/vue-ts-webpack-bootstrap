import { IContentUseCase } from "@/sample/core/usecase/IContentUseCase"

export default interface IApplicationController {

	chanePage(signature : string) : void

}

export class ApplicationControllerImpl implements IApplicationController {

	private _usecase : IContentUseCase

	constructor(usecase : IContentUseCase){
		this._usecase = usecase
	}

	chanePage(signature : string) : void {
		this._usecase.load({ signature : signature })
	}

}