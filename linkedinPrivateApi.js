import { Client } from 'linkedin-private-api';
import { config } from 'dotenv';
config();

// Votre code existant

const username = process.env.LINKEDIN_USERNAME ;
const password = process.env.LINKEDIN_PASSWORD ;
// console.log(process.env.LINKEDIN_USERNAME)
(async () => {
  // Login
  const client = new Client();
  await client.login.userPass({ username, password });
  
  // Search for React development jobs in Israel
  const jobsScroller = await client.search.searchJobs({
    keywords: 'React',
    filters: { location: 'France' },
    limit: 20,
    skip: 5,
  });

  // Ajoutez ici le code pour utiliser jobsScroller
  const [someReactJobHit] = await jobsScroller.scrollNext();
  console.log(someReactJobHit)
  const jobCompanyName = someReactJobHit.hitInfo.jobPosting.companyDetails.company.name;
})();
