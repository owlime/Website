const projectModules = import.meta.glob('/src/data/projects/*.json', {
  eager: true,
  import: 'default'
});

export function getProjects() {
  return Object.values(projectModules)
    .filter((project) => project.published !== false)
    .sort((a, b) => Number(a.order ?? 999) - Number(b.order ?? 999));
}

export function getAllProjects() {
  return Object.values(projectModules).sort(
    (a, b) => Number(a.order ?? 999) - Number(b.order ?? 999)
  );
}
