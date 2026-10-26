import "./features.css";
import "./contacts.css";

export function contacts({ anchor, title, text, phone, email, address }) {
  const phoneHref = phone.replace(/[^\d+]/g, "");

  return `
    <section class="contacts" id="${anchor}">
      <h2 class="section-title">${title}</h2>
      <p class="contacts__lead">${text}</p>
      <div class="contacts__list">
        <a class="contact" href="tel:${phoneHref}">
          <span class="contact__label">Телефон</span>
          <strong>${phone}</strong>
        </a>
        <a class="contact" href="mailto:${email}">
          <span class="contact__label">Пошта</span>
          <strong>${email}</strong>
        </a>
        <div class="contact">
          <span class="contact__label">Видача</span>
          <strong>${address}</strong>
        </div>
      </div>
    </section>
  `;
}
