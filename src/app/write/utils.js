export const transformCategoriesToSelectOptions = (categories) =>
  categories?.map(({ id, slug: value, title: label }) => ({
    id,
    label,
    value,
    disabled: false,
  }));
