"use client";

import { useEffect, useState } from "react";

const states = [
  {
    label: "Punto preparado",
    detail: "El chip espera una lectura segura a pocos centímetros.",
    action: "Iniciar acercamiento",
    protocol: "IDLE",
    latency: "—",
    destination: "ZIVI.CLOUD",
    screen: "Acerca el teléfono",
    screenDetail: "No necesitas instalar una app",
  },
  {
    label: "Campo detectado",
    detail: "El teléfono energiza el chip y solicita la experiencia asignada.",
    action: "Completar enlace",
    protocol: "ISO 14443",
    latency: "08 ms",
    destination: "RESOLVING",
    screen: "NFC detectado",
    screenDetail: "Leyendo punto seguro…",
  },
  {
    label: "Enlace verificado",
    detail: "Zivi resuelve el destino editable y registra la interacción.",
    action: "Abrir experiencia",
    protocol: "HTTPS",
    latency: "126 ms",
    destination: "READY",
    screen: "Conexión segura",
    screenDetail: "Experiencia verificada",
  },
  {
    label: "Acción completada",
    detail: "La póliza, menú, perfil o servicio aparece listo para usarse.",
    action: "Repetir demostración",
    protocol: "OPEN",
    latency: "0.4 s",
    destination: "LÍDER / SOS",
    screen: "Asistencia vehicular",
    screenDetail: "Póliza · Documentos · SOS",
  },
] as const;

export function NfcSignalDemo() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const current = states[step];

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setTimeout(
      () => setStep((currentStep) => (currentStep + 1) % states.length),
      step === states.length - 1 ? 4400 : 3000,
    );
    return () => window.clearTimeout(timer);
  }, [step, isPaused]);

  return (
    <div
      className={`nfcSignalDemo step-${step}`}
      aria-label="Demostración interactiva de una experiencia NFC"
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
    >
      <div className="nfcDemoTop">
        <span>ZIVI / TAP LAB</span>
        <div className="nfcDemoSequence" aria-label={`Paso ${step + 1} de ${states.length}`}>
          {states.map((state, index) => (
            <button
              type="button"
              key={state.label}
              className={index === step ? "active" : index < step ? "complete" : ""}
              onClick={() => setStep(index)}
              aria-label={`Ver paso ${index + 1}: ${state.label}`}
            />
          ))}
        </div>
        <i aria-hidden="true" />
        <small>LIVE · 13.56 MHz</small>
      </div>
      <div className="nfcDemoStage" aria-hidden="true">
        <div className="nfcStageGrid" />
        <div className="nfcStageLabel label-object">OBJETO / 01</div>
        <div className="nfcStageLabel label-device">DISPOSITIVO / 02</div>
        <div className="nfcObject">
          <div className="nfcObjectHole" />
          <span>Z</span>
          <div className="nfcObjectChip"><i /><i /><i /><i /></div>
          <small>Tap / ID 7F-2A</small>
        </div>
        <div className="nfcWaves"><i /><i /><i /></div>
        <div className="nfcDataPacket">
          <span>NDEF</span>
          <small>144 B</small>
        </div>
        <div className="nfcPhone" aria-hidden="true">
          <div className="nfcPhoneSensor"><i /></div>
          <div className="nfcPhoneScreen">
            <div className="nfcPhoneStatus"><span>9:41</span><i /><i /><i /></div>
            <div className="nfcPhonePulse"><i /><i /></div>
            <span>{step === 3 ? "✓" : "NFC"}</span>
            <strong>{current.screen}</strong>
            <small>{current.screenDetail}</small>
            <div className="nfcPhoneAction">{step === 3 ? "ABRIR SERVICIO" : "CONEXIÓN SEGURA"}</div>
          </div>
        </div>
        <div className="nfcStageCoordinates">X 08.42 / Y 13.56</div>
      </div>
      <div className="nfcDemoTelemetry" aria-hidden="true">
        <div><span>PROTOCOLO</span><strong>{current.protocol}</strong></div>
        <div><span>RESPUESTA</span><strong>{current.latency}</strong></div>
        <div><span>DESTINO</span><strong>{current.destination}</strong></div>
      </div>
      <div className="nfcDemoStatus" aria-live="polite">
        <div>
          <span>0{step + 1}</span>
          <strong>{current.label}</strong>
          <small>{isPaused ? "PAUSA MANUAL" : "AUTO PLAY"}</small>
        </div>
        <p>{current.detail}</p>
      </div>
      <button
        type="button"
        onClick={() => setStep((currentStep) => (currentStep + 1) % states.length)}
      >
        {current.action}
        <span aria-hidden="true"><i />→</span>
      </button>
    </div>
  );
}
