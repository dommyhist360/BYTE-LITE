


const {Hamza} = require('../TalkDrove/Hamza');
var gis = require('g-i-s');


Hamza({
  nomCom: "img",
  categorie: "Search",
  reaction: "📷"
},
async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  if (!arg[0]) {
    repondre( '*What type of image you want to search?*');
    return;
  }

  const searchTerm = arg.join(" ");
  //repondre("termes " +searchTerm);
  gis(searchTerm,envoiImage);

  function envoiImage(e,r)
   {
        if(e){repondre("oups une error ")}else{for(var a=0;a<5;a++){zk.sendMessage(dest,{image:{url:r[a].url}},{quoted:ms});}}
    
   }

 //gis(searchTerm,envoiImage);
      
});
