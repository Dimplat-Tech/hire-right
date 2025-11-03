import Button from "../common/Button";

export default function talentButton() {
  return (
    <div className="flex  items-center justify-center mt-16">
      <Button
        variant="secondary"
        href="/"
        className="px-5 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-xl sm:rounded-2xl"
        arrow
      >
        Submit Form
      </Button>
    </div>
  );
}