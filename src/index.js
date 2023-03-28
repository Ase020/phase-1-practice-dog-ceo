document.addEventListener("DOMContentLoaded", () => {
   //    console.log("%c HI", "color: firebrick");

   // Challenge 1
   const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
   const imgContainer = document.querySelector("#dog-image-container");
   fetch(imgUrl)
      .then((res) => res.json())
      .then(({ message }) => {
         message.forEach((img) => {
            const imgTag = document.createElement("img");
            imgTag.src = img;
            imgTag.style.width = "500px";
            imgTag.style.height = "500px";
            imgContainer.append(imgTag);
         });
      });
});
