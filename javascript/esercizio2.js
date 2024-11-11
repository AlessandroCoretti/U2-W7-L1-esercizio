class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  isSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const petForm = document.getElementById("petForm");
const petList = document.getElementById("petList");
const pets = [];

petForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);

  let sameOwnerMessage = false;

  pets.forEach((pet) => {
    if (newPet.isSameOwner(pet)) {
      sameOwnerMessage = true;
    }
  });

  const petItem = document.createElement("li");
  petItem.textContent = `${newPet.petName} (${newPet.species}, ${newPet.breed}) - Padrone: ${newPet.ownerName}`;
  petList.appendChild(petItem);

  pets.push(newPet);

  console.log(sameOwnerMessage ? "TRUE" : "FALSE");

  petForm.reset();
});
