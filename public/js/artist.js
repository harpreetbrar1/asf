function addArtistFunction() {
    
    var mainartistDiv = document.getElementsByClassName('main_artist_div');
    
      //mainartistDiv[0].innerHTML=localStorage.getItem(1);
      var artist = document.createElement("div");
      //artist.style.display= "none";
      artist.style.marginLeft="33%";
      artist.style.width="30%";
      artist.style.border="solid lightgray";
      artist.style.borderRadius= "5px";
      artist.style.height="100px";
      artist.setAttribute('class', 'artistClass');
      //Artist Image
      var artistImage = document.createElement("img");
      artistImage.src = imageUrl;
      artistImage.style.width = "80px";
      artistImage.style.height= "80px";
      artistImage.setAttribute('class', 'artistImage');
      artist.appendChild(artistImage);
      //Artist Name
      var artistName = document.createElement("div");
      artistName.style.marginLeft="25%";
      artistName.style.marginTop="-20%";
      artistName.style.fontWeight="bold";
      artistName.style.color="black";
      artistName.style.fontSize="25px";
      artistName.setAttribute('class', 'artistName');
      artistName.appendChild( document.createTextNode(name) );
      artist.appendChild(artistName);
      
      //Artist About
      var artistAbout = document.createElement("div");
      artistAbout.style.marginLeft="25%"; 
      artistAbout.style.fontWeight="unset";
      artistAbout.style.fontSize="20px";
      artistAbout.appendChild( document.createTextNode(about) );
      artistAbout.setAttribute('class', 'artistAbout');
      artist.appendChild(artistAbout);
      //Delete Button
      var artistDeleteBtn = document.createElement("button");
      artistDeleteBtn.style.height="30px";
      artistDeleteBtn.style.width="60px";
      artistDeleteBtn.style.marginTop="-2.5%";
      artistDeleteBtn.style.borderRadius="10px"; 
      artistDeleteBtn.style.marginLeft="24%";
      artistDeleteBtn.style.backgroundColor="red";
      artistDeleteBtn.style.color="white";
      artistDeleteBtn.style.position= "absolute";
      artistDeleteBtn.setAttribute("class", "deletebtn");
      artistDeleteBtn.appendChild( document.createTextNode("Delete"));
      artist.appendChild(artistDeleteBtn);
      
    
      mainartistDiv[0].appendChild(artist);
    
      artistDeleteBtn.onclick = function() {
        mainartistDiv[0].removeChild(artist)
      
    
        var s = document.getElementsByClassName('deletebtn'); 
        var x = document.getElementsByClassName('artistClass');
        var dName = document.getElementsByClassName('artistName');
        var dAbout = document.getElementsByClassName('artistAbout');
        var dImage = document.getElementsByClassName('artistImage');
      
    
    
    
        let artistTextArray = []
        for(let i=0; i < x.length; i++) {
          
        let artistTextLine = dName[i].innerHTML + ' ' + dAbout[i].innerHTML+' ' + dImage[i].src+ ' '  + '\n'
        //console.log(artistTextLine)
          artistTextArray[i]=artistTextLine;
             
        }
    
      //  deleteArtist(artistTextArray);
      }
      var mainartistDiv3 = document.getElementsByClassName('main_artist_div');
     // localStorage.setItem(1,mainartistDiv3[0].innerHTML);
      //console.log(localStorage.getItem(1));
      // getArtists();
    }
    