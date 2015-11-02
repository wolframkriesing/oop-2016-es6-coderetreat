const AGE_OF_MAJORITY = 18;
  let ageRatings = [6, 6, 6, 0, 12, 16, 0, 18, 6, 0, 6];

let checkForAgeRating = (ageRatings) => {
  if (ageRatings.some((ageRating) => ageRating >= AGE_OF_MAJORITY)) {
    console.log('Führen Sie eine Altersverifizierung durch.');
  }
};

checkForAgeRating(ageRatings); // => Führen Sie eine Altersverifizierung durch.