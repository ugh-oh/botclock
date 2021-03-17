# BotClock
### A Discord bot.

BotClock is a piece of shit, no-good Discord bot capable of mildly adding to the spam in a certain discord server.

Installation

Make a folder to put it. Run the following in the folder.

        git clone https://github.com/ugh-oh/botclock.git
        npm init
        npm install
        npm run dev

Now that you done did that, done do this.

### Structure
        Commands are all extensions of the Command class. Each command has it's own file. You can put multiple commands together I guess, but for total encapsulation just keep it this way. I haven't tested to see if you can further nest folders inside.

### Commands

        !ping - returns pong
        !nickname - returns nickname on server.
        !spam - nothing

        Blacklist - currently a list of user IDs in blacklist.js that are blocked from making commands. 
        CommandBlocked - this returns when a user executes a command they're not supposed to.

## TO DO:

!command-list
!help

#### Economy with cash, bank, timers/cooldowns, and percentages.

!flash - same as work but its animation based
!slut
!crime
!loan - money that is paid then recovered back through income rewards
!rewards - redeem daily, hourly, weekly rewards

#### Games

!blackjack
!roulette
!jackbox
!cock-fight

#### shop which creates object and saves it to db. also retrieves it. make a db schema.

id, name, price, description, reply, role-given, stock

!shop 
!shop list
!shop add
!shop edit
!shop buy
!shop give
!shop sell

#### Allow user to add custom bot responses

name, string

!c add ban-poly "ban poly"        - add response.
!c ban-poly                       - use response.
!c list                           - show list of custom bot responses
!c delete "ban-poly"              - delete by name


#### Jobs

id, job-name, salary, timer, charisma

AND

user_id, job-name

similar db schema to create-item

!jobs              - job list
!jobs apply        - apply for all jobs. do a charisma check (Math.Random()) to assign job. set cooldown.
!work              - work the assigned job. responses are more basic bitch.
!jobs resign       - automatically assigns the job 'unemployed' which pays fuck all. small chance of massive severance pay.
!jobs-add
!jobs-delete

                