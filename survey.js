const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userData = {
  name: '',
  activity: '',
  listen: '',
  meal: '',
  eat: '',
  sport: '',
  superpower: ''
};

rl.question('What is your name? ', answer => {
  userData.name = answer;
  
  rl.question('What is an activity you like doing? ', answer => {
    userData.activity = answer;
    
    rl.question('What do you like to listen to while doing that activity? ', answer => {
      userData.listen = answer;
      
      rl.question('What is your favourite meal of the day? ', answer => {
        userData.meal = answer;
        
        rl.question('What do you like to eat for that meal? ', answer => {
          userData.eat = answer;
          
          rl.question('What is your favourite sport? ', answer => {
            userData.sport = answer;
            
            rl.question('What is your superpower? ', answer => {
              userData.superpower = answer;
              console.log(`${userData.name} loves to listen to ${userData.listen} while ${userData.activity}, devourering ${userData.eat} for ${userData.meal}, prefers ${userData.sport} over all other sports, and is amazing at ${userData.superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
