import { UNSPLASH_ACCESS_KEY, UNSPLASH_BASE_URL } from "../utils/constants.js";


export default async function getBackgroundImage(){
  await getImage();
}


async function getImage(){
  const response = await fetch(`${UNSPLASH_BASE_URL}/photos/?client_id=${UNSPLASH_ACCESS_KEY}`)
  const data = await response.json();
  console.log(data);
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