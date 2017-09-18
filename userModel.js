/* Custom Methods (18.3.04)
 * ===================================== */

// Require mongoose
var mongoose = require("mongoose");

// Create the Schema class
var Schema = mongoose.Schema;

// Instantiate a new Schema, UserSchema
var DogSchema = new Schema({
  // username: a required, trimmed string
    ClientName1: {
    type: String,
    trim: true,
    required: "ClientName is Required"
  },
    ClientName2: {
      type: String,
      trim: true
},
    FirstNameDog: {
  type: String,
  trim: true,
  required: "DogName is required."
},
    LastNameDog: {
  type: String,
  trim: true,
  required: "DogLastName is required."
},
    Phone: {
      type: Number,
      required: "Phone Number is required.",
      validate: [
        function(input) {
          return input.length = 9;
        },
        "Phone number should be 9 numbers."
      ]
    },
    Address: {
      type: String,
      trim: false,
      required: "Address is required."
    },
    Zipcode: {
      type: Number,
      required: "Zipcode is required.",
    validate: [
      function(input) {
        return input.length = 5;
      },
      "Zipcode should be 5 digits."
    ]
    },
    Walker: {
      type: String,
      trim: false,
      required: "Walker needs to be assigned."
    },
    WindowOfTime: {
      type: String,
      trim: false,
    },
    DaysOftheWeek: {
      type: String,
      trim: false,
    },
    Notes: {
      type: String,
      trim: false,
    },
  // email: a string that's checked with regex to ensure it's in the expected format
  email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },

    Codes: {
      type: String,
      trim: false,
    },

  // userCreated: just the current date
  userCreated: {
    type: Date,
    default: Date.now
  },
  // isCool: true or false value
  isCool: Boolean
});


/* CUSTOM METHODS HERE
 * -/-/-/-/-/-/-/-/-/- */

/* Custom Method Format
    UserSchema.methods.[METHOD NAME HERE ] = function() {
      // the method's processes go here
    }; */

// Custom method coolifier
DogSchema.methods.coolifier = function() {
  // Just concatenate "...theCoolest" to the current username
  this.username = this.username + "...the Coolest!";
  // Return the new name
  return this.username;
};

// Custom method makeCool
DogSchema.methods.makeCool = function() {
  // Make the "isCool" property of the current doc equal to the boolean "true"
  this.isCool = true;
  // Return the new boolean value
  return this.isCool;
};

// Pass the schema to the User model
var User = mongoose.model("User", DogSchema);

// Export the User model
module.exports = User;
