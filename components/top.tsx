import * as React from "react";

export default function Top() {
  return (
    <div
      className="bg-no-repea flex h-screen w-full flex-col items-center justify-center bg-cover bg-fixed bg-center text-center tracking-widest duration-1000"
      data-testid="top"
    >
      <div>
        <h1 className="relative my-8 text-5xl font-semibold text-holdi-orange">
          HOLDI
        </h1>
        <p className="text-lg text-white">Serwis, któremu możesz zaufać</p>
      </div>
    </div>
  );
}
