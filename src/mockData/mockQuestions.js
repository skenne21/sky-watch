export const questions = [
  {
    name: '',
    type: 'questionCard',
    question: 'Why Did CEO Elon Musk name the spacecraft Dragon?',
    stats: {
      answer: `Elon Musk has said that he named his spacecraft "Dragon"
       after the fictional Puff the Magic Dragon, from the hit song by 
       music group Peter, Paul and Mary. Musk said he used the name 
       because many critics considered his goals impossible when he 
       founded SpaceX in 2002.`
    }
  }, {
    name: '',
    type: 'questionCard',
    question: `What was carried on the Dragon capsule's first test 
    flight in December 2010?`,
    stats: {
      answer: `It carried a wheel of cheese into orbit. Prior to the 
      successful liftoff, SpaceX officials hinted that Dragon was carrying 
      special cargo into space, but the company did not reveal the secret 
      payload until after the spacecraft had returned.
        
      The wheel of cheese was launched in honor of a classic skit from 
      actor John Cleese in the British comedy show Monty Python's
      Flying Circus.

      The cheese rode inside the Dragon capsule for the entire flight, from the 
      launch in Florida to splashdown in the Pacific Ocean, 500 miles 
      (804 kilometers) west of Mexico.`
    }
  }, {
    name: '',
    type: 'questionCard',
    question: `What Are SpaceX's fleet of Falcon rockets named affter?`,
    stats: {
      answer: `the Falcon 9 boosters and smaller Falcon 1 rockets are 
      named after the fictional Millenium Falcon spaceship from creator 
      George Lucas' "Star Wars" movies.`
    }
  }, {
    name: '',
    type: 'questionCard',
    question: `What Marvel character is CEO Elon Musk said to be a portrayal 
    of?`,
    stats: {
      answer: `Musk, who founded SpaceX in 2002, is also the CEO of Tesla 
      Motors
       and made his initial fortune by co-founding the online payment system 
       PayPal. 
      The entrepreneur has also developed a larger-than-life persona, with 
      admirers
       calling him the real-life Tony Stark`
    }
  }, {
    name: '',
    type: 'questionCard',
    question: `What is the metophor SpaceX has said to explain the 
    need for reuseable spacecrafts `,
    stats: {
      answer: `A metaphor Elon would frequently use with us is 
      comparing it to throwing away a Boeing 747 after every 
      flight. We simply can't go forward in space exploration if 
      the vehicles don't become reusable.`
    }
  }, {
    name: '',
    type: 'questionCard',
    question: `What was the reason for Falcon 9 first-stage landing test `,
    stats: {
      answer: `Falcon 9 first-stage landing test were a series of 
      controlled-descent flight tests conducted by SpaceX between 2013 
      and 2016. Since 2017, the first stage of Falcon 9 missions has
      been routinely landed if the rocket performance allowed it, 
      and if SpaceX choose to recover the stage.

      The program's objective was to reliably execute controlled re-entry,
      descent and landing (EDL) of the Falcon 9 first stage into Earth's 
      atmosphere after the stage completes the boost phase of an orbital
      spaceflight. The first tests aimed to touch down vertically in the
      ocean at zero velocity. Later tests attempted to land the rocket
      precisely on an autonomous spaceport drone ship (a barge 
      commissioned by SpaceX to provide a stable landing surface at sea)
      or at Landing Zone 1 (LZ-1), a concrete pad at Cape Canaveral.
      The first ground landing at LZ-1 succeeded in December 2015,
      and the first landing at sea on a drone ship in April 2016.
      The second landed booster, B1021, was the first to fly again
      in March 2017, and was recovered a second time.`
    }
  }, {
    name: '',
    type: 'questionCard',
    question: `From 2013 to 2016, sixteen test flights were conducted
    Falcon 9 first-stage landing test how many were successful?`,
    stats: {
      answer: `From 2013 to 2016, sixteen test flights were conducted,
      six of which achieved a soft landing and recovery of the booster.`
    }
  }, {
    name: '',
    type: 'questionCard',
    question: `What Falcon 9 achieving a stable landing at sea?`,
    stats: {
      answer: `Falcon 9 flight 23 (CRS-8) finally achieved a stable
      landing at sea in the Atlantic on the drone ship Of Course I Still
      Love You in April 2016 after four previous attempts ended in
      destruction of the booster upon impact`
    }
  }
];

export const randomQuestions = () => {
  const randomIndex = Math.floor(Math.random() * (8- 1)) + 1;
  const card = questions.filter((question, index) => index === randomIndex);
  const newArray = [];
  newArray.push(card[0]);
  return newArray;
};