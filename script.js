var meineLinks = [
   "https://www.foto-mundus.de/media/image/ca/f8/e6/a6300_black_1650mm_top0256d994cfdfc4a_600x600.jpg",
   "https://cdn.idealo.com/folder/Product/560/5/560552/s2_produktbild_gross_1/takamine-ef341sc.jpg",
   "https://cdn.slant.co/779eb617-22fb-4bae-9388-3d43cd89cc2f/-/format/jpeg/-/progressive/yes/-/scale_crop/480x270/center/",
   "https://unity3d.com/files/images/ogimg.jpg",
   "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
   "https://de.web.img2.acsta.net/c_215_290/medias/nmedia/18/76/58/35/19446589.jpg",
   "https://i.pinimg.com/originals/2e/8f/bf/2e8fbf2a1f7f6bfcb33af883ed0886f1.jpg",
   "https://www.thomann.de/pics/prod/469091.jpg",
   "https://www.klangfarbe.com/bilder/A/A-A25443-5-2.jpg",
];


var randomPic = Math.random() * 8;
var index = Math.floor( randomPic );


console.log( meineLinks[ index ] );

function GeneratePic() {
  var index = Math.floor( Math.random() * meineLinks.length );
  console.log( meineLinks[ index ] );
  
  document.getElementById("Bild").src = meineLinks[ index ];
}



