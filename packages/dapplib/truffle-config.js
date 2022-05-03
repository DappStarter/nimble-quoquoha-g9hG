require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan reward stick until install kitten blue genre'; 
let testAccounts = [
"0x09db5c31775748dd0e63028610f9cec592a7934630bfa3e433f3654837a8cbdc",
"0x15afae5237d718f12d625d8464f9eba8d16f018fa5f1f2b81acef3d466b747db",
"0x1dcca0830dcb32725b3d57424881616cbde06c011df08e519bbb45a183160066",
"0xf5842e0c1dc273d054ae9aa8e8b1e63551eb39b429adc1b4458201cdb3c6367f",
"0x675d29e307e8e26438dbaf9ea359e5bb56547cc6e2eb57deb63640a19dbf8195",
"0xb8731b4dba65a9cf0fcbf2a52cb772dbcf8d7fd667b370d2656ce1622ab5bb11",
"0x06cbf8e8b805f6453fd342a2b77fc5af1c01336a8dc8596d95b93bda04aa5c6f",
"0x95b5a742b5525b86c1b1e39ac9ff15a7ea68df634608bf988175af2d460e736e",
"0x87e4902ebf22f302436a4137b1d02f9cd8e5ea0ab8fca82329e0fedcd82ef7af",
"0xb62d7e3543be3208b9c7a17f16016df8f35bdaed66eeb8b71601a0a83813e272"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


