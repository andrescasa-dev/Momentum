export function Coin(coin){
  const {name, links, image, market_cap_rank, market_data} = coin
  const priceFormatted = new Intl.NumberFormat('en-IN',{ style:'currency', currency: 'USD', maximumSignificantDigits: 5 }).format(market_data.current_price.usd)
  const color = '#3d3d3d90'
  return `
  <img class="justify-self-end w-full aspect-square" src="${image.small}" alt="${name}">
  <div class="bg-[${color}] rounded-md flex items-center px-4 ">
    <a class="capitalize decoration-1 underline-offset-4 cursor-pointer underline" href="${links.blockchain_site[0]}" target="_blank"gi>${name}</a>
  </div>
  <div class="bg-[${color}] px-2 rounded-md flex items-center">
  <span>${priceFormatted}$</span>
  </div>
  <div class=" bg-[${color}] px-2 rounded-md flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M17 7v13H7V7l5-3z"/><path d="m10 13l2-1l2 1m-4 4l2-1l2 1m-4-8l2-1l2 1"/></g></svg>
    <span>${market_cap_rank}</span>
  </div>
      `
}