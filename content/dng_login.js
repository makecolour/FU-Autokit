const fill = document.getElementById("StudentId");
const main = async () => {
  const rollnum = await getFromStorage('STUDENT_ROLL', '');
  const enabled = await getFromStorage('DNG_1', '');
  if (enabled) { fill.value = rollnum; }
}
main();
