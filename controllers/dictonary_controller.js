const Dictonary = require('../models/dictonary')

//shows all dictonaries
exports.dictonaryList = function(req, res){
    Dictonary.find()
        .exec(function(err, list){
            if(err) {return next(err)}
            res.render('dictonary_list', {
                title: "Dictonaries",
                dict_list: list
            })
        })
}

//shows one dictonary
exports.dictonary = function(req, res){
    const id = req.params.id;
    Dictonary.findById(id).exec(function(err, response){
        if(err){
            res.render('index', {text: 'Databse error'})
        } else {
            res.render('dictonary', {
                dict: response
            })
        }
    })
}


//sends form for dictonary
exports.dictonaryCreateGet = function(req, res){
    res.render('dictonary_form', {
        action: "/catalog/dictonary/create", 
        method: "POST",
        text: "create dictonary",
        inputs: ['name', 'author', 'description']
    })
}


//posts new dictonary to database
exports.dictonaryCreatePost = function(req, res){
    const dictInfo = req.body;
    let newDict;
    if(!dictInfo.name || !dictInfo.author || !dictInfo.description){
        res.render('index', {text: "Error! Wrong data"})
    } else {
        newDict = new Dictonary({
            name: dictInfo.name,
            author: dictInfo.author,
            description: dictInfo.description
        })
    }
    newDict.save('err', function(err, Dictonary){
        if(err){
            res.render('index', {text: 'Database error'});
        } else {
            res.redirect('/');
        }
    })
}

//renders form for updating dictonary
exports.dictonaryUpdateGet = function(req, res){
    const id = req.params.id;
    Dictonary.findById(id).exec(function(err, dict){
        if(err) return next(err);
        res.render('dictonary_update', {
            text: 'update form',
            action: dict.url,
            method: "POST",
            dict: dict
        })
    })
}

//updates dictonary in DB
exports.dictonaryUpdatePost = function(req, res){
    Dictonary.findByIdAndUpdate(req.params.id, req.body, function(err, response){
        if(err) res.send(`Error in updating dictonary with id: ${req.params.id}`)
        res.redirect('/');
    })
}

//deletes dictonary from DB
exports.dictonaryDeletePost = function(req, res){
    const id = req.params.id;
    Dictonary.findByIdAndDelete(id, function(err){
        if(err){
            res.render('index', {text: 'Database error'})
        } else {
            res.redirect('/')
        }
    })
}