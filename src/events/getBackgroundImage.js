import { UNSPLASH_ACCESS_KEY, UNSPLASH_BASE_URL } from "../utils/constants.js";
import { a_author } from "../utils/view.js";


export default async function getBackgroundImage(){
  const URL_BACKGROUND_DEFAULT = "https://images.unsplash.com/photo-1491466424936-e304919aada7?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNjU0MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM3MTIwNjY&ixlib=rb-1.2.1&q=80"
  try {
    const {urls, user} = await getImage();
    console.log(urls.full);
    document.body.style.backgroundImage = `url(${urls.full})`
    a_author.textContent = user.name;
    a_author.href = user.portfolio_url;
  } catch (error) {
    document.body.style.backgroundImage = `url(${URL_BACKGROUND_DEFAULT})`
    console.error("Error: " + error.message)
  }
}


async function getImage(){
    const response = await fetch(`${UNSPLASH_BASE_URL}/photos/random/?orientation=landscape&&query=night&&client_id=${UNSPLASH_ACCESS_KEY}`)
    if(!response.ok) throw new Error('Incorrect URL')
    return await response.json();

}
