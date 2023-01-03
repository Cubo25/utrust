# Utrust
## First work on Utrust project

## Installation
1. `git clone https://github.com/Cubo25/Innovatrics.git`
2. `cd Innovatrics` 
3. `npm install` in the folder
4. `npm cypress open` to run Cypress
## Materials
https://docs.google.com/document/d/1fvSLIfklYzT30kr-d1bEQH1PEdZLpvlhiSUAH7NkVSc/edit#heading=h.foh0w5l4waj4


### Questions
1. **We want to run this scenario automatically and frequently. What process/setup/tools would you choose to achieve this?**

My go to framework would be cypress because of its easy to use nature and rich documentation & community of developers. Also if we want to use this scenario often I would set up CD/CI pipeline (e.g. gitlab)
and for each pull request to the front-end code this scenario needs to pass. I think this scenario takes about 10s so its really fast and reliable.

2. **On step 5, the system is supposed to send an email. How would you check if the email was really received to the email address?**
https://www.mediatoolkit.com/blog/how-to-read-cypress-gmail-tester/

3. **How would you test the same scenario on different screen sizes?**

I would use enviroment variables and before each run I would enter desired viewport:
- https://docs.cypress.io/guides/core-concepts/variables-and-aliases#Sharing-Context
- https://docs.cypress.io/guides/guides/environment-variables#Option-4-env
- https://docs.cypress.io/guides/guides/environment-variables#Option-5-Test-Configuration
