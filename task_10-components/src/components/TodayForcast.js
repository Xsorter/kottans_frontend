const host = document.getElementById('main');

const render = city => {
  host.innerHTML = `

  <div class="content__values">
  <p>
    <span class="caption__number">${city.temp}</span> ${data.unitsDisplay}
    <p class="caption__title">avg. temp.</p> 
  </p>
  <object data="assets/media/${city.weather.icon}.svg" type="">
  </object>
  <p class="caption__title">${city.weather.description}</p> 
  </div>
<p class="date">${city.datetime
  .split("-")
  .reverse()
  .join(".")}
</p> 
<p>max. temp.: ${city.max_temp} ${data.unitsDisplay}</p>
<p>min. temp.: ${city.min_temp} ${data.unitsDisplay}</p>
<p>feels like, max: ${city.app_max_temp} ${data.unitsDisplay}</p>
<p>feels like, min: ${city.app_min_temp} ${data.unitsDisplay}</p>
<p>wind: ${city.wind_spd} m/s</p>
<p>precipitation: ${city.pop} %</p>
  `;
};

export default render;
