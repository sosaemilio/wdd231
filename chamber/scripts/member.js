const directoryUrl = "https://sosaemilio.github.io/wdd231/chamber/data/members.json";

/*
Function to fetch and display member data from a JSON file on the homepage class members-spotlight container
*/

let membersJSON = [];

async function getMembers(url) {
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        displayMembers(data);
    } else {
        console.error("Failed to fetch member data");
    }
}
function displayMembers(membersJSON) {
    membersJSON.forEach((member) => {
        const sectionHTML = `<section class="business-card">
                <h3>${member.companyName}</h3>
                <h4>${member.tagline}</h4>
                <div class="business-information">
                    <div><img src="images/favicon.ico" alt="Business Logo" class="business-logo"></div>
                    <div>
                        <p><b>Email:</b> ${member.email}</p>
                        <p><b>Phone:</b> <a href="tel:${member.telephone}">${member.telephone}</a></p>
                        <p><b>URL:</b> <a href="${member.website}" target="_blank">${member.website}</a></p>
                    </div>
                </div>
            </section>`;
        document.querySelector(".members-spotlight").insertAdjacentHTML("beforeend", sectionHTML);
    });
}

getMembers(directoryUrl);
