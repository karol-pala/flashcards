const Dictonary = require('../models/dictonary')

const NOT_IMPLEMENTED = "NOT IMPLEMENTED"

exports.dictonary_list = function(req, res){
    Dictonary.find()
        .exec(function(err, list){
            if(err) {return next(err)}
            res.render('dictonary_list', {
                title: "Dictonaries",
                dict_list: list
            })
        })
}

exports.dictonary = function(req, res){
    res.render('index', {text: `${NOT_IMPLEMENTED}: one dictonary`})
}


//should send form for dictonary
exports.dictonary_create_get = function(req, res){
    res.render('form', {
        action: "/catalog/dictonary/create", 
        method: "POST",
        text: "create dictonary",
        inputs: ['name', 'author', 'description']
    })
}


//should post new dictonary to database
exports.dictonary_create_post = function(req, res){
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

exports.dictonary_update_get = function(req, res){
    const id = req.params.id;
    Dictonary.findById(id).exec(function(err, dict){
        if(err) return next(err);
        res.render('updateForm', {
            text: 'update form',
            action: dict.url,
            method: "POST",
            dict: dict
        })
    })
}

exports.dictonary_update_post = function(req, res){
    Dictonary.findByIdAndUpdate(req.params.id, req.body, function(err, response){
        if(err) res.send(`Error in updating dictonary with id: ${req.params.id}`)
        res.redirect('/');
    })
}

// exports.dictonary_delete_get = function(req, res){
//     const id = req.params.id;
// }

exports.dictonary_delete_post = function(req, res){
    const id = req.params.id;
    Dictonary.findByIdAndDelete(id, function(err){
        if(err){
            res.render('index', {text: 'Database error'})
        } else {
            res.redirect('/')
        }
    })
}