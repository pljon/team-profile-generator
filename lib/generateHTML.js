const path = require("path");
const fs = require("fs");

// load the directory of the html templates
const templatesDir = path.resolve(__dirname, "../src");

// main render function
const render = employees => {
  const html = employees.map(employee => {
    // render each employee and store in an array
    let template;
    // loads template that corresponds to the employee's role and replaces placeholders with user's input
    if (employee.getRole() === "Manager") {
      template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
      template = replacePlaceholders(template, "officeNumber", employee.getOffice());
    } else if (employee.getRole() === "Engineer") {
      template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
      template = replacePlaceholders(template, "github", employee.getGithub());
    } else if (employee.getRole() === "Intern") {
      template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
      template = replacePlaceholders(template, "school", employee.getSchool());
    }
    // replace the common / remaining placeholders with user's input
    template = replacePlaceholders(template, "name", employee.getName());
    template = replacePlaceholders(template, "role", employee.getRole());
    template = replacePlaceholders(template, "email", employee.getEmail());
    template = replacePlaceholders(template, "id", employee.getID());
    return template;
  });
  // returns rendered html template 
  return renderHome(html.join(""));
};

// renders home html template
const renderHome = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, "home.html"), "utf8");
  return replacePlaceholders(template, "team", html);
};

// replace placeholders in each template with data from user's input
const replacePlaceholders = (template, placeholder, value) => {
    // new RegExp object was created to match the placeholder
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  // replaces the placeholder with user's input if matched
  return template.replace(pattern, value);
};

module.exports = render;
