"use client";

import { useState } from "react";

const states = [
  {
    label: "Listo para conectar",
    detail: "Acerca el teléfono al punto NFC.",
    action: "Simular un toque",
  },
  {
    label: "Señal detectada",
    detail: "El objeto físico identifica la experiencia programada.",
    action: "Abrir experiencia",
  },
  {
    label: "Experiencia abierta",
    detail: "WhatsApp, menú, perfil, póliza o sistema: sin instalar una app.",
    action: "Reiniciar demo",
  },
] as const;

export function NfcSignalDemo() {
  const [step, setStep] = useState(0);
  const current = states[step];

  return (
    <div className={`nfcSignalDemo step-${step}`} aria-label="Demostración interactiva de una experiencia NFC">
      <div className="nfcDemoTop">
        <span>LIVE / NFC</span>
        <i aria-hidden="true" />
        <small>13.56 MHz</small>
      </div>
      <div className="nfcDemoStage" aria-hidden="true">
        <div className="nfcObject">
          <span>Z</span>
          <small>tap here</small>
        </div>
        <div className="nfcWaves" aria-hidden="true"><i /><i /><i /></div>
        <div className="nfcPhone" aria-hidden="true">
          <div className="nfcPhoneSensor" />
          <div className="nfcPhoneScreen">
            <span>{step === 2 ? "✓" : "NFC"}</span>
            <strong>{step === 2 ? "Abierto" : "Acercar"}</strong>
          </div>
        </div>
      </div>
      <div className="nfcDemoStatus" aria-live="polite">
        <div><span>0{step + 1}</span><strong>{current.label}</strong></div>
        <p>{current.detail}</p>
      </div>
      <button
        type="button"
        onClick={() => setStep((currentStep) => (currentStep + 1) % states.length)}
      >
        {current.action}
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
