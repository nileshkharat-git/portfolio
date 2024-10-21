
const skills = [
  {
    name: "bootstrap",
    desc: {
      info: "Bootstrap is a front-end framework that provides pre-designed UI components and responsive grid systems to streamline the development of visually appealing and mobile-friendly websites.",
      exp: "Advance",
    },
  },
  {
    name: "express-js",
    desc: {
      info: "Express.js is a minimal and flexible Node.js web application framework that simplifies the creation of robust and scalable server-side applications and APIs.",
      exp: "Intermediate",
    },
  },
  {
    name: "python",
    desc: {
      info: "Python programming is a versatile, high-level language known for its simplicity and readability, widely used in web development, data analysis, automation, and more.",
      exp: "Advance",
    },
  },
  {
    name: "javascript",
    desc: {
      info: "JavaScript is a dynamic, high-level scripting language primarily used to create interactive effects and functionalities on websites.",
      exp: "Advance",
    },
  },
  {
    name: "html",
    desc: {
      info: "HTML (HyperText Markup Language) is the standard language used to create and structure content on the web, defining elements like headings, paragraphs, links, and multimedia.",
      exp: "Advance",
    },
  },
  {
    name: "css",
    desc: {
      info: "CSS (Cascading Style Sheets) is a stylesheet language used to control the appearance and layout of HTML elements on a web page, including colors, fonts, and spacing.",
      exp: "Advance",
    },
  },
  {
    name: "django",
    desc: {
      info: "Django is a high-level Python web framework that enables rapid development of secure and scalable web applications with a clean and pragmatic design.",
      exp: "Advance",
    },
  },
  {
    name: "react-js",
    desc: {
      info: "React.js is a JavaScript library for building user interfaces, particularly single-page applications, by creating reusable UI components and managing state efficiently.",
      exp: "Intermediate",
    },
  },
  {
    name: "redux",
    desc: {
      info: "Redux is a state management library for JavaScript applications that provides a predictable way to manage and update the application state through a unidirectional data flow.",
      exp: "Intermediate",
    },
  },
  {
    name: "node-js",
    desc: {
      info: "Node.js is a runtime environment that allows JavaScript to be executed on the server side, enabling the development of scalable and high-performance network applications.",
      exp: "Intermediate",
    },
  },
  {
    name: "mongodb",
    desc: {
      info: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it easy to handle large volumes of unstructured or semi-structured data.",
      exp: "Advance",
    },
  },
  {
    name: "postgresql",
    desc: {
      info: "PostgreSQL is an Advance, open-source relational database management system known for its robustness, extensibility, and support for complex queries and transactions.",
      exp: "Intermediate",
    },
  },
  {
    name: "tailwind-css",
    desc: {
      info: "Tailwind CSS is a utility-first CSS framework that provides a set of low-level, customizable classes to build modern, responsive designs quickly and efficiently.",
      exp: "Advance",
    },
  },
  {
    name: "github",
    desc: {
      info: "GitHub is a web-based platform for version control and collaborative software development, using Git to manage and track code changes and facilitate teamwork.",
      exp: "Advance",
    },
  },
  {
    name: "vs-code",
    desc: {
      info: "VS Code is a powerful code editor that provides a wide range of features, including syntax highlighting, code completion, code refactoring, and code formatting.",
      exp: "Intermediate",
    },
  },
  {
    name: "pycharm",
    desc: {
      info: "PyCharm is a powerful IDE for Python development, providing a wide range of features, including syntax highlighting, code completion, code refactoring, and code formatting.",
      exp: "Advance",
    },
  },
];

const icons = document.querySelectorAll(".code-icons");

function getStar(level){
  if(level === "Advance"){
    return `<span class="star"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></span>`;
  }else if(level === "Intermediate"){
    return `<span class="star"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></i><i class="bi bi-star"></i></span>`;
  }else{
    return `<span class="star"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></span>`;
  }
}
icons.forEach((element) => {
  element.addEventListener("mouseover", () => {
    let skillDesc = document.querySelector(".skill-desc");
    skills.forEach((skill) => {
      if (skill.name === element.alt) {
        skillDesc.innerHTML = `<p class="skill-desc-p"><span id="skill-name">${skill.name}</span><span id="skill-exp">Experience: ${getStar(skill.desc.exp)}</span>${skill.desc.info}</p>`;
        
      }
    });
  });
  element.addEventListener("mouseout", () => {
    let skillDesc = document.querySelector(".skill-desc");
    skillDesc.innerHTML = `<p class="skill-desc-p"></p>`;
  });
});


function readMore(projectName) {
  let dot = document.querySelector(`#dots-${projectName}`);
  let moreText = document.querySelector(`#more-${projectName}`);
  let readBtn = document.querySelector(`#para-btn-${projectName}`);

  if (dot.style.display === "none") {
    dot.style.display = "inline";
    moreText.style.display = "none";
    readBtn.innerHTML = "Read More";
  } else {
    dot.style.display = "none";
    moreText.style.display = "inline";
    readBtn.innerHTML = "Read Less";
    
  }
}