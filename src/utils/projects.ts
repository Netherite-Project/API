type Project = {
    name: string,
    repo: string
}

const PROJECTS: Map<string, Project> = new Map();

PROJECTS.set("netherite", {
    name: "NetheriteMC",
    repo: "Netherite-Project/Netherite"
});

PROJECTS.set("coming-soon", {
    name: "Coming Soom",
    repo: "Netherite-Project/DiamondMC"
});

export default PROJECTS;
