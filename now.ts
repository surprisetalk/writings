
// Go through routines, asking if completed with [y]es/[s]kip/[S]kip-section.
//   Restarts from beginning each time.

// Also include an undo (u).

// Create a file that logs when the file is run and every interaction.
//   Consider symlinking from Documents dir for instant syncing between machines.
//   Allow a column for user-input, for short journal-entries and stuff.

// Make minimal goals like "complete a pushup", which we can increase over time.

// Make a routines.txt which the broad outline is built from.

// For projects, pull from projects file (projects.txt) in order.
//   Ask about blockers and time-sensitive stuff.

// For tasks, pull from task list randomly (tasks.txt).
// Ask if there's anything in the physical projects pile.
// It's imperative to completely clear the task list.

// In the media section, automatically open links.

// Timeout the script after a 1 minute.

// Pick a random one from the list during connect:reach-out.
//   snail-mail; fan-mail; "you're special"; favors; recommendations; memes
//   make a call list that isn't included in the repo

///////////////////////////////////////////////////////////////////////////////

const fs = require(`fs`);

const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const error = err => { throw new Error(err) };

const dateFromMilitaryTime = d => new Date(`${(new Date()).toLocaleDateString()} ${d[0]}${d[1]}:${d[2]}${d[3]}`);

const routines = (fs.readFileSync(`${__dirname}/routines.csv`, `utf8`) || error(`${__dirname}/routines.csv not found`))
  .split(`\n`)
  .filter(s => s.length)
  .map(s => s.split(`|`).map(s => s.trim()))
  .map(([group,routine,frequency,description]) => {
      if (`never` == frequency) {
      } else if (`once per day` == frequency) {
          return {group,routine,isRepeated:false,window:null,description};
      } else if (frequency.startsWith(`once during`)) {
          const [start,end] = (frequency.match(/^once during (\d{4})-(\d{4})$/) || []).slice(1).map(dateFromMilitaryTime);
          if (start && end)
              return {group,routine,isRepeated:false,window:{start,end},description};
          else
              throw new Error(`Undefined unrepeated window: ${window}`);
      } else if (frequency.startsWith(`repeated during`)) {
          const [start,end] = (frequency.match(/^repeated during (\d{4})-(\d{4})$/) || []).slice(1).map(dateFromMilitaryTime);
          if (start && end)
              return {group,routine,isRepeated:true,window:{start,end},description};
          else
              throw new Error(`Undefined repeated window: ${window}`);
      } else
          throw new Error(`Invalid frequency: ${frequency}.`);
  });

const appendLog = (event, info=``) => fs.appendFileSync(`${__dirname}/log.csv`, `\n${new Date()},${event},${info}`);

appendLog(`start`);

const today = new Date((new Date()).toLocaleDateString());
const tomorrow = new Date((() => { var d = new Date(); d.setDate(d.getDate() + 1); return d; })().toLocaleDateString());

const log = (fs.readFileSync(`${__dirname}/log.csv`, `utf8`) || error(`${__dirname}/log.csv not found`))
  .split(`\n`)
  .filter(s => s.length)
  .map(s => s.split(`,`).map(s => s.trim()))
  .map(([date,event,info]) => {
      if (event == `input`)
          info = info.split(`:`);
      else if (event == `start` && info != ``)
          throw new Error(`TODO`);
      return {date:new Date(date),event,info:{group:info[0],routine:info[1],char:info[2]}};
  })
  .filter(({date,event,info}) => event == `input` && info.char == `d` && date >= today && date < tomorrow);

(async () => {

    for (const {group,routine,isRepeated,window,description} of routines.filter(routine => routine)) {
        const promptChar = async acceptableChars => {
            const promptChar_ = async () => await new Promise((res,rej) => {
                const listener = (str, key) => {
                    if (([`c`,`d`].includes(key.name) && key.ctrl) || key.name == 'escape') {
                        appendLog(`quit`, `${group}:${routine}`);
                        process.exit();
                    }
                    process.stdin.removeListener(`keypress`, listener);
                    res(str);
                };
                process.stdin.on(`keypress`, listener);
            })
            let char = await promptChar_();
            while (!acceptableChars.includes(char)) {
                console.log(`TODO`, char);
                char = await promptChar_();
            } 
            return char;
        };
        let timer = setTimeout(() => { appendLog(`timeout`, `${group}:${routine}`); process.exit(); }, 2 * 60 * 1000);
        const eventStuff = () => {
            switch (`${group}:${routine}`) {
                case `frolic:good-tunes`:
                    // TODO: print a random good album with "Maybe _?"
                    break;
                case `simplify:spark-joy`:
                    // TODO: print notes on spark joy
                    break;
                case `nothing:nothing`:
                    // TODO: print a timer
                    break;
                case `lift:lift`:
                    break;
                case `fuel:meal-prep`:
                    // TODO: print notes
                    break;
                case `fuel:supplements`:
                    // TODO: print notes
                    break;
                case `groom:groom`:
                    // TODO: print notes
                    break;
                case `review:review-yesterday`:
                    // TODO: print yesterday's log
                    break;
                case `review:review-last-week`:
                    // TODO: print last weeks's log
                    break;
                case `review:review-last-month`:
                    // TODO: print last months's log
                    break;
                case `learn:translate`:
                    clearTimeout(timer);
                    timer = setTimeout(() => { appendLog(`timeout`, `${group}:${routine}`); process.exit(); }, 10 * 60 * 1000);
                    // TODO: Move paragraphs into array here on single line.
                    const paragraphs = require(`./paragraphs.json`).data;
                    paragraphs.sort(() => .5 - Math.random());
                    console.log(`> ${paragraphs[0].paragraph}`);
                    // TODO: Also supply other paragraphs in other languages, translating using `trans -brief -s english -t "..."`.
                    // TODO: Also open up `trans -shell -brief -s $1 -t $2 $3` for each translation.
                    break;
                case `review:automate`:
                case `calibrate:relax`:
                case `calibrate:review-values`:
                case `calibrate:review-goals`:
                case `calibrate:review-systems`:
                case `calibrate:shrine`:
                case `strategize:review-calendar`:
                case `strategize:review-tasks`:
                case `strategize:break-down-tasks`:
                case `strategize:revive-projects`:
                case `strategize:delegate`:
                case `strategize:cheat-codes`:
                case `strategize:purge-distractions`:
                case `connect:reach-out`:
                case `learn:spaced-repetition`:
                case `toil:clear-emails`:
                case `toil:clear-messages`:
                case `toil:clear-forums`:
                case `toil:clear-tabs`:
                case `toil:sort-task-inbox`:
                case `toil:career`:
                    // TODO: open clubhouse links on toil:career
                    break;
                case `toil:clear-physical-tasks `:
                case `toil:projects`:
            }
        };
        // BUG: {isRepeated: true, window: null} is ignored.
        if (!isRepeated && !window) {
            if (!log.map(({info}) => `${info.group}:${info.routine}`).includes(`${group}:${routine}`)) {
                console.log();
                console.log(`${description} [done/skip]`);
                eventStuff();
                const char = await promptChar([`d`,`s`]);
                appendLog(`input`, `${group}:${routine}:${char}`);
            }
        } else if (!isRepeated && new Date() >= window.start && new Date() < window.end) {
            if (!log.map(({info}) => `${info.group}:${info.routine}`).includes(`${group}:${routine}`)) {
                console.log();
                console.log(`${description} [done/skip]`);
                eventStuff();
                const char = await promptChar([`d`,`s`]);
                appendLog(`input`, `${group}:${routine}:${char}`);
            }
        } else if (isRepeated && window && new Date() >= window.start && new Date() < window.end) {
            if (!log.filter(({date}) => new Date().getTime() - date.getTime() < 60 * 60 * 1000).map(({info}) => `${info.group}:${info.routine}`).includes(`${group}:${routine}`)) {
                console.log();
                console.log(`${description} [done/skip]`);
                eventStuff();
                const char = await promptChar([`d`,`s`]);
                appendLog(`input`, `${group}:${routine}:${char}`);
            }
        }
        clearTimeout(timer);
    }

    process.exit();

})();
