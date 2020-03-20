import { Content } from "../core/domain/Content";

export default interface IContentRepository {

	load(signature : string, callback: (content : Content | null) => void) : void;

}

export class ContentRepository implements IContentRepository {

	private _contents : { [key:string] : Content } = {}

	constructor(){

		this.append({
			signature : "page0",
			title : "Introduction#1",
			body : `
This application is designed with Clean Architecture.

### Structure

- Web
	- Controller
	- Presenter
	- Components (Vue Component)
- Data
	- Repository
- Core
	- Domain (Entity)
	- UseCase
			`
		})

		this.append({
			signature : "page1",
			title : "Introduction#2",
			body : `
app directory contains all sample codes
			`
		})

	}

	load(signature : string, callback: (content : Content | null) => void){
		
		if(this._contents[signature]){
			callback(this._contents[signature])
			return
		}

		callback(null)
	}

	private append(content : Content){
		this._contents[content.signature] = content
	}

}