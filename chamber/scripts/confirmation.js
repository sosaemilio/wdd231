const params = new URLSearchParams(window.location.search);
const first_name = params.get('first_name')
const last_name = params.get('last_name');
const title = params.get('title');
const email = params.get('email');
const phone = params.get('telephone');
const message = params.get('business_message');
const membership = params.get('membership');
const date = params.get('submitted_date');
const description = params.get('description');


const thankYoyBlock = document.querySelector('#thankyou');

// display the params inside the thank you block
thankYoyBlock.innerHTML = `
    <h2>Thank you for your submission, ${first_name} ${last_name}!</h2>
    <p>We have received your request for a ${membership} membership.</p>
    <p>We will get back to you soon at ${email}.</p>
    <p>Submitted on: ${date}</p>
    <p>Description: ${description}</p>
    <p> Telephone: ${phone}</p>
    <p>Title: ${title}</p>
    <p>We appreciate your interest in joining the Chamber of Commerce.</p>
    <p>Best regards,</p>
    <p>The Chamber of Commerce Team</p>
`;