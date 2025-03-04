
// object of the git config settings
const gitConfig = {
    "user.name": "Moha-Karie",
    "user.email": "karielapt@gmail.com",
    "core.editor": "nano",
    "alias.co": "checkout",
    "alias.ci": "commit",
}

// Regular expression
const regExp = /^user\./

const userSettings = Object.keys(gitConfig).filter(key=> regExp.test(key))
.reduce((result, key)=>{
    result[key]= gitConfig[key];
    return result;
},{})

console.log(userSettings);

