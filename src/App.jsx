import axios from "axios";
import { useEffect, useState } from "react";
import Time from "./Time"

function App() {

  const [search, setSearch] = useState('london');
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [info, setInfo] = useState(true)

  useEffect(() => {
    const getWeatherData = async () => {

      try {await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=08ac16ad8922d28316e563b806e84f37`)
        .then((response) => response.data)
        .then((data) => {
          setInfo(true);
          setData(data);
        })
      }
      catch {
        setInfo(false);
      }
    }
    getWeatherData()
  }, [search])
  
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(input)
  }

  let d = new Date();
  let date = d.getDate();
  let year = d.getFullYear();
  let month = d.toLocaleString("default", { month: "long" });
  let day = d.toLocaleString("default", { weekday: "long" });

  let bgImage;
  let icon;
  if (typeof data.main !== "undefined") {
    const description = data.weather[0].description
    if (description === "clear sky") {
      bgImage = "https://images.unsplash.com/photo-1531091881557-e0b21c6c56b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGNsZWFyJTIwc2t5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
      icon="https://img.icons8.com/color/452/sky.png"
    }
    if (description === "light rain") {
      bgImage = "https://images.unsplash.com/photo-1616867404146-b05b5bc3f331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGlnaHQlMjByYWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
      icon="https://img.icons8.com/ultraviolet/2x/rain.png"
    }
    if (description === "few clouds") {
      bgImage = "https://images.unsplash.com/photo-1572272195904-f64d9c02c5b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmV3JTIwY2xvdWRzJTIwd2VhdGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
      icon="https://img.icons8.com/external-vectorslab-flat-vectorslab/2x/external-clouds-weather-and-season-vectorslab-flat-vectorslab.png"
    }
    if (description === "overcast clouds") {
      bgImage = "https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
      icon="https://img.icons8.com/clouds/2x/clouds.png"
    }
    if (description === "broken clouds") {
      bgImage = "https://images.unsplash.com/photo-1491550509181-fa5704644766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTY5fHxicm9rZW4lMjBjbG91ZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
      icon="https://img.icons8.com/external-others-pike-picture/2x/external-Natural-Clouds-oxygen-others-pike-picture.png"
    }
    if (description === "scattered clouds") {
      bgImage = "https://images.unsplash.com/photo-1502210600188-51a3adffa4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
      icon="https://img.icons8.com/clouds/2x/sky.png"
    }
    if (description === "haze") {
      bgImage = "https://images.unsplash.com/photo-1514229917620-e7041bcb7d56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxfHxzbW9rZSUyMHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
      icon="https://img.icons8.com/office/2x/fog-day.png"
    }
    if (description === "smoke") {
      bgImage = "https://images.unsplash.com/photo-1635252517690-1a4438427ba1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDI0fHxzbW9rZSUyMHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
      icon="https://img.icons8.com/external-others-pike-picture/344/external-Smoke-Clouds-hookah-others-pike-picture.png"
    }
    if (description === "moderate rain") {
      bgImage = " https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fG1vZGVyYXRlJTIwcmFpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
      icon="https://img.icons8.com/external-flatart-icons-flat-flatarticons/2x/external-rain-nature-flatart-icons-flat-flatarticons.png"
    }
    if (description === "fog") {
      bgImage = "https://images.unsplash.com/photo-1479476437642-f85d89e5ad7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZvZ2d5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
      icon="https://img.icons8.com/external-others-phat-plus/2x/external-calm-weather-color-line-others-phat-plus-20.png"
    }
  }
 
 
  return (
    <>
      <img className="absolute h-screen w-screen -z-50 bg-no-repeat" src={bgImage} />
      
    <div className="flex flex-col items-center justify-center h-screen">

      <form onSubmit={handleChange} className="flex items-center">
          <input className="px-2 py-1 rounded-lg border border-red-600"
            type="search"
            name="search"
            value={input}
            onChange={e=>setInput(e.target.value)}
             placeholder="search place"/>
          <button type="submit">
            <img className="w-12 h-12 shrink-0" src="https://img.icons8.com/ios-glyphs/2x/google-web-search.png" />
          </button>
        </form>
        {!info && <div className="mt-5 w-2/3 h-4/5 flex justify-center items-center bg-black bg-opacity-70 rounded-md text-white ">can't access data for {input}</div>}
        {(typeof data.main !== "undefined") ? (
          info && <div className="py-10 mt-5 w-2/3 h-4/5 flex flex-col items-center bg-black bg-opacity-70 rounded-md text-white ">
          <h1 className='font-extrabold text-5xl'>{data.name}</h1>
            <p class="font-medium text-medium mt-5 mb-5">{day}, {month}, {year}, {date}</p>
            
            <Time/>
          <span className="my-4 border-t border-white w-full"></span>

          <img className="w-20 h-20" src={icon} />
          <p>{data.weather[0].description}</p>

          <h1 className="text-3xl font-bold mb-5">{(data.main.temp -273.15).toFixed(2)}&deg;C</h1>
          <p className="font-bold"></p>
          <p className="text-2xl">{(data.main.temp_min -273.15).toFixed(2)}&deg;C <span className="mx-3 font-sm text-4xl">|</span> {(data.main.temp_max -273.15).toFixed(2)}&deg;C </p>
    </div>) : ('')}
      </div>
     
  </>
  );
}

export default App;
