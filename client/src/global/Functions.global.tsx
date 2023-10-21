function greetUserBasedOnTime(name: string | undefined): string {
  const time: number = new Date().getHours();
  if (time < 12) {
    return `🌄 Good morning ${name}`;
  } else if (time < 18) {
    return `🕑 Good afternoon ${name}`;
  } else {
    return `🌃 Good evening ${name}`;
  }
}

export { greetUserBasedOnTime };
