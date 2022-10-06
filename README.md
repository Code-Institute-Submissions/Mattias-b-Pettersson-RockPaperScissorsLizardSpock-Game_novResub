# Rock Paper Scissors Lizard Spock

Rock Paper Scissors Lizard Spock is a game that hopes to keep the player entertained with a more advanced version of the classic Rock Paper Scissors game.
You can read more about the rules and where it comes from [here](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock).

![Responsice Mockup](assets/readme-images/page-overview.png)

## Features 

### Existing Features

- __Header__

  - The header displays the name of the game and the page.

![Header](assets/readme-images/heading.png)

- __Game Area__

  - This section of the game displays the gameboard.
  - Allows you to choose a hand.
  - Allows you to play against the computer.
  - You can see whether you win or loose.
  - You can see what hand the computer has choosen.

![Game area](assets/readme-images/gamearea.png)

- __Score Area__

  - This area on the gameboard allows you to see the current score. 
  - Displays wins, losses and also draws.

![Score area](assets/readme-images/score_area.png)

### Features Left to Implement

  - Player vs Player.

## Testing 

  - During the development there was a bug that counted draws as losses. This was fixed by adding 1 more score section for draws and in the evaluate function it was added to se if the player hand and the computer hand was the same.
  - Tested all the buttons to see that they work.
  - Tested the to see if  the page is responsive and fits all screen sizes.


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C HTML validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmattias-b-pettersson.github.io%2FRockPaperScissorsLizardSpock-Game%2F). 
  - There is a warning for a empty heading, but this heading is filled with javascript while playing the game.
- CSS
  - No errors were found when passing through the official [(Jigsaw) CSS validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmattias-b-pettersson.github.io%2FRockPaperScissorsLizardSpock-Game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)

### Unfixed Bugs

  - There are no known bugs.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://code-institute-org.github.io/love-running-2.0/index.html 


## Credits 

In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism. 

You can break the credits section up into Content and Media, depending on what you have included in your project. 

### Content 

- The text for the Home page was taken from Wikipedia Article A
- Instructions on how to implement form validation on the Sign Up page was taken from [Specific YouTube Tutorial](https://www.youtube.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- The photos used on the home and sign up page are from This Open Source site
- The images used for the gallery page were taken from this other open source site


Congratulations on completing your Readme, you have made another big stride in the direction of being a developer! 