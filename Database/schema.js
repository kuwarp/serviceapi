const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  nameofpost: {
    type: String,
    required: true,
  },
  shortinfo: {
    type: String,
    required: true,
  },
  fees: {
    type: String,
    required: true,
  },
  category:{
    type:String,
    required:true,
  },
  links:{
    type:String,
    required:true,

  },
  postdate:{
    type:Date,
    
    required:true
  }
});

module.exports = mongoose.model('apistore', bookSchema);