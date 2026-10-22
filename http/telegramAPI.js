import axios from 'axios'

const token = '8800219275:AAEo6hCcc-yX3gP8XA8xFLkyDSSkdAFM4Wc'
const chat_id = '-1003578884142'


const uri_api = `https://api.telegram.org/bot${token}/sendMessage`

export const sendOrderTelegram = async (obj) => {
	const { data } = await axios.post(uri_api, {
		chat_id,
		parse_mode: 'html',
		text: obj,
	})
	return data
}






