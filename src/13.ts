const getRandomInt = (max: number) => Math.floor(Math.random() * max);

function generatePassword(): string {
  const length = getRandomInt(16);
  let password = "";

  for (let i = 0; i < length; i++) {
    password += String.fromCharCode(getRandomInt(97) + 97);
  }

  return password;
}
