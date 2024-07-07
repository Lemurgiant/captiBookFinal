export function generateAvatarLink(gender) {
  let avatarNum;

  if (gender === "m") {
    avatarNum = Math.floor(Math.random() * 50) + 1; // Generates a number between 1 and 50
  } else if (gender === "f") {
    avatarNum = Math.floor(Math.random() * 50) + 51; // Generates a number between 51 and 100
  } else {
    throw new Error(
      'Invalid gender specified. Use "m" for male or "f" for female.'
    );
  }

  return `https://avatar.iran.liara.run/public/${avatarNum}`;
}
