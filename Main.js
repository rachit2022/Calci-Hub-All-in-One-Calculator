function openCalculator(type) {
  // Redirect or switch to the desired calculator based on the 'type'
  switch (type) {
    case "simple":
      window.location.href = "index.html";
      break;
    case "scientific":
      window.location.href = "Scientific.html";
      break;
    case "age":
      window.location.href = "AgeCalculator.html";
      break;
    case "unit":
      window.location.href = "UnitC.html";
      break;
    default:
      break;
  }
}
