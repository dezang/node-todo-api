const {MongoClient, ObjectID} = require('mongodb');

const user = {name: 'Dezang', age: 30};
const {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })

  // db.collection('Users').deleteMany({name: 'Dezang'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("584cfd32bfe9698a60aaaa87")
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  // db.close();
});
