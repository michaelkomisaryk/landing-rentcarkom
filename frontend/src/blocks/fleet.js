import "./features.css";
import "./fleet.css";

const labels = {
  economy: "Економ",
  comfort: "Комфорт",
  premium: "Преміум",
  gasoline: "Бензин",
  diesel: "Дизель",
  hybrid: "Гібрид",
  electric: "Електро",
  automatic: "автомат",
  manual: "механіка",
};

function label(value) {
  return labels[value] || value;
}

export function fleet({ anchor, title, subtitle, items }) {
  const cards = items
    .map(
      ({ brand, model, year, className, fuel, transmission, seats, plate, price, image }) => `
        <article class="car">
          <img class="car__image" src="${image.src}" alt="${image.alt}" loading="lazy" />
          <div class="car__body">
            <p class="car__class">${label(className)} · ${label(fuel)}</p>
            <h3 class="car__title">${brand} ${model}</h3>
            <p class="car__meta">${year} · ${label(transmission)} · ${seats} місць · <span class="car__plate">${plate}</span></p>
            <p class="car__price">${price} <span>/ доба</span></p>
          </div>
        </article>`,
    )
    .join("");

  return `
    <section class="fleet" id="${anchor}">
      <h2 class="section-title">${title}</h2>
      <p class="fleet__subtitle">${subtitle}</p>
      <div class="fleet__grid">${cards}</div>
    </section>
  `;
}
