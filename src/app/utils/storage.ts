export function setStorage(name:string, value:any){
  return window.localStorage.setItem(name, JSON.stringify(value));
};

export function rmStorage(name:string){
  return window.localStorage.removeItem(name);
}

export function getStorage(name:string){
	let t:any = window.localStorage.getItem(name);
	return JSON.parse(t);
}
