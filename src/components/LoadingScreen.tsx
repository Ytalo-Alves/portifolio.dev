export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-primary flex flex-col items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo/Name */}
        <h1 className="text-4xl md:text-6xl font-title font-bold gradient-text animate-fadeDown mb-8">
          Ytalo Alves
        </h1>

        {/* Loading Spinner */}
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 border-4 border-primary-lighter rounded-full"></div>
          <div className="absolute inset-0 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <p className="mt-6 text-text-secondary font-span animate-pulse">
          Carregando portfólio...
        </p>
      </div>
    </div>
  );
}
