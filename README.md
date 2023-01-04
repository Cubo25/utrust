# Utrust
Jakub Vitek QA Engineer challenge

https://docs.google.com/document/d/1fvSLIfklYzT30kr-d1bEQH1PEdZLpvlhiSUAH7NkVSc/edit#heading=h.foh0w5l4waj4

## Installation
1. `git clone https://github.com/Cubo25/utrust.git`
2. `cd utrust` 
3. `npm install` in the folder
4. `npx cypress open` to run Cypress

### Implementation decisions

Comments can be found directly in the code

### Questions
1. **We want to run this scenario automatically and frequently. What process/setup/tools would you choose to achieve this?**

My go to framework would be cypress because it is easy to use, fast and reliable. It comes with rich documentation & community of developers. Also if we want to use this scenario often I would set up CI/CD pipeline (e.g. gitlab) and for each pull request to the front-end code this scenario needs to pass. I think this scenario takes about 6 to 7 seconds so its really fast and reliable.

2. **On step 5, the system is supposed to send an email. How would you check if the email was really received to the email address?**

I did not finish this task but I would go with this gmail tester or any other plugin/tool found.

https://www.mediatoolkit.com/blog/how-to-read-cypress-gmail-tester/

3. **How would you test the same scenario on different screen sizes?**

Quoting the documentation:

> You can configure the size of the viewport height and width within a suite or test by passing the new configuration value within the test configuration.

- https://docs.cypress.io/api/commands/viewport#Set-viewport-in-the-test-configuration
- https://docs.cypress.io/api/commands/viewport#Syntax
