const users = [
    {name: "User1", balance: 100, friends: ["Tima", "Dima"], skills: ["JavaScript", "HTML", "CSS"]},
    {name: "User2", balance: 200, friends: ["Artem"], skills: ["Python", "Java", "CSS"]},
    {name: "User3", balance: 150, friends: ["Tima", "Artem"], skills: ["HTML", "JavaScript", "Node.js"]}
  ];
  
  // Task 1
  let totalBalance = 0;
  users.forEach(user => {
    totalBalance += user.balance;
  });
  console.log(totalBalance);
  
  // Task 2
  const nameToFind = "John";
  let usersWithFriend = [];
  users.forEach(user => {
    if (user.friends.includes(nameToFind)) {
      usersWithFriend.push(user.name);
    }
  });
  console.log(usersWithFriend);
  
  // Task 3
  const sortedUsers = users
    .map(user => ({ name: user.name, friendsCount: user.friends.length }))
    .sort((a, b) => a.friendsCount - b.friendsCount)
    .map(user => user.name);
  console.log(sortedUsers);
  
  // Task 4
  const allSkills = Array.from(
    new Set(users.map(user => user.skills).flat())
  ).sort();
  console.log(allSkills);
  