export default function decorate(block) {
  // Apply the 'cards' class to the block
  block.classList.add('cards');

  // Loop through each card
  const cards = block.querySelectorAll('.cards > div');
  cards.forEach((card) => {
    // Add class to each card
    card.classList.add('card');

    // Add class to image container
    const imageContainer = card.querySelector('picture').parentElement;
    imageContainer.classList.add('card-image');

    // Add class to content container
    const contentContainer = imageContainer.nextElementSibling;
    contentContainer.classList.add('card-content');

    // Add class to description
    const description = contentContainer.querySelector('p');
    description.classList.add('card-description');

    // Add class to title
    const title = contentContainer.querySelector('h3');
    title.classList.add('card-title');

    // Add class to link container
    const linkContainer = contentContainer.querySelector('p:last-of-type');
    linkContainer.classList.add('card-link-container');

    // Add class to link
    const link = linkContainer.querySelector('a');
    link.classList.add('card-link');
  });
}
