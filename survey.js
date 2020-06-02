const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your name? Nicknames are also acceptable:) ', (name) => {
  console.log(`${name}`);
  rl.question('What is an activity you like doing?', (activity) => {
    console.log(`${activity}`);
    rl.question('What do you listen to while doing that?', (listen) => {
      console.log(`${listen}`);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (brunch) => {
        console.log(`${brunch}`);
        rl.question('(What is your favourite thing to eat for that meal?)', (favFood) => {
          console.log(`${favFood}`);
          rl.question('(Which sport is your absolute favourite?)', (sport) => {
            console.log(`${sport}`);
            rl.question('(What is your superpower? In a few words, tell us what you are amazing at!)', (superpower) => {
              console.log(`${superpower}`);
                console.log(`${name} loves listening to ${listen} while ${activity}, devouring ${favFood}for ${brunch}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
                  console.log(`Thank you for your valuable feedback! \n`);
                  rl.close();
            });
          });
        });
      }); 
    });
  });
});
