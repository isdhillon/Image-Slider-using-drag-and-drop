//Declarations
let dropArea=document.querySelector(".image-container");
let file;
let image=document.querySelector(".image");
let leftArrow=document.querySelector(".left");
let rightArrow=document.querySelector(".right");
let idx=0;
let images=[];

//Event listener on dragover
dropArea.addEventListener("dragover",function(e){
    e.preventDefault();
})
//Event listener on drop
dropArea.addEventListener("drop", async function(e){
    e.preventDefault();
    file=e.dataTransfer.files[0];
    uploadFile(file)
})
//left arrow
leftArrow.addEventListener("click",function(){
    //managing index
    if(idx==0){
        idx=images.length-1;
    }
    else{
        idx--;
    }
    //updating image
    let imageSelected=images[idx]
    image.setAttribute("src",imageSelected);
})
//right arrow
rightArrow.addEventListener("click",function(){
    //managing index
    if(idx==images.length-1){
        idx=0;
    }
    else{
        idx++;
    }
    //updating image
    let imageSelected=images[idx]
    image.setAttribute("src",imageSelected)
})
//function
function uploadFile(file){
    //file reader
    let fileReader=new FileReader();
    //on load
    fileReader.onload=()=>{
        //get the url
        let fileUrl=fileReader.result;
        //pushing the url in the array
        images.push(fileUrl);
        //setting the src on the element
        image.setAttribute("src",`${fileUrl}`)
    }
    //read the file url
   fileReader.readAsDataURL(file);
}