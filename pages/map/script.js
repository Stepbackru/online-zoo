window.onload = () => {
  const links = [...document.querySelectorAll('.map__link')];
  const pandaCountry = document.querySelector('#china');
  const eagleAligCountry = document.querySelector('#usa');
  const gorillaCountry = document.querySelector('#africa');

  links.forEach((el) => {
    el.addEventListener('mouseover', () => {
      if (el.classList.contains('map__link_panda')) {
        pandaCountry.classList.add('country_hover');
      }
      if (el.classList.contains('map__link_eagle') ||
          el.classList.contains('map__link_aligator')) {
          eagleAligCountry.classList.add('country_hover');
      }
      if (el.classList.contains('map__link_gorilla')) {
        gorillaCountry.classList.add('country_hover');
      }
    });
    el.addEventListener('mouseout', () => {
      if (el.classList.contains('map__link_panda')) {
        pandaCountry.classList.remove('country_hover');
      }
      if (el.classList.contains('map__link_eagle') ||
          el.classList.contains('map__link_aligator')) {
          eagleAligCountry.classList.remove('country_hover');
      }
      if (el.classList.contains('map__link_gorilla')) {
        gorillaCountry.classList.remove('country_hover');
      }
    });
  })
}