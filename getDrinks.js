console.log("person 1: *shows ticket*");
console.log("person 2: *shows ticket*");

const preMovie = async () => {
  const WifeBringTix = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ticket"), 3000);
  });
  const getPopcorn = new Promise((resolve, reject) => resolve("popcorn"));

  const getButter = new Promise((resolve, reject) => resolve("butter"));

  const getColdDrinks = new Promise((resolve, reject) =>
    resolve("cold drinks")
  );
  let ticket = await WifeBringTix;

  console.log(`wife: here's the ${ticket}`);
  console.log(`husband: we  should go in`);
  console.log("wife: no, i am hungry");

  let popcorn = await getPopcorn;

  console.log(`husband: i got some ${popcorn}`);
  console.log(`husband: we  should go in`);
  console.log("wife: I need butter on my popcorn");

  let butter = await getButter;

  console.log(`husband: i got some ${butter} on the popcorn`);
  console.log("husband: anything else?");
  console.log("wife: let's go, we are getting late");
  console.log("husband: thank you for the reminder. *grins*");

  let drinks = await getColdDrinks;
  console.log(`husband: got some ${drinks}, just in case!`);

  return ticket;
};

preMovie().then((m) => console.log(`person3: *shows ${m}*`));

console.log("person 4: *shows ticket*");
console.log("person 5: *shows ticket*");
