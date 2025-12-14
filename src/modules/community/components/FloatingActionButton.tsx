export default function FloatingActionButton() {
  return (
    <div className="fixed bottom-6 right-6" data-testid="fab-button">
      <button className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-shadow">
        <span className="material-symbols-outlined text-4xl">add</span>
      </button>
    </div>
  );
}
