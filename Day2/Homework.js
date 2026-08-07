
function test(nuumber)
{
    //let a= 25
if (nuumber>0) {
    console.log('the number is greater than 0');
    
}
else if (nuumber<0) {
     console.log('the number is less than 0');
}
else {
     console.log('the number is 0');
}
}test(0)
---------------------------------------------------------

function launchBrowser(){
    let browserName = 'model'
    if(browserName == 'chrome'){
        console.log('the vale is',browserName);
        
    }
    else{
        console.log('invalid');
        
    }
}launchBrowser() 
function runTests(testType){

    //let testType = 'smoke'

    switch(testType) {
        case "sanity":
            console.log('the value is sanity');
            break;
        case "regression":
            console.log('the value is regression');
            break;
        default :
            console.log('smoke test');
            
            break;
    }

}runTests("smoke");

--------------------------------------------
function studentsscore(score){

switch(true){

    case (score>80):
    console.log('Distiction');
    break;

    case (score>60):
    console.log('Firstclass');
    break;
            
    case (score>40):
    console.log('Secondclass');
    break;
                
    default :
    console.log('failed');
                           
}}studentsscore(20)
