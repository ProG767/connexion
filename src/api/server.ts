export interface User {
  id: number;
  firstName: string;
  lastname: string;
  profession: string;
  age: number;
  email: string;
  status: string;
  salaire: number;
  friends: string[];
  profilePhoto: string;
  phone: string;
}

const users: User[] = [
  {
    id: 1234567,
    firstName: "Charafi",
    lastname: "Chanfi",
    profession: "Future developer",
    age: 31,
    email: "charafi.chanfi@gmail.com",
    status: "Married",
    salaire: 5500,
    friends: ["Malek", "Saidou"],
    profilePhoto: "https://github.com/mdo.png",
    phone: "+33 6 12 34 56 01",
  },
  {
    id: 123451011,
    firstName: "Malek",
    lastname: "BEN ANES",
    profession: "Developer",
    age: 28,
    email: "malek.benanes@outlook.com",
    status: "Single",
    salaire: 4200,
    friends: [],
    profilePhoto: "https://github.com/gaearon.png",
    phone: "+33 6 12 34 56 02",
  },
  {
    id: 1234568,
    firstName: "Sofia",
    lastname: "Benali",
    profession: "UI Designer",
    age: 28,
    email: "sofia.benali@gmail.com",
    status: "Single",
    salaire: 4200,
    friends: [],
    profilePhoto: "https://github.com/gaearon.png",
    phone: "+33 6 12 34 56 02",
  },
  {
    id: 1234569,
    firstName: "Yassine",
    lastname: "El Amrani",
    profession: "Backend Developer",
    age: 35,
    email: "yassine.elamrani@gmail.com",
    status: "Married",
    salaire: 6100,
    friends: [],
    profilePhoto: "https://github.com/yyx990803.png",
    phone: "+33 6 12 34 56 03",
  },
  {
    id: 1234570,
    firstName: "Nadia",
    lastname: "Karimi",
    profession: "Data Analyst",
    age: 30,
    email: "nadia.karimi@gmail.com",
    status: "Single",
    salaire: 4800,
    friends: [],
    profilePhoto: "https://github.com/torvalds.png",
    phone: "+33 6 12 34 56 04",
  },
  {
    id: 1234571,
    firstName: "Karim",
    lastname: "Bouzidi",
    profession: "DevOps Engineer",
    age: 33,
    email: "karim.bouzidi@gmail.com",
    status: "Married",
    salaire: 6700,
    friends: [],
    profilePhoto: "https://github.com/defunkt.png",
    phone: "+33 6 12 34 56 05",
  },
  {
    id: 1234572,
    firstName: "Leila",
    lastname: "Mansouri",
    profession: "Frontend Developer",
    age: 26,
    email: "leila.mansouri@gmail.com",
    status: "Single",
    salaire: 3900,
    friends: [],
    profilePhoto: "https://github.com/octocat.png",
    phone: "+33 6 12 34 56 06",
  },
  {
    id: 1234573,
    firstName: "Amine",
    lastname: "Rahmani",
    profession: "Mobile Developer",
    age: 29,
    email: "amine.rahmani@gmail.com",
    status: "In relationship",
    salaire: 5100,
    friends: [],
    profilePhoto: "https://github.com/mojombo.png",
    phone: "+33 6 12 34 56 07",
  },
  {
    id: 1234574,
    firstName: "Sarah",
    lastname: "Khaldi",
    profession: "Product Manager",
    age: 32,
    email: "sarah.khaldi@gmail.com",
    status: "Married",
    salaire: 7200,
    friends: [],
    profilePhoto: "https://github.com/pjhyett.png",
    phone: "+33 6 12 34 56 08",
  },
  {
    id: 1234575,
    firstName: "Mehdi",
    lastname: "Touati",
    profession: "Cybersecurity Engineer",
    age: 37,
    email: "mehdi.touati@gmail.com",
    status: "Single",
    salaire: 7500,
    friends: [],
    profilePhoto: "https://github.com/jakewharton.png",
    phone: "+33 6 12 34 56 09",
  },
  {
    id: 1234576,
    firstName: "Ines",
    lastname: "Cherif",
    profession: "QA Engineer",
    age: 27,
    email: "ines.cherif@gmail.com",
    status: "Single",
    salaire: 4100,
    friends: [],
    profilePhoto: "https://github.com/sindresorhus.png",
    phone: "+33 6 12 34 56 10",
  },
];

export const signInApi = (emailInput: string): User | undefined => {
  return users.find((user) => user.email === emailInput);
};

export const getUserByIdApi = (idInput: string): User | undefined => {
  const idNumber: number = parseInt(idInput);
  return users.find((user) => user.id === idNumber);

  /*return findElementById(users, {
    id: idNumber,
    firstName: "",
    lastname: "",
    profession: "",
    age: 0,
    email: "",
    status: "",
    salaire: 0,
    friends: [],
    profilePhoto: "",
    phone: ""
  });*/
};



interface TypeId {
  id: number;
}

const findElementById = <T extends TypeId>(list: T[], element: T): T | undefined => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === element.id) {
      return list[i];
    }
  }

  return undefined;
}


const elementById = findElementById([
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4, firstname: "abc" }
],
  { id: 2 });



interface Facture {
  id: number;
}

interface Produit {
  id: number;
}


const findUserById = (list: User[], user: User): User | undefined => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === user.id) {
      return list[i];
    }
  }

  return undefined;
}

// const user = findUserById([...], {...})

const findFactureById = (list: Facture[], user: Facture): Facture | undefined => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === user.id) {
      return list[i];
    }
  }

  return undefined;
}



const findProduitById = (list: Produit[], user: Produit): Produit | undefined => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === user.id) {
      return list[i];
    }
  }

  return undefined;
}


















// [1, 2, 3, 7, 8, 10], 8  => 4
// ["malek", "anne", "charafi", "jean-marie", "sebastien" ], "jean-marie" => 3

// [false, false, false, false, true], true => 4

// [{id...}]  p1 .... index


const findIndex = <T>(list: T[], element: T): number | undefined => {
  for (let i = 0; i < list.length; i++) {
    if (element === list[i]) {
      return i;
    }
  }

  return undefined;
}

const numberId: number | undefined = findIndex<number>([1, 2, 3, 7, 8, 10], 4);

const angeId: number | undefined = findIndex<string>(["malek", "anne", "charafi", "jean-marie", "sebastien"], "jean-marie");

const trueId: number | undefined = findIndex<boolean>([false, false, false, false, true], true);

interface Brand {
  id: number;
  name: string;
}

const brandIdx = findIndex<Brand>([
  { id: 1324, name: "VW" },
  { id: 254654, name: "Bmw" },
  { id: 35646, name: "Mercedes" },
  { id: 45756, name: "Renault" },
  { id: 4565, name: "Peugeot" },
], { id: 4565, name: "Peugeot" });






const xx = findIndex<string | number>(["malek", "anne", "charafi", "jean-marie", "sebastien", 12, 55, 99, 23], 12);