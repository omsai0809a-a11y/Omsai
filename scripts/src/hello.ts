// Set page title
document.title = "Omsai | Smart AI Tools & Digital Solutions";

// Meta description
const metaDescription = document.createElement("meta");
metaDescription.name = "description";
metaDescription.content =
  "Omsai provides powerful AI tools and digital solutions to boost productivity, learning, and automation.";
document.head.appendChild(metaDescription);

// Robots tag
const metaRobots = document.createElement("meta");
metaRobots.name = "robots";
metaRobots.content = "index, follow";
document.head.appendChild(metaRobots);

// Canonical link
const canonical = document.createElement("link");
canonical.rel = "canonical";
canonical.href = "https://omsai.co.in/";
document.head.appendChild(canonical);

// Add visible SEO content
const content = document.createElement("div");
content.innerHTML = `
  <h1>Omsai - Smart AI Tools Platform</h1>
  <p>
    Omsai helps students, creators, and businesses use AI tools to improve productivity, automate tasks, and learn faster.
  </p>
`;
document.body.appendChild(content);
