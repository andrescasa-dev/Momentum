import { p_time } from "../utils/view.js";

export default function ShowCurrentTime(){  
  const date = new Date();
  p_time.textContent = date.toLocaleTimeString('en-us', {timeStyle: "medium"})
}