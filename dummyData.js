export const dummyData = [
  {
    id: 1,
    title: "My cookbook",
    description: "This is my CookBook, full of exciting recipes",
  },
  {
    id: 2,
    title: "React Article WriteUp",
    description: "In this article we will about ReactJS",
  },
  {
    id: 3,
    title: "Trip to Paris",
    description: "This Sunday i had a little trip to paris and tried croissont",
  },
];

export function getAllData() {
  return dummyData;
}

export function addNote(id, title, description) {
  dummyData.push({
    id: id,
    title: title,
    description: description,
  });
  console.log(dummyData);
}

export function lengthNote() {
  return dummyData.length;
}

export function sortByDate() {}
