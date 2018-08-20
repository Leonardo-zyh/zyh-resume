var APP_ID = '30FJxNRGUl44IppYUSj40Thw-gzGzoHsz';
var APP_KEY = 'SSl3FACzzTQv2pCNMxkNh6T8';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});




//创建 TestObject 表
var TestObject = AV.Object.extend('Message');
//在表中创建一行数据
var testObject = new TestObject();
//数据内容是words: 'Hello World!'
//如果保存就运行， alert('');
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})