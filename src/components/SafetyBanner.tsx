
import { ShieldCheck } from "lucide-react";

export const SafetyBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-green-500 text-white py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
      <ShieldCheck className="w-5 h-5" />
      <span className="tracking-wide">COMPRA 100% SEGURA</span>
    </div>
  );
};
