import { Coin } from "../components/Coin.js";
import { GECKO_BASE_URL } from "../utils/constants.js";
import { d_crypto } from "../utils/view.js";

const COINS = ['bitcoin', 'dogecoin', 'ethereum', 'litecoin'];

export default async function showCoins(){
  try {
    const coins = await Promise.all(COINS.map(coin => getDataCoin(coin)));
    coins.sort((a,b) => a.market_cap_rank-b.market_cap_rank)
    d_crypto.innerHTML += coins.map(coin => Coin(coin)).join('')
  } catch (error) {
    console.error(`${error.name}: ${error.message}: ${error}`)
  }
}

async function getDataCoin(coin){
  const response = await fetch(`${GECKO_BASE_URL}/coins/${coin}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
  if(!response.ok) throw new Error('Invalid url')
  const data = await response.json()
  return data
}