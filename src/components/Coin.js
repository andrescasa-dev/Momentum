export function Coin(coin){
  const {name, links, image, market_cap_rank, market_data} = coin
  const priceFormatted = new Intl.NumberFormat('en-IN',{ style:'currency', currency: 'USD', maximumSignificantDigits: 5 }).format(market_data.current_price.usd)
  return `
  <div class="flex items-center gap-2 justify-between text-center text-xl">
          <img class=" h-8 lg:h-10" src="${image.small}" alt="${name}">
          <a class="capitalize cursor-pointer underline" href="${links.blockchain_site[0]}">${name}</a>
          <span>${priceFormatted}$</span>
          <div class="flex items-center" >
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M17 7v13H7V7l5-3z"/><path d="m10 13l2-1l2 1m-4 4l2-1l2 1m-4-8l2-1l2 1"/></g></svg>
            <span>${market_cap_rank}.</span>
          </div>
      </div>
      `
}