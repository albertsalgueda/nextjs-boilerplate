export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Your Altaner
        </h1>
        
        <p className="text-lg text-center opacity-80">
          Start a conversation with AI and explore endless possibilities
        </p>

        <button 
          className="px-6 py-2 bg-black text-white rounded-lg 
                     hover:bg-gray-800 transition-colors"
        >
          Start Chatting 
        </button>
      </main>
    </div>
  );
}
