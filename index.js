export default function StorageClass(key){
  if(!key){return}
  let a = {
    init(){
      let res = localStorage.getItem('storageClass' + key);
      if(res === undefined || res === null){this.set({list:{}});}
      else{this.set(JSON.parse(res))}
    },
    set(obj = this.obj){
      this.obj = obj;
      localStorage.setItem('storageClass' + key,JSON.stringify(obj));
    },
    save(o,name,confirm){
      o = JSON.parse(JSON.stringify(o))
      if(!this.obj){this.init()}
      if(!name){name = window.prompt('Save As');}
      if(!name || name === null){return}
      if(confirm && this.obj.list[name] !== undefined){
        let res = window.confirm('Replace ' + name + ' ?');
        if(!res){this.save(o); return;}
      }
      this.obj.list[name] = o;
      this.set();
    },
    remove(name){
      let res = {};
      for(let prop in this.obj.list){if(prop !== name){res[prop] = this.obj.list[prop]}}
      this.obj.list = res;
      this.set();
    },
    getList(){return Object.keys(this.obj.list)},
    load(name){if(!this.obj){this.init()} return this.obj.list[name]},
    clear(){localStorage.clear(key);},
    reset(){this.set({list:{}})},
    download(file,name) {
      let text = JSON.stringify(file)
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', name);
      element.style.display = 'none'; 
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    },
    export(){
      let name = window.prompt('Please Inter File Name');
      if(name === null || !name){return;}
      this.download(this.obj,name)
    },
    read(file,callback = ()=>{}){
      var fr=new FileReader();
      fr.onload=()=>{
          try{callback(JSON.parse(fr.result));}
          catch{return;}
      } 
      fr.readAsText(file);
    },
    import(file,callback = ()=>{}){
      if(Array.isArray(file)){file = file[0]}
      this.read(file,(obj)=>{
        if(obj === undefined){return;}
        this.set(obj);
        callback()
      })
    }
  }
  a.init();
  return {
    save:a.save.bind(a),
    load:a.load.bind(a),
    getList:a.getList.bind(a),
    reset:a.reset.bind(a),
    clear:a.clear.bind(a),
    remove:a.remove.bind(a),
    export:a.export.bind(a),
    read:a.read.bind(a),
    download:a.download.bind(a),
    import:a.import.bind(a)
  }
}