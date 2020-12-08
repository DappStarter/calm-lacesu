require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food ship random noise huge coral light army ghost'; 
let testAccounts = [
"0xcf62d074a64118a9024d5ba1f57c60dc27b8c32c8780fc36a2fa46f2549441fc",
"0xaf3abcd7a294c7f42f7ccd8dd5f26db101cfc0ebc8f238edc830f6787115e90a",
"0xcdd1714d4378e91cabcec4821d63e2fdf007226a6d658eb17ffa000f4bc8ffac",
"0xc0cc4ab06582fb5d4cee58afe39074c35ddd2ea180dc0097389ffd59144d30a2",
"0x41130db4325d873e166e9ef6796b5e82a9200f2f4f5e4407f9eaae6ab74c6415",
"0x6a74fc36efd884eb9d4db3f8334b3c6485f9bf1f883505a094179ce03e40518c",
"0xbaca5a7d16ec96d6608529c15f5dd9367c707c3ab4653ec662bc8162d841f76f",
"0x3c5ff5429e0d8474597204834a68bb1362c26c16fdd3318ce0edf22061b55778",
"0xc74305b8faa485d5ab23bd95a774da893cea359441b28e1c570414b430c613a6",
"0x6d2fd23f658db41eafa036b6fd2fcd303f0c70296073ed0fba5668edec433ca5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
