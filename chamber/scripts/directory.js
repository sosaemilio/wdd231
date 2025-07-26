const directoryUrl = "https://sosaemilio.github.io/wdd231/chamber/data/members.json";

async function getCompanies(url) {
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        displayDirectory(data);
    } else {
        throw Error(await response.text());
    }
}

function displayDirectory(directoryJSON) {
    directoryJSON.forEach((company) => {
        const section = document.createElement("section");
        const companyName = document.createElement("h2");
        companyName.textContent = company.companyName;

        const address = document.createElement("p");
        address.textContent = company.address;

        const telephone = document.createElement("a");
        telephone.textContent = company.telephone;
        telephone.setAttribute("href", `tel:${company.telephone}`);

        const website = document.createElement("a");
        website.textContent = "Visit Website";
        website.setAttribute("href", company.website);

        const membership = document.createElement("p");
        membership.textContent = company.membership;


        section.append(companyName, address, membership, telephone, website);
        document.getElementById("directory").append(section);

    });
}

getCompanies(directoryUrl);


const gridButton = document.getElementById("grid-view");
const listButton = document.getElementById("list-view");
const directory = document.getElementById("directory");

function showList() {
    directory.className = "";
    directory.classList.add("flex");
}

function showGrid() {
    directory.className = "";
    directory.classList.add("grid");
}

gridButton.addEventListener("click", showGrid);
listButton.addEventListener("click", showList);