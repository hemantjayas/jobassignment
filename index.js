
const data = [
    {
        name: "blue",
        color: "#01a3e0",
        img: './assets/Blue_umbrella.png'
    },

    {
        name: "Pink",
        color: "#d0006f",
        img: './assets/Pink_umbrella.png'
    },
    {
        name: "Yello",
        color: "#fed141",
        img: './assets/Yello_umbrella.png'
    },

]

var colors = document.getElementById("colors");
var umbrella = document.getElementById("umbrella_img");
var loading = document.getElementById("loading");

data.map((item, i) => {
    let div = document.createElement('div');
    div.style.backgroundColor = item.color;
    div.addEventListener("click", function () {
        console.log(item)
        umbrella.src = item.img
        loading.style.display = "block";
        umbrella.style.display = "none";

        setTimeout(() => {
            loading.style.display = "none";
            umbrella.style.display = "block";
        }, 1000)

    });
    colors.append(div)

})

const changeColor = (para) => {
    cconsole.log(para)

}



// uploading file
var imageInput = document.getElementById("fileUpload");
var brandImage = document.getElementById("brandImage");

imageInput.addEventListener("change", () => {

    var uploadedFile = event.target.files[0];

    var reader = new FileReader()
    reader.onload = () => {
        brandImage.src = reader.result;
        brandImage.style.display = "block"
    }

    reader.readAsDataURL(uploadedFile)
})

