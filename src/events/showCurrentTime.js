import Time from "../components/Time.js";
import { d_time } from "../utils/view.js";

export default function ShowCurrentTime(){  
  const date = new Date();
  const time = date.toLocaleTimeString('en-us', {timeStyle: "short"})
  d_time.innerHTML = Time(time)
}
