# aio-storage

### read and write files by localStorage and local text files

### install
```javascript
npm install aio-storage
```

### usage
```javascript
import AIOStorage from 'aio-storage';

let Storage = AIOStorage('my key');

```

### save
```javascript
Storage.save({name:'john',family:'doe'},'userInfo');
Storage.save('2022/3/4','date');
```

### load
```javascript
let userInfo = Storage.load('userInfo');
let date = Storage.load('date');
//userInfo = {name:'john',family:'doe'}
//date = '2022/3/4'
```

### getList
```javascript
let list = Storage.getList();
//list = ['userInfo','date']
```
### remove
```javascript
Storage.remove('date');
let list = Storage.getList();
//list = ['userInfo']
```
### reset
```javascript
Storage.reset();
let list = Storage.getList();
//list = []
```
### import
```javascript
//import saved database in text file to Storage class
//open text file by input type file and in onchange event write these codes:
//send a callback as second parameter for actions after import
let list = [];
Storage.import(e.target.files[0],()=>{
  list = Storage.getList();
  //.....
});

```

### export
```javascript
//download saved database in text file to your hard disk
//this function will ask you filename by propmt
Storage.export();
```

### download
```javascript
//download any value in text file (value is first parameter)
//second parameter is filename
Storage.download(value,'my text file');
```

### read
```javascript
//read text file
//second parameter is filename
let content;
Storage.read(e.target.files[0],(res)=>content = res);
```
