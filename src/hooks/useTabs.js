import { useState } from "react";
export function useTabs(initialTab, allTabs) {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  return [currentIndex, allTabs[currentIndex], setCurrentIndex];
}
