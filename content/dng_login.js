const main = async () => {
  const rollnum = await getFromStorage('STUDENT_ROLL', '');
  console.log(rollnum);
  const fill = document.getElementById("StudentId");
  fill.value = rollnum;
}
main();
