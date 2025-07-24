// Make Names shorter, useful in group or username icons, placeholder instead of image.
// For ex - if group name is "Our Nest" then it becomes "ON"
/*
    Goverdhan Apartment --> GA
    Abhishek Kshirsagar --> AK
    Abhishek            --> AB
    K                   --> K
    ''                  --> ''
    '  '                --> ''
*/
function shortNameOf(name: string) {
  const trimmedName = name.trim();

  if (trimmedName.length === 0) {
    return "";
  }

  const names = trimmedName.split(" ", 2);

  if (names.length === 1) {
    if (names[0].length === 1) {
      return names[0].toUpperCase();
    } else {
      return `${names[0].at(0)}${names[0].at(1)}`.toUpperCase();
    }
  } else {
    return `${names[0].at(0)}${names[1].at(0)}`.toUpperCase();
  }
}

// All function exports goes here..
export { shortNameOf };
