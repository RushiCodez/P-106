function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true})();
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/OKqf3R-9Z/model.json',modelready);
    }
    
    function modelready(){
    classifier.classify(got_results);
    
    }
    
    function got_results(error, results){
        console.log('got_result');
    }