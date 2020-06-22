function ImageEncryptor(){

}

ImageEncryptor.prototype.store = function(fileName,encryption){
    encryption.encrypt();
}


function DESEncryption(){

}

DESEncryption.prototype.encrypt = function(){
    print("DES encrypted..")
}

function RSAEncryption(){


}

RSAEncryption.prototype.encrypt = function(){
    print("RSA encrypted..");
}

function AESEncryption(){


}

AESEncryption.prototype.encrypt = function(){
    print("AES encrypted..");
}