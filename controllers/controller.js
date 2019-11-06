let model = require('../models/model');

exports.checkUser = (req,res,next) => {
    if(req.body.name === "A01043750" && req.body.password === "password") {
        let People = model.getPeople();
        People.then( ([data,metadata]) => {
           
          res.render('./partials/artistPage',{artists:data,artistsJS:true});
        });
    }
    else {
         res.send('<!DOCTYPE html> <html> <body><script>function myFunction()' +
         '{alert("Incorrect UserName or Password");}myFunction();</script></body></html>')
    }
};



exports.displayUsers = (req,res,next) => {
    
    if(true) {
        let People = model.getPeople();
        People.then( ([data,metadata]) => {
           console.log(data[0])
          res.render('./partials/artistPage',{artists:data,artistsJS:true});
        });
    }
    
};

exports.logout = (req,res,next) => {
    
    res.redirect(301,'/');
   
};



exports.addArtist = (req,res,next) => {
    let p_name = req.body.name;
    let p_about = req.body.about;
    let p_imageURL = req.body.imageURL;
    
    let pOject = {
       name: p_name,
       about: p_about,
       imageURL: p_imageURL
    }

    if(p_name != ""&& p_about != "" && p_imageURL !="") {
        model.add(pOject);
        res.redirect(301,'/artistpage');
    }   
   
    
}



exports.deleteArtist = (req,res,next) => {
    let p_name = req.body.name;
    let p_about = req.body.about;
    let p_imageURL = req.body.imageURL;

    let deletePeople = model.delete(p_name,p_about);
    deletePeople.then( ([data,metadata]) => {
           
    
             
        //   res.render('./partials/artistPage',{artists:data,artistsJS:true});
        res.send('asd')
    });
    

    
}

exports.deleteArtistDisplay = (req,res,next) => {
    console.log('Controller deleteArtistDisplay')
    let People = model.getPeople();
        People.then( ([data,metadata]) => {
           console.log(data[0])
          res.render('./partials/artistPage',{artists:data,artistsJS:true});
        });
}


exports.searchArtist = (req,res,next) => {
    let name = req.body.input
    console.log('Controller search')
    let People = model.getPeopleSearch(name);
        People.then( ([data,metadata]) => {
           console.log(data[0])
           res.render('./partials/artistPage',{artists:data,artistsJS:true});
        
        });
    
}