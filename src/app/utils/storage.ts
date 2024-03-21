export function setStorage(name:string, value:any){
  return window.localStorage.setItem(name, value);
};

export function rmStorage(name:string){
  return window.localStorage.removeItem(name);
}

export function getStorage(name:string){
  return window.localStorage.getItem(name);
}
