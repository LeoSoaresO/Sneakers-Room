import { getStorage } from "src/app/utils/storage";

const tokenValid:boolean = true;
const tokenInvalid:boolean = false;

export function checkLogin(){
	let user = getStorage('token')
    if (user) {
			return tokenValid
		} else {
			return tokenInvalid
		}
}
