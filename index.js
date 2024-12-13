import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";

const isValidDate = (date) => {
  const startDate = moment("2023-06-01");
  const endDate = moment("2024-06-13");
  return date.isBetween(startDate, endDate, null, "[ ]");
};

const markCommit = async (date) => {
  const data = { date: date.toISOString() };
  await jsonfile.writeFile(path, data);
  const git = simpleGit();
  await git.add([path]);
  await git.commit(`--date=${date.toISOString()} -- ${path}`);
};

const makeCommits = async (n) => {
  const git = simpleGit();

  for (let i = 0; i < n; i++) {
    const randomWeeks = random.int(10, 54);
    const randomDays = random.int(0, 6); 
    const randomDate = moment("2023-06-01").add(randomWeeks, "weeks").add(randomDays, "days");

    if (isValidDate(randomDate)) {
      console.log(`Creating commit: ${randomDate.toISOString()}`);
      await markCommit(randomDate);
    } else {
      console.log(`Invalid date: ${randomDate.toISOString()}, skipping...`);
    }
  }

  console.log("Pushing all commits...");
  await git.push();
};

makeCommits(5000);
