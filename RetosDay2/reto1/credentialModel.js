const moongose = require("mongoose");
const CredentialSchema = new moongose.Schema({
    
    address: String,
    phone: Number,
    email: String
});

CredentialSchema.pre('save', function(next){
if(this.email.includes("@")){
    next();
}else{
    next(new Error("El correo no tiene un formato valido"))
}
})

module.exports = moongose.model("Credential", CredentialSchema);