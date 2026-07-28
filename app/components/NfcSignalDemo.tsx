"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ZiviMark } from "./ZiviMark";

const states = [
  {
    label: "Punto preparado",
    detail: "La pieza física queda lista para responder a pocos centímetros.",
    action: "Iniciar acercamiento",
    protocol: "STANDBY",
    latency: "—",
    destination: "ZIVI.CLOUD",
    signal: "READY",
    screen: "Acerca el teléfono",
    screenDetail: "Sin instalar aplicaciones",
  },
  {
    label: "Campo detectado",
    detail: "El teléfono energiza el chip y recibe el contenido configurado.",
    action: "Completar enlace",
    protocol: "ISO 14443",
    latency: "08 ms",
    destination: "NDEF / READ",
    signal: "FIELD",
    screen: "Lectura NFC activa",
    screenDetail: "Intercambio a 13.56 MHz",
  },
  {
    label: "Enlace verificado",
    detail: "La plataforma valida el destino editable y registra la interacción.",
    action: "Abrir experiencia",
    protocol: "HTTPS",
    latency: "126 ms",
    destination: "AUTH / OK",
    signal: "SECURE",
    screen: "Enlace verificado",
    screenDetail: "Destino seguro y medible",
  },
  {
    label: "Acción completada",
    detail: "El servicio aparece listo: menú, perfil, póliza, catálogo o asistencia.",
    action: "Repetir demostración",
    protocol: "OPEN",
    latency: "0.4 s",
    destination: "SERVICE / LIVE",
    signal: "OPEN",
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
      step === states.length - 1 ? 4600 : 3200,
    );
    return () => window.clearTimeout(timer);
  }, [step, isPaused]);

  return (
    <div
      className={`nfcSignalDemo nfcSignalDemoV3 step-${step}`}
      aria-label="Demostración interactiva de una experiencia NFC"
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
    >
      <div className="nfcDemoTop">
        <span>ZIVI / NFC FIELD LAB</span>
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
        <small>LIVE</small>
      </div>

      <div className="nfcDemoStage nfcPhotoStage">
        <Image
          className="nfcStageProductPhoto"
          src="/media/nfc-commerce/nfc-tap-studio-v3.png"
          alt="Mockup fotográfico de una tarjeta NFC real junto a un teléfono preparado para leerla"
          fill
          sizes="(max-width: 760px) 100vw, 48vw"
          quality={96}
          priority
        />
        <div className="nfcStagePhotoShade" aria-hidden="true" />
        <div className="nfcStageGrid" aria-hidden="true" />
        <div className="nfcStageLabel label-object">TARJETA / NTAG</div>
        <div className="nfcStageLabel label-device">SMARTPHONE / NFC</div>

        <div className="nfcCardProbe" aria-hidden="true">
          <span>TAG 7F-2A</span>
          <i />
        </div>
        <div className="nfcPhoneProbe" aria-hidden="true">
          <ZiviMark className="nfcProbeMark" />
          <span>ZIVI TAP</span>
        </div>

        <div className="nfcPhotoRoute" aria-hidden="true">
          <i /><i /><i /><i />
        </div>
        <div className="nfcPhotoTapZone" aria-hidden="true">
          <i /><i /><i />
          <b>{current.signal}</b>
        </div>
        <div className="nfcPhotoPacket packet-one" aria-hidden="true">NDEF</div>
        <div className="nfcPhotoPacket packet-two" aria-hidden="true">AUTH</div>

        <div className="nfcLiveResult" aria-live="polite">
          <span><i /> {step === 3 ? "SERVICIO DISPONIBLE" : "SESIÓN SEGURA"}</span>
          <strong>{current.screen}</strong>
          <small>{current.screenDetail}</small>
          <div>
            <b>{String(step + 1).padStart(2, "0")}</b>
            <em>{current.destination}</em>
          </div>
        </div>
        <div className="nfcStageCoordinates" aria-hidden="true">13.56 MHz / 04 CM / AES</div>
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
