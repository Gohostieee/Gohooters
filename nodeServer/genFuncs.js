import CryptoJS from 'crypto-js'

export function hash256(x){
	return CryptoJS.SHA256(x).toString(CryptoJS.enc.Base64)
}