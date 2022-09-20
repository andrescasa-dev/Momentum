import { UNSPLASH_ACCESS_KEY, UNSPLASH_BASE_URL } from "../utils/constants.js";
import { a_author } from "../utils/view.js";


export default async function getBackgroundImage(){
  const {urls, user} = await getImage();
  document.body.style.backgroundImage = `url(${urls.full})`
  a_author.textContent = user.username;
  a_author.href = user.portfolio_url;
}


async function getImage(){
  console.log(`${UNSPLASH_BASE_URL}/photos/random/?orientation=landscape&&client_id=${UNSPLASH_ACCESS_KEY}`)
  const response = await fetch(`${UNSPLASH_BASE_URL}/photos/random/?orientation=landscape&&client_id=${UNSPLASH_ACCESS_KEY}`)
  return await response.json();
}

//======== trying using headers for credentials======//

// async function getImage(){
//   const response = await fetch(`${UNSPLASH_BASE_URL}/photos`,{
//     method: 'GET',
//     withCredentials: true,
//     credentials: 'include',
//     headers: {
//       "Accept-Version": "v1",
//       "Authorization" : UNSPLASH_ACCESS_KEY
//     }
//   });
//   const data = await response.json();
//   console.log()
// }