const projectModules = import.meta.glob('/src/data/projects/*.json', {
  eager: true,
  import: 'default'
});

const projects = Object.values(projectModules);

function sortByDisplayOrder(items) {
  return [...items].sort((a, b) => {
    const orderDifference =
      Number(a.order ?? 999999) - Number(b.order ?? 999999);

    if (orderDifference !== 0) {
      return orderDifference;
    }

    return String(a.title ?? '').localeCompare(String(b.title ?? ''));
  });
}

export function getProjects() {
  return sortByDisplayOrder(
    projects.filter((project) => project.published !== false)
  );
}

export function getAllProjects() {
  return sortByDisplayOrder(projects);
}
