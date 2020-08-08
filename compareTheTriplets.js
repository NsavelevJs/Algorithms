function compareTriplets(a, b) {
  let aliceTotal = 0;
  let bobTotal = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] < b[i]) {
      bobTotal++;
    } else if (a[i] > b[i]) {
      aliceTotal++;
    } else {
      continue;
    }
  }
  return [aliceTotal, bobTotal];
}
