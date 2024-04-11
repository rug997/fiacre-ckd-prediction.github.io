
let clear = window.document.getElementsByClassName('prediction');
 var submitFeatures= document.getElementsByClassName('fillingForm');
function clearForm() {
 for (let i = 0; i < clear.length; i++) {
        clear[i].style.display = 'none';
    };

for (var i = 0; i < submitFeatures.length; i++) {
    submitFeatures[i].style.width = '40%';
    submitFeatures[i].style.height = '50%';
    submitFeatures[i].style.padding = '2%';
    submitFeatures[i].style.borderRadius = '12px';
    submitFeatures[i].style.marginTop = '2%';
    submitFeatures[i].style.backgroundColor = 'rgba(5, 124, 952, 0.2)';

}
};

let button1 = window.document.getElementsByClassName('btn')[1]; 
button1.addEventListener('click', clearForm);


function submission() {
        var predicting = document.getElementsByClassName('prediction');
        
        for (var i = 0; i < predicting.length; i++) {
            predicting[i].style.display = 'flex';
        };
}