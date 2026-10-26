import { hero } from "./blocks/hero.js";
import { features } from "./blocks/features.js";
import { fleet } from "./blocks/fleet.js";
import { testimonials } from "./blocks/testimonials.js";
import { contacts } from "./blocks/contacts.js";

const renderers = { hero, features, fleet, testimonials, contacts };

export function renderBlocks(blocks) {
  return blocks
    .map((block) => {
      const render = renderers[block.type];
      if (!render) return "";
      return render(block);
    })
    .join("");
}
