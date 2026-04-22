function sumTwoSmallestnumbers(numsArr) {
  // Code here
  let saveIndex = numsArr[0];
  for (let i = 0; i < 2; i++) {
    for (let j = i + 1; j < numsArr.length; j++) {
      if (numsArr[i] > numsArr[j]) {
        saveIndex = numsArr[i];
        numsArr[i] = numsArr[j];
        numsArr[j] = saveIndex;
      }
    }
  }
  return numsArr[0] + numsArr[1];
}
