# aio-storage

### read and write files by localStorage and local text files

### install
```javascript
npm install aio-storage
```

### usage
##### first import AIOStorage class. then create an instance by a defined key. 
```javascript
import AIOStorage from 'aio-storage';

let Storage = new AIOStorage('my key');

```

### save
##### for save a value in localStorage follow below:
```javascript
Storage.save({
  name:'userInfo',
  value:{
    firstname:'john',
    lastname:'doe'
  }
});
Storage.save({name:'date',value:'2022/3/4'});
```
##### for save a value call instance.save by an object parameter contain: 
- ##### name : string ( after you can load this value by this name )
- ##### value : any ( a value for save in local storage ) 

### load
##### for load a value from localStorage follow below:

```javascript
let userInfo = Storage.load({
  name:'userInfo',
  def:{}
});
let date = Storage.load({
  name:'date',
  def:'2023/3/3',
  time:60000
});
console.log(userInfo) //{name:'john',family:'doe'}
console.log(date) //before 1 minute from save it date will be '2022/3/4' and after it date will be 2023/3/3
```
##### for load a value, call instance.load by an object parameter contain: 
- ##### name : string ( name of saved value )
- ##### def : any ( if this name is not in storage, def value will save on it and load method will return this value )
- ##### time : miliseconds number ( setting time is optional . for example if you set it 60000 , storage will load it for 1 minute and after it dont load it )

##### if use def , then that is not required for save a value , because load method will save it if not exist

### remove
##### remove a value from storage by send its name
```javascript
Storage.remove({name:'date'});
```
### reset
##### localStorage will reset and all values will be removed
```javascript
Storage.reset();
```

### getModel
##### get storage model contain all saved values
```javascript
Storage.getModel();
```
### export 
##### download storage content as a text file. after you can import that. this is for save storage model on local file system and prevent miss it after clearing cache
```javascript
Storage.export();
```
### import 
##### read saved text file from export by input file and send it to import method for updating storage, also you can send a callback for call after it(important because import is not an async action). 
```javascript
Storage.import({file,callback});
```
