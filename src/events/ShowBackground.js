import Author from "../components/Author.js";
import { UNSPLASH_ACCESS_KEY, UNSPLASH_BASE_URL } from "../utils/constants.js";
import {d_author } from "../utils/view.js";


export default async function getBackgroundImage(){
  const URL_BACKGROUND_DEFAULT = "https://images.unsplash.com/photo-1519068737630-e5db30e12e42?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNjU0MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQwMjc4NzQ&ixlib=rb-1.2.1&q=80"
  const USER_DEFAULT = {
    name: "Artur Aldyrkhanov",
    links: {
      html: "https://unsplash.com/@aldyrkhanov"
    }
  }
  try {
    const {urls, user} = await getImage();
    document.body.style.backgroundImage = `url(${urls.full})`
    d_author.innerHTML = Author(user)
  } catch (error) {
    document.body.style.backgroundImage = `url(${URL_BACKGROUND_DEFAULT})`
    d_author.innerHTML = Author(USER_DEFAULT)
    console.error("Error: " + error.message)
  }
}

async function getImage(){
  console.log(`${UNSPLASH_BASE_URL}/photos/random/?orientation=landscape&&query=night&&client_id=${UNSPLASH_ACCESS_KEY}`);
  const response = await fetch(`${UNSPLASH_BASE_URL}/photos/random/?orientation=landscape&&query=night&&client_id=${UNSPLASH_ACCESS_KEY}`)
  if(!response.ok) throw new Error('Incorrect URL')
  return await response.json();
}
