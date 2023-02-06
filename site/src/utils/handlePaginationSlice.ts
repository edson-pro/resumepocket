const handlePaginationSlice = ({ pageCount, currentPage }) => {
  const siblings = 1;
  const boundaries = 1;
  function range(start: number, end: number) {
    const length = end - start + 1;
    return Array.from({ length }, (_, index) => index + start);
  }
  const DOTS = "dot";

  const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;
  if (totalPageNumbers >= pageCount) {
    return range(1, pageCount);
  }

  const leftSiblingIndex = Math.max(currentPage - siblings, boundaries);
  const rightSiblingIndex = Math.min(
    currentPage + siblings,
    pageCount - boundaries
  );

  const shouldShowLeftDots = leftSiblingIndex > boundaries + 2;
  const shouldShowRightDots = rightSiblingIndex < pageCount - (boundaries + 1);

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = siblings * 2 + boundaries + 2;
    return [
      ...range(1, leftItemCount),
      DOTS,
      ...range(pageCount - (boundaries - 1), pageCount),
    ];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = boundaries + 1 + 2 * siblings;
    return [
      ...range(1, boundaries),
      DOTS,
      ...range(pageCount - rightItemCount, pageCount),
    ];
  }

  return [
    ...range(1, boundaries),
    DOTS,
    ...range(leftSiblingIndex, rightSiblingIndex),
    DOTS,
    ...range(pageCount - boundaries + 1, pageCount),
  ];
};

export default handlePaginationSlice;
