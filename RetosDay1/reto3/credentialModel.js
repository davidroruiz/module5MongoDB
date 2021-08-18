const moongose = require("mongoose");
const CredentialSchema = new moongose.Schema({
    
    address: String,
    phone: Number,
    email: String
});

module.exports = moongose.model("Credential", CredentialSchema);