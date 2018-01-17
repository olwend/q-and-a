The aim: 
- Redesign the code in script.js so that the question / answer list behaves as described below (and as demonstrated on the live system)

Secondary aim:
- Get the index looking roughly like the component in "mockup.png"

Instructions and caveats: 
- The next and previous link should, when getting to the final and first questions respectively, loop to the other end. So selecting "next" on the final question should cycle to the first.
- The code should not be dependent on the number of questions - adding questions/answers should not break the code (i.e. no hardcoding "go to question 5" as a solution for getting to the final question)
- The end JS should be as DRY as possible.
- The CSS doesn't really matter - make it as messy as you like.
- Don't worry about the arrow images, use text links.

Extra aims:
- The current question should always be in view in the list (create an auto scrolling function when the question is outside the bounds of the container - look into scrolltop(), position(), and offset() to help)
- The answers should fade in and out neatly
- The mobile view should be able to minimise or expand the question list
