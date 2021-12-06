var natural = require('natural'),
classifier = new natural.BayesClassifier();

const abusive_dataset=require('./bad.json');
abusive_dataset.forEach(data=>{
    classifier.addDocument(data.words,data.profane);
})
const good_dataset=require('./good.json')
good_dataset.forEach(data=>{
    classifier.addDocument(data.words,data.profane);
})
classifier.train();

classifier.save('classifier.json', function(err, classifier) {
    // the classifier is saved to the classifier.json file!
 });




 