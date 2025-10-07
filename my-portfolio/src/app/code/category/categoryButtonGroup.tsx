import { CategoryButton } from "./categoryButton";

export const CategoryButtonGroup = () => {
  return (
    <div className="flex flex-row gap-4 text-md text-[var(--primary)] mb-4">
      <CategoryButton category="client"/>
      <CategoryButton category="academic"/>
      <CategoryButton category="hobby"/>
    </div>
  );
};
