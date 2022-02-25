https://teachablemachine.withgoogle.com/models/INBPkcdgl/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/INBPkcdgl/model.json",modelReady)
}

function modelReady(){
    console.log("model ready");
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
if(error)
{
    console.log(error)
    //console.error(error)
}
else{
    console.log(results)

    r=Math.floor(Math.random()*255)+1;
    g=Math.floor(Math.random()*255)+1;
    b=Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").innerHTML='I CAN HEAR -'+results[0].label;
    document.getElementById("result_confidence").innerHTML='ACCURACY -'+(results[0].confidence*100).toFixed(2)+'%';

    document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")"
    document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")"

    img1=document.getElementById("image");
    
    label=results[0].label
    if(label=="CAT")
    {
        img1.src="https://cdn.dribbble.com/users/4107081/screenshots/9976207/media/1809db221885c1b795177c4a51f21cec.gif"
    
    }
     else if(label=="DOG")
    {
        img1.src="https://i.gifer.com/origin/89/893eae378321ccf6517776cfc87a666e.gif"
        
    }
    else if(label=="COW")
    {
        img1.src="https://c.tenor.com/v7BEN7B1EJYAAAAM/cow-cute.gif"
        
    }
    else if(label=="HORSE")
    {
        img1.src="https://cdn.dribbble.com/users/149398/screenshots/6556754/353-caballo.gif"
        
    }
    else if(label=="DOLPHIN")
    {
        img1.src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8082f55e-f61f-47f7-91cd-2b81209f8aed/d5erdxq-f7403731-395b-4945-b2aa-6ad3131d032b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgwODJmNTVlLWY2MWYtNDdmNy05MWNkLTJiODEyMDlmOGFlZFwvZDVlcmR4cS1mNzQwMzczMS0zOTViLTQ5NDUtYjJhYS02YWQzMTMxZDAzMmIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IhFPTj0oMMGMk_e0jHoPvZcFAokTJTcMu6YnQHXD62c"
        
    }
   else
    {
        img1.src="https://media3.giphy.com/media/yZ9unuhuUemYvoeQaR/giphy.gif?cid=6c09b95286owt1mtclpsp985s53o37vxysemvsl5tzfd0okx&rid=giphy.gif&ct=s"
        
    }
}
}