export default function Author(author){
  const {name, links} = author;
  return `
  <a href="${links.html}" class="capitalize cursor-pointer underline underline-offset-4">Photo by: ${name} </a>
  `
}