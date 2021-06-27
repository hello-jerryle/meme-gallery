var imageUrls = [
  'https://i.pinimg.com/originals/eb/a2/14/eba21443ca4d71cc9552a26aaf8c165e.jpg',
  'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/11/16/12/homer-simpson.jpeg?width=1200',
  'https://mtv.mtvnimages.com/uri/mgid:ao:image:mtv.com:282?quality=0.8&format=jpg',
  'https://cdn.costumewall.com/wp-content/uploads/2015/09/marge-simpson-tn.jpg',
  'https://culturedvultures.com/wp-content/uploads/2020/08/Milhouse-The-Simpsons.jpg',
  'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-19011-20140721-krusty-1800-1405966490.jpg'
];
var gallery = document.querySelector('main');
var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener("click", function(event) {
  if (imageUrlInput.value !== '') {
  imageUrls.push(imageUrlInput.value);
}
imageUrlInput.value = ''
updateGallery();
});

function updateGallery() {
  gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
};

updateGallery();
