import projectOrder from '../data/project-order.json';

const projectModules = import.meta.glob('/src/data/projects/*.json', {
  eager: true,
  import: 'default'
});

const normalizePath = (value = '') =>
  String(value)
    .replaceAll('\\', '/')
    .replace(/^\/+/, '');

const projectsWithPaths = Object.entries(projectModules).map(
  ([path, project]) => ({
    ...project,
    __path: normalizePath(path)
  })
);

const orderedPaths = Array.isArray(projectOrder)
  ? projectOrder
      .map((item) => normalizePath(item?.project))
      .filter(Boolean)
  : [];

const orderIndex = new Map(
  orderedPaths.map((path, index) => [path, index])
);

function sortProjects(projects) {
  return [...projects].sort((a, b) => {
    const aHasCustomOrder = orderIndex.has(a.__path);
    const bHasCustomOrder = orderIndex.has(b.__path);

    if (aHasCustomOrder && bHasCustomOrder) {
      return orderIndex.get(a.__path) - orderIndex.get(b.__path);
    }

    if (aHasCustomOrder) return -1;
    if (bHasCustomOrder) return 1;

    const legacyDifference =
      Number(a.order ?? 999999) - Number(b.order ?? 999999);

    if (legacyDifference !== 0) return legacyDifference;

    return String(a.title ?? '').localeCompare(String(b.title ?? ''));
  });
}

function removeInternalFields(project) {
  const { __path, ...publicProject } = project;
  return publicProject;
}

export function getProjects() {
  return sortProjects(
    projectsWithPaths.filter((project) => project.published !== false)
  ).map(removeInternalFields);
}

export function getAllProjects() {
  return sortProjects(projectsWithPaths).map(removeInternalFields);
}
