import * as bin from './index';


export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin);

  let text = "";

  text+=`Welcome! Here are all the available commands:

  [tab]: Trigger auto-completion.
  [ctrl+l/Clear]: Clear terminal.
  [ctrl+c]: Cancel command.
  
  About           >>Very short summary
  Banner          >>Display my Banner
  Info            >>Brief summary of the website
  Email           >>Opens mail
  Help            >>Display all available commands
  Theme           >>Change theme
  Resume          >>View my resume
  Readme          >>Produce Readme text

  Socials:
  Instagram       >>Open Instragram profile
  Linkedin        >>Open Linkedin profile
  Github          >>Open Github site
  Gui             >>Open Gui Website
  
  API commands:
  Projects        >>Prints Github projects
  Quoteoftheday   >>Prints random quote of the day
  Weather         >>Displays weather forecast in your city
  Joke            >>Want to hear a joke?
  Nasa            >>View NASA picture of the day
  Advice          >>Display random advice
  Password        >>Generate random password(s)
  Checkpassword   >>Is your password strong?
  Countryfacts    >>Display facts about countries
  Moviefacts      >>Showcase facts about movies
  
  
  Linux commands:
  Sudo            >>You become a super user
  Echo [string]   >>Print out string
  Whoami          >>Display current user
  Cd              >>Change directory
  Pwd             >>Working directory
  Date            >>Displays date
  Ls              >>List files
  Dir             >>List directories
  Mkdir [name]    >>Creates a directory
  Shutdown        >>Shuts down the system
  Cal             >>Display a simple calendar of the current month
  
  Linux CLI apps:
  Vi, Vim, Emacs  >>text editors`;

  return text;
};
export const Help = help;
export const HELP = help;

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }, 1000);

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};
export const Sodu = sudo;
export const SUDO = sudo;


export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};
export const Echo = echo;
export const ECHO = echo;

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};
export const Whoami = whoami;
export const WHOAMI = whoami;

export const cd = async (
  args: string[],
  callback?: (value: string) => string,
): Promise<string> => {
  if (args.length === 0) {
    return `Directory not found :)`;
  }

  switch (args[0]) {
    case 'ls':
    case 'LS':
    case 'Ls':
      let result = `Why do you cd ls? you know there is not such thing as cd ls. \n\nBut since you give it a try I give you one puzzle:
      59617979797920796F75206D616E61676520746F206465636F646520697421204865726520612063757063616B6520666F7220796F75203A29`;

      return result;
  }
};
export const Cd = cd;
export const CD = cd;

export const pwd = async (args: string[]): Promise<string> => {

  return `/home/Warriorwiras`;
};
export const Pwd = pwd;
export const PWD = pwd;

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};
export const DATE = date;

export const ls = async (args: string[]): Promise<string> => {
  return `all
of
fake
directories`
};

export const Ls = ls;
export const LS = ls;
export const dir = ls;
export const DIR = ls;
export const Dir = ls;

export const mkdir = async (args: string[]): Promise<string> => {
  const userInput = args.join(' ');
  return `/home/Warriorwiras/${userInput} created`;
};

export const Mkdir = mkdir;
export const MKDIR = mkdir;

export const shutdown = async (args: string[]): Promise<string> => {
  setTimeout(() => {
      window.close();
  }, 3000); // 3000 milliseconds = 3 seconds
  return `Shutting down the program. Thank you for visiting Wafi CLI Website.`
};

export const Shutdown = shutdown;
export const SHUTDOWN = shutdown;


export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:muhdwafiyuddin5@gmail.com');

  return 'Opening mailto:muhdwafiyuddin5@gmail.com...';
};
export const Email= email;
export const EMAIL = email;

export const vi = async (args: string[]): Promise<string> => {
  return `why use vi? try 'emacs'.`;
};
export const Vi = vi ;
export const VI = vi ;

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};
export const Vim = vim;
export const VIM = vim;

export const emacs = async (args: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};
export const Emacs = emacs;
export const EMACS = emacs;

export const cal = async (args: string[]): Promise<string> =>{

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const monthHeader = `${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentDate)} ${currentYear}`;
  const daysOfWeekHeader = "Su Mo Tu We Th Fr Sa";

  let output = `${monthHeader}\n${daysOfWeekHeader}\n`;

  let dayCounter = 1;

  for (let i = 0; i < 6; i++) {
    let weekLine = "";

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfMonth) {
        // Add spaces for the days before the 1st day of the month
        weekLine += "   ";
      } else if (dayCounter <= daysInMonth) {
        // Add the day to the line, color today's date
        const day = dayCounter.toString().padStart(2, ' ');
        weekLine += (dayCounter === currentDate.getDate()) ? `<span style="color: green">${day}</span> ` : `${day} `;
        dayCounter++;
      } else {
        // Add spaces for the remaining days after the end of the month
        weekLine += "   ";
      }
    }

    // Add the week line to the output
    output += weekLine.trimRight() + "\n";
  }

  return `<pre>${output.trim()}</pre>`;

}
export const Cal = cal;
export const CAL = cal;




/*
export const donate = async (args?: string[]): Promise<string> => {
  window.open(packageJson.funding.url, '_blank');

  return 'Opening donation url...';
};
*/
export const banner = (args?: string[]): string => {
  return `
▄▄   ▄▄ ▄▄   ▄▄ ▄▄   ▄▄ ▄▄▄▄▄▄     ▄     ▄ ▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄ ▄▄   ▄▄ ▄▄   ▄▄ ▄▄▄▄▄▄  ▄▄▄▄▄▄  ▄▄▄ ▄▄    ▄ 
█  █▄█  █  █ █  █  █ █  █      █   █ █ ▄ █ █      █       █   █  █ █  █  █ █  █      ██      ██   █  █  █ █
█       █  █ █  █  █▄█  █  ▄    █  █ ██ ██ █  ▄   █    ▄▄▄█   █  █▄█  █  █ █  █  ▄    █  ▄    █   █   █▄█ █
█       █  █▄█  █       █ █ █   █  █       █ █▄█  █   █▄▄▄█   █       █  █▄█  █ █ █   █ █ █   █   █       █
█       █       █   ▄   █ █▄█   █  █       █      █    ▄▄▄█   █▄     ▄█       █ █▄█   █ █▄█   █   █  ▄    █
█ ██▄██ █       █  █ █  █       █  █   ▄   █  ▄   █   █   █   █ █   █ █       █       █       █   █ █ █   █
█▄█   █▄█▄▄▄▄▄▄▄█▄▄█ █▄▄█▄▄▄▄▄▄█   █▄▄█ █▄▄█▄█ █▄▄█▄▄▄█   █▄▄▄█ █▄▄▄█ █▄▄▄▄▄▄▄█▄▄▄▄▄▄██▄▄▄▄▄▄██▄▄▄█▄█  █▄▄█ 

Type 'neofetch' to display my brief summary
Type 'info' to see quick infomation about this website
`;
};

export const Banner = banner;
export const BANNER = banner;