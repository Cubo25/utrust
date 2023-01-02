# UTRUST
## First work on Utrust project
### Questions
1. **We want to run this scenario automatically and frequently. What process/setup/tools would you choose to achieve this?**

My go to framework would be cypress because of its easy to use nature. Also if we want to use this scenario often I would set up CD/CI pipeline (gitlab)
and for each pull request to the front-end code this scenario needs to pass. I think this scenario takes about 10s so its really fast and reliable.

2. **On step 5, the system is supposed to send an email. How would you check if the email was really received to the email address?**


3. **How would you test the same scenario on different screen sizes?**

I would use enviroment variables and before each run I would enter desired viewport:
https://docs.cypress.io/guides/core-concepts/variables-and-aliases#Sharing-Context
https://docs.cypress.io/guides/guides/environment-variables#Option-4-env
https://docs.cypress.io/guides/guides/environment-variables#Option-5-Test-Configuration
