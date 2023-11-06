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
  def:'2023/3/3'
});
console.log(userInfo) //{name:'john',family:'doe'}
console.log(date) //'2022/3/4'
```
##### for load a value, call instance.load by an object parameter contain: 
- ##### name : string ( name of saved value )
- ##### def : any ( if this name is not in storage, def value will save on it and load method will return this value )

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
