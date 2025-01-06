const users = [
    {name: "User1", balance: 100, friends: ["Tima", "Dima", "Kiril"], skills: ["JavaScript", "HTML", "CSS"]},
    {name: "User2", balance: 200, friends: ["Artem"], skills: ["Python", "Java", "CSS"]},
    {name: "User3", balance: 150, friends: ["Tima", "Artem"], skills: ["HTML", "JavaScript", "Node.js"]}
  ];
  
  // Task 1
  const totalBalance = users.reduce((totalBalance, num) => totalBalance += num.balance, 0)
  console.log(totalBalance)
  
  // Task 2
  const nameToFind = users.reduce((arrFriend, user) => {
    if (user.friends.includes("Artem")){
      arrFriend.push(user.name)
    }
    return arrFriend
  }, [])
  console.log(nameToFind);
  
  // Task 3
  const countFriend = users.reduce((friendCount, user) => {
    friendCount.push(user.friends.length + " " + user.name)
    return friendCount
  }, [])
  const sortedFriend = countFriend.sort()

  console.log(sortedFriend);
  
  // Task 4
const allSkills = [];

users.forEach(user => {
  user.skills.forEach(skill => {
    if (!allSkills.includes(skill)) {
      allSkills.push(skill);
    }
  });
});

allSkills.sort();

console.log(allSkills);
