const citation = document.querySelector("#opened-citation");
const bottomsheet = document.querySelector("#bottomsheet");
const closebtn = document.querySelector("#close-btn");

document.body.addEventListener("click", () => {
  hideBottomsheet();
});

window.addEventListener("load", () => {
  for (let cites of document.querySelectorAll(".cit")) {
    cites.addEventListener("click", (e) => {
      switch (cites.id) {
        case "1":
          showBottomSheet();
          citation.textContent =
            "Mudit Kapoor, “Rs. 40,000 Crore: Cost of Maharashtra Lockdown,” Business Today, 8 April 2021: https://www.businesstoday.in/current/graphics/rs-40000-crore-cost-of-maharashtra-lockdown/story/436118";
          e.stopPropagation();
          break;
        case "2":
          showBottomSheet();
          citation.textContent =
            "Press Information Bureau Public Tweet, 8 April 2021: https://twitter.com/PIBMumbai/status/1380178867487264775";
          e.stopPropagation();
          break;
        case "3":
          showBottomSheet();
          citation.textContent =
            "'Maharashtra Records 56,286 new COVID cases,'New Indian Express, 9 April 2021: https://www.newindianexpress.com/nation/2021/apr/09/maharashtra-records-56286-new-covidcases-state -faces-severe-vaccine-remdesivir-shortage-2287835.html";
          e.stopPropagation();
          break;
        case "4":
          showBottomSheet();
          citation.textContent =
            "Soham Sankaran '113 Billion COVID Tests for India,' https://soh.am/writes/113_billion_covid_tests_for_india/";
          e.stopPropagation();
          break;
        case "5":
          showBottomSheet();
          citation.textContent =
            "Paul Romer and Rajiv Shah, 'Testing Is Our Way Out,' Wall Street Journal, 2 April 2020: https://www.wsj.com/articles/testing-is-our-way-out-11585869705";
          e.stopPropagation();
          break;
        case "6":
          showBottomSheet();
          citation.textContent =
            "Michael Mina, “How We Can Stop the Spread of COVID-19 by Christmas,” TIME, 17 November 2020.";
          e.stopPropagation();
          break;
        case "7":
          showBottomSheet();
          citation.textContent =
            "For example, see Pieter Libin et. al., “Assessing the feasibility and effectiveness of household-pooled universal testing to control COVID-19 epidemics,” PLOS Computational Biology, 9 March 2021: https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1008688, and Reda Cherif and Fuad Hasanov, “Universal Testing: An Overlooked COVID-19 Policy Response,” VoxEU, 15 August 2020: https://voxeu.org/article/universal-testing-overlooked-covid-19-policy-response. A simple model can be found at Paul Romer, “Simulating COVID-19,” https://paulromer.net/covid-sim-part1/";
          e.stopPropagation();
          break;
        case "8":
          showBottomSheet();
          citation.textContent =
            "Sushmi Dey, “Centre to States: Limit RAT, Use RT-PCR Tests,” Economic Times, 12 December 2020: https://health.economictimes.indiatimes.com/news/industry/centre-to-states-limit-rat-use-rt-pcr-tests/7968 9301";
          e.stopPropagation();
          break;
        case "9":
          showBottomSheet();
          citation.textContent =
            "See Alex Crozier et. al., “Put to the Test: Use of Rapid Testing Technologies for COVID-19,” BMJ, Issue 8278 (February 2021): https://www.bmj.com/content/372/bmj.n208.full, and Genary Pilarowski et. al., “Performance Characteristics of a Rapid Severe Acute Respiratory Syndrome Coronavirus 2 Antigen Detection Assay at a Public Plaza Testing Site in San Francisco,” The Journal of Infectious Diseases, Vol. 223 Issue 7 (April 2021): https://academic.oup.com/jid/article/223/7/1139/6061974";
          e.stopPropagation();
          break;
        case "10":
          showBottomSheet();
          citation.textContent =
            "While these tests currently cost on the order of 100 INR, this is with production at a tiny scale relative to the needs of a national universal testing program. The government could quickly bring the cost down by rapidly increasing manufacturing capacity in order to unlock significant economies of scale. ";
          e.stopPropagation();
          break;
        case "11":
          showBottomSheet();
          citation.textContent =
            "Paul Romer, 'Even A Bad Test Can Help Guide the Decision to Isolate,' https://paulromer.net/covid-sim-part3/";
          e.stopPropagation();
          break;
        case "12":
          showBottomSheet();
          citation.textContent =
            "Department of Biotechnology supports production scale-up of test kits from MyLab,” Press Information Bureau, 25 July 2020: https://pib.gov.in/Pressreleaseshare.aspx?PRID=1641141";
          e.stopPropagation();
          break;
        case "13":
          showBottomSheet();
          citation.textContent =
            "See A. David Paltiel et. al., “COVID-19 screening strategies that permit the safe re-opening of college campuses,” medRxiv Preprint, July 2020: https://www.medrxiv.org/content/10.1101/2020.07.06.20147702v1, and Kelcie Pegher, “Coronavirus Today: The NBA’s Bubble Worked,” LA Times, 12 October 2020: https://www.latimes.com/science/newsletter/2020-10-12/coronavirus-today-nba-bubble-success-covid-lak ers-coronavirus-today";
          e.stopPropagation();
          break;
        case "14":
          showBottomSheet();
          citation.textContent =
            "Martin Pavelka et. al., “The impact of population-wide rapid antigen testing on SARS-CoV-2 prevalence in Slovakia,” Science Magazine, March 2021: https://science.sciencemag.org/content/early/2021/03/26/science.abf9648";
          e.stopPropagation();
          break;
        case "15":
          showBottomSheet();
          citation.textContent =
            "Brain Platt, “Nova Scotia Embraced Rapid Testing for COVID-19 Months Ago,” National Post, 15 Jan 2021: https://nationalpost.com/news/politics/nova-scotia-embraced-rapid-testing-for-covid-19-months-ago-why-h ave-other-provinces-been-so-slow";
          e.stopPropagation();
          break;
        case "16":
          showBottomSheet();
          citation.textContent =
            "COVID: Tests to be Offered Twice-Weekly to All in England,” BBC, 6 April 2021: https://www.bbc.com/news/uk-56632084. See Liverpool COVID-SMART Pilot Evaluations, University of Liverpool, December-January 2021, at: https://www.liverpool.ac.uk/coronavirus/research-and-analysis/covid-smart-pilot/";
          e.stopPropagation();
          break;
        case "17":
          showBottomSheet();
          citation.textContent =
            "CDC and NIH bring COVID-19 self-testing to residents in two locales,” NIH Press Release, 31 March 2021: https://www.nih.gov/news-events/news-releases/cdc-nih-bring-covid-19-self-testing-residents-two-locales";
          e.stopPropagation();
          break;
        case "18":
          showBottomSheet();
          citation.textContent =
            "Jennifer Surane, “Citi Debuts Rapid At-Home Covid Tests to Branch Workers, Traders,” Bloomberg, 10 March 2021: https://www.bloomberg.com/news/articles/2021-03-10/citi-debuts-rapid-at-home-covid-tests-to-branch-wor kers-traders ";
          e.stopPropagation();
          break;
        case "19":
          showBottomSheet();
          citation.textContent =
            "India is unlikely to be vaccinated to the 70% level before the end of 2021. Some conservative models estimate that India will not reach 70% vaccination until late 2022; see “More than 85 poor countries will not have widespread access to coronavirus vaccines before 2023,” The Economist Intelligence Unit, 27 Jan 2021: https://www.eiu.com/n/85-poor-countries-will-not-have-access-to-coronavirus-vaccines/";
          e.stopPropagation();
          break;
        case "20":
          showBottomSheet();
          citation.textContent =
            "Jacob Koshy, “Coronavirus: Indian ‘Double Mutant’ Strain,” The Hindu, 8 April 2021: https://www.thehindu.com/news/national/indian-double-mutant-strain-named-b1617/article34274663.ece";
          e.stopPropagation();
          break;
        default:
          console.log("sd");
          break;
      }
    });
  }
});

function showBottomSheet() {
  bottomsheet.classList.add("bottomsheet-summon-div");
  bottomsheet.classList.remove("bottomsheet-hide-div");
}

closebtn.addEventListener("click", () => {
  hideBottomsheet();
});

function hideBottomsheet() {
  bottomsheet.classList.add("bottomsheet-hide-div");
  bottomsheet.classList.remove("bottomsheet-summon-div");
}
