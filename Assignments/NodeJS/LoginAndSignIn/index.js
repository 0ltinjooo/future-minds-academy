const inquirer = require('inquirer');

let users = [];

async function signUp() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'Username',
    },
    {
      type: 'password',
      name: 'password',
      message: 'Password',
      mask: '*',
      validate: (input) => input.length >= 6 ? true : 'Password duhet te kete 6 karaktere ose me shume',
    }
  ]);

  users.push({ username: answers.username, password: answers.password });
  console.log("Sign up u realizua me sukses!");

  await mainMenu();
}

async function login() {
  if (users.length === 0) {
    console.log("Ky user nuk ekziston, ju lutem beni Sign Up me pare.");
    return await signUp();
  }

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'Username',
    },
    {
      type: 'password',
      name: 'password',
      message: 'Password',
      mask: '*',
    }
  ]);

  const user = users.find(u => u.username === answers.username && u.password === answers.password);

  if (user) {
    console.log(`Mire se erdhe ne web faqen time!`);
    process.exit();
  } else {
    console.log("Username ose passwordi i gabuar");
    await mainMenu();
  }
}

async function mainMenu() {
  const answer = await inquirer.prompt({
    type: 'list',
    name: 'action',
    choices: ['Sign Up', 'Login'],
  });

  if (answer.action === 'Sign Up') {
    await signUp();
  } else if (answer.action === 'Login') {
    await login();
  }
}

mainMenu();
