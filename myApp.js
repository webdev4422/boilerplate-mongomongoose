require('dotenv').config();
let mongoose = require('mongoose');
// Connect to database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Create schema
const personSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  age:  Number,
  favoriteFoods: Array
})

// Create model wrapper on schema
let Person = mongoose.model("Person", personSchema);


// // Create model(Person) instance - variant 1
// let ada = new Person({
//     name: "Ada",
//     age: 22,
//     favoriteFoods: ["porridge", "eggs", "yogurt"]
// })
// // Save model instance (ada)
// ada.save()
// .then(doc => {
//   console.log(doc)
// })
// .catch(err => {
//   console.error(err)
// })


// Create and save model instance (ada) - variant 2
// MongoDB database is empty because script in server.js remove items after invoking this functions
const createAndSavePerson = (done) => {
  let ada = new Person({
    name: "Ada",
    age: 22,
    favoriteFoods: ["porridge", "eggs", "yogurt"]
  })
  ada.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

// Create many instances of model
let arrayOfPeople = [{name: 'ada', age:22}, {name: 'jhon', age:25}, {name: 'test', age:100}]
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

// Find instance
const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function (err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, function (err, foodFound) {
    if (err) return console.log(err);
    done(null, foodFound);
  })
};

const findPersonById = (personId, done) => {
  Person.findById({_id: personId}, function (err, data) {
    if (err) return console.log(err);
    done(null, data);
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
