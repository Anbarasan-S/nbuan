var natural=require('natural');
let value=undefined;
const func=async()=>{
await natural.BayesClassifier.load('classifier.json', null, function(err, classifier) {
    value=classifier.classify("profane");
    console.log(value);//Then only it executes
});
}
func();
console.log(value) //first this one executes
