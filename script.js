const imageContainer=document.getElementById("container");
const footer=document.querySelector("footer");


function photoFrame(src,title){
    const figure=document.createElement("figure");
    const img=document.createElement("img");
    img.src=src;
    const figCaption=document.createElement("figcaption");
    figCaption.innerText=title;
    figure.append(img,figCaption);

    imageContainer.appendChild(figure);

}

const options={
    threshold:1,

}
const URL ="https://gist.githubusercontent.com/prof3ssorSt3v3/1944e7ba7ffb62fe771c51764f7977a4/raw/c58a342ab149fbbb9bb19c94e278d64702833270/infinite.json";


async function fetchURl(){
    const response=await fetch(URL);
    const data=await response.json();
    let array=data.items;
    array.forEach((item)=>{
        photoFrame(item.img,item.name)


    })
 

}




const observer=new IntersectionObserver((entries,observer)=>{
    entries.forEach((entry)=>{
        if(!entry.isIntersecting){
            return;
        }
        else{
            fetchURl();
            console.log(entry.target)

        }
    })


},options)

observer.observe(footer)