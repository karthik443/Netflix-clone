const otpGenerator = require('otp-generator')
let otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });

module.exports = { otp };