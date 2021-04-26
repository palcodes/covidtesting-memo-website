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
          citation.innerHTML =
            "[1] Mudit Kapoor, “Rs. 40,000 Crore: Cost of Maharashtra Lockdown,” Business Today, 8 April 2021: <a href='https://www.businesstoday.in/current/graphics/rs-40000-crore-cost-of-maharashtra-lockdown/story/436118'>https://www.businesstoday.in/current/graphics/rs-40000-crore-cost-of-maharashtra-lockdown/story/436118</a>";
          e.stopPropagation();
          break;
        case "2":
          showBottomSheet();
          citation.innerHTML =
            "[2] Press Information Bureau Public Tweet, 8 April 2021: <a href='https://twitter.com/PIBMumbai/status/1380178867487264775'>https://twitter.com/PIBMumbai/status/1380178867487264775</a>";
          e.stopPropagation();
          break;
        case "3":
          showBottomSheet();
          citation.innerHTML =
            "[3] 'Maharashtra Records 56,286 new COVID cases,'New Indian Express, 9 April 2021: <a href='https://www.newindianexpress.com/nation/2021/apr/09/maharashtra-records-56286-new-covidcases-state'>https://www.newindianexpress.com/nation/2021/apr/09/maharashtra-records-56286-new-covidcases-state</a> -faces-severe-vaccine-remdesivir-shortage-2287835.html";
          e.stopPropagation();
          break;
        case "4":
          showBottomSheet();
          citation.innerHTML =
            "[4] Soham Sankaran '113 Billion COVID Tests for India,' <a href='https://soh.am/writes/113_billion_covid_tests_for_india/'>https://soh.am/writes/113_billion_covid_tests_for_india/</a>";
          e.stopPropagation();
          break;
        case "5":
          showBottomSheet();
          citation.innerHTML =
            "[5] Paul Romer and Rajiv Shah, 'Testing Is Our Way Out,' Wall Street Journal, 2 April 2020: <a href='https://www.wsj.com/articles/testing-is-our-way-out-11585869705'>https://www.wsj.com/articles/testing-is-our-way-out-11585869705</a>";
          e.stopPropagation();
          break;
        case "6":
          showBottomSheet();
          citation.innerHTML =
            "[6] Michael Mina, “How We Can Stop the Spread of COVID-19 by Christmas,” TIME, 17 November 2020.";
          e.stopPropagation();
          break;
        case "7":
          showBottomSheet();
          citation.innerHTML =
            "[7] For example, see Pieter Libin et. al., “Assessing the feasibility and effectiveness of household-pooled universal testing to control COVID-19 epidemics,” PLOS Computational Biology, 9 March 2021: <a href='https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1008688'>https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1008688</a>, and Reda Cherif and Fuad Hasanov, “Universal Testing: An Overlooked COVID-19 Policy Response,” VoxEU, 15 August 2020: <a href='https://voxeu.org/article/universal-testing-overlooked-covid-19-policy-response'>https://voxeu.org/article/universal-testing-overlooked-covid-19-policy-response</a>. A simple model can be found at Paul Romer, “Simulating COVID-19,” <a href='https://paulromer.net/covid-sim-part1'>https://paulromer.net/covid-sim-part1/</a>";
          e.stopPropagation();
          break;
        case "8":
          showBottomSheet();
          citation.innerHTML =
            "[8] Sushmi Dey, “Centre to States: Limit RAT, Use RT-PCR Tests,” Economic Times, 12 December 2020: <a href='https://health.economictimes.indiatimes.com/news/industry/centre-to-states-limit-rat-use-rt-pcr-tests/79689301'>https://health.economictimes.indiatimes.com/news/industry/centre-to-states-limit-rat-use-rt-pcr-tests/79689301</a>";
          e.stopPropagation();
          break;
        case "9":
          showBottomSheet();
          citation.innerHTML =
            "[9] See Alex Crozier et. al., “Put to the Test: Use of Rapid Testing Technologies for COVID-19,” BMJ, Issue 8278 (February 2021): <a href='https://www.bmj.com/content/372/bmj.n208.full'>https://www.bmj.com/content/372/bmj.n208.full</a>, and Genary Pilarowski et. al., “Performance Characteristics of a Rapid Severe Acute Respiratory Syndrome Coronavirus 2 Antigen Detection Assay at a Public Plaza Testing Site in San Francisco,” The Journal of Infectious Diseases, Vol. 223 Issue 7 (April 2021): <a href='https://academic.oup.com/jid/article/223/7/1139/6061974'>https://academic.oup.com/jid/article/223/7/1139/6061974</a>";
          e.stopPropagation();
          break;
        case "10":
          showBottomSheet();
          citation.innerHTML =
            "[10] While these tests currently cost on the order of 100 INR, this is with production at a tiny scale relative to the needs of a national universal testing program. The government could quickly bring the cost down by rapidly increasing manufacturing capacity in order to unlock significant economies of scale. ";
          e.stopPropagation();
          break;
        case "11":
          showBottomSheet();
          citation.innerHTML =
            "[11] Paul Romer, 'Even A Bad Test Can Help Guide the Decision to Isolate,' <a href='https://paulromer.net/covid-sim-part3/'>https://paulromer.net/covid-sim-part3/</a>";
          e.stopPropagation();
          break;
        case "12":
          showBottomSheet();
          citation.innerHTML =
            "[12] Department of Biotechnology supports production scale-up of test kits from MyLab,” Press Information Bureau, 25 July 2020: <a href='https://pib.gov.in/Pressreleaseshare.aspx?PRID=1641141'>https://pib.gov.in/Pressreleaseshare.aspx?PRID=1641141</a>";
          e.stopPropagation();
          break;
        case "13":
          showBottomSheet();
          citation.innerHTML =
            "[13] See A. David Paltiel et. al., “COVID-19 screening strategies that permit the safe re-opening of college campuses,” medRxiv Preprint, July 2020: <a href='https://www.medrxiv.org/content/10.1101/2020.07.06.20147702v1'>https://www.medrxiv.org/content/10.1101/2020.07.06.20147702v1</a>, and Kelcie Pegher, “Coronavirus Today: The NBA’s Bubble Worked,” LA Times, 12 October 2020: <a href='https://www.latimes.com/science/newsletter/2020-10-12/coronavirus-today-nba-bubble-success-covid-lakers-coronavirus-today'>https://www.latimes.com/science/newsletter/2020-10-12/coronavirus-today-nba-bubble-success-covid-lakers-coronavirus-today</a>";
          e.stopPropagation();
          break;
        case "14":
          showBottomSheet();
          citation.innerHTML =
            "[14] Martin Pavelka et. al., “The impact of population-wide rapid antigen testing on SARS-CoV-2 prevalence in Slovakia,” Science Magazine, March 2021: <a href='https://science.sciencemag.org/content/early/2021/03/26/science.abf9648'>https://science.sciencemag.org/content/early/2021/03/26/science.abf9648</a>";
          e.stopPropagation();
          break;
        case "15":
          showBottomSheet();
          citation.innerHTML =
            "[15] Brain Platt, “Nova Scotia Embraced Rapid Testing for COVID-19 Months Ago,” National Post, 15 Jan 2021: <a href='https://nationalpost.com/news/politics/nova-scotia-embraced-rapid-testing-for-covid-19-months-ago-why-have-other-provinces-been-so-slow'>https://nationalpost.com/news/politics/nova-scotia-embraced-rapid-testing-for-covid-19-months-ago-why-have-other-provinces-been-so-slow</a>";
          e.stopPropagation();
          break;
        case "16":
          showBottomSheet();
          citation.innerHTML =
            "[16] COVID: Tests to be Offered Twice-Weekly to All in England,” BBC, 6 April 2021: <a href='https://www.bbc.com/news/uk-56632084'>https://www.bbc.com/news/uk-56632084</a>. See Liverpool COVID-SMART Pilot Evaluations, University of Liverpool, December-January 2021, at: <a href='https://www.liverpool.ac.uk/coronavirus/research-and-analysis/covid-smart-pilot/'>https://www.liverpool.ac.uk/coronavirus/research-and-analysis/covid-smart-pilot/</a>";
          e.stopPropagation();
          break;
        case "17":
          showBottomSheet();
          citation.innerHTML =
            "[17] CDC and NIH bring COVID-19 self-testing to residents in two locales,” NIH Press Release, 31 March 2021: <a href='https://www.nih.gov/news-events/news-releases/cdc-nih-bring-covid-19-self-testing-residents-two-locales'>https://www.nih.gov/news-events/news-releases/cdc-nih-bring-covid-19-self-testing-residents-two-locales</a>";
          e.stopPropagation();
          break;
        case "18":
          showBottomSheet();
          citation.innerHTML =
            "[18] Jennifer Surane, “Citi Debuts Rapid At-Home Covid Tests to Branch Workers, Traders,” Bloomberg, 10 March 2021: <a href='https://www.bloomberg.com/news/articles/2021-03-10/citi-debuts-rapid-at-home-covid-tests-to-branch-workers-traders'>https://www.bloomberg.com/news/articles/2021-03-10/citi-debuts-rapid-at-home-covid-tests-to-branch-workers-traders</a>";
          e.stopPropagation();
          break;
        case "19":
          showBottomSheet();
          citation.innerHTML =
            "[19] India is unlikely to be vaccinated to the 70% level before the end of 2021. Some conservative models estimate that India will not reach 70% vaccination until late 2022; see “More than 85 poor countries will not have widespread access to coronavirus vaccines before 2023,” The Economist Intelligence Unit, 27 Jan 2021: <a href='https://www.eiu.com/n/85-poor-countries-will-not-have-access-to-coronavirus-vaccines/'>https://www.eiu.com/n/85-poor-countries-will-not-have-access-to-coronavirus-vaccines/</a>";
          e.stopPropagation();
          break;
        case "20":
          showBottomSheet();
          citation.innerHTML =
            "[20] Jacob Koshy, “Coronavirus: Indian ‘Double Mutant’ Strain,” The Hindu, 8 April 2021: <a href='https://www.thehindu.com/news/national/indian-double-mutant-strain-named-b1617/article34274663.ece'>https://www.thehindu.com/news/national/indian-double-mutant-strain-named-b1617/article34274663.ece</a>";
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
  bottomsheet.style.display = "block";
}

closebtn.addEventListener("click", () => {
  hideBottomsheet();
});

function hideBottomsheet() {
  bottomsheet.classList.add("bottomsheet-hide-div");
  bottomsheet.classList.remove("bottomsheet-summon-div");
  setTimeout(() => {
    bottomsheet.style.display = "none";
  }, 500);
}
