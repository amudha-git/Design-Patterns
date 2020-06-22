(function(){

    document.addEventListener("DOMContentLoaded",_init);

    let imageEncryptor;
    let console;



    function _init(){
        _initVariables();
        _bindEvents();
    }

    function _initVariables(){
        imageEncryptor = new ImageEncryptor();
        console = document.getElementById("console");
    }

    window.print = function(value){
        console.innerText = value;
    }

    function _bindEvents(){
        document.querySelector("#encryption-methods").addEventListener("click",_onEncryptionSelection);
    }

    function encryptionMap(key){
        let encrypt =  {
            DES : ()=> new DESEncryption(),
            AES : ()=> new AESEncryption(),
            RSA : ()=> new RSAEncryption()
        }
        return encrypt[key]();
    }
    function _onEncryptionSelection(event){
        var encryptionType = event.target.dataset.encryptionType;

        if(!encryptionType){
            return;
        }

        imageEncryptor.store("a",encryptionMap(encryptionType))

    }


}());