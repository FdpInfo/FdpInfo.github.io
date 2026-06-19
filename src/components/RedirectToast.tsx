"use client";

import { useEffect, useRef, useState } from "react";

const TOAST_CSS = `
#redirect-toast{position:fixed;bottom:1.5rem;right:1.5rem;z-index:9999;display:flex;align-items:center;gap:0.65rem;background:rgba(15, 10, 30, 0.92);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(168, 85, 247, 0.35);border-radius:0.6rem;padding:0.6rem 0.9rem;box-shadow:0 8px 32px rgba(0,0,0,0.45), 0 0 0 1px rgba(168,85,247,0.08) inset;animation:slideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;max-width:360px;overflow:hidden;}
@keyframes slideIn{from{opacity:0;transform:translateY(1.5rem) scale(0.95);}to{opacity:1;transform:translateY(0) scale(1);}}
.toast-icon{flex-shrink:0;width:1.75rem;height:1.75rem;border-radius:50%;background:linear-gradient(135deg, #7c3aed, #a855f7);display:flex;align-items:center;justify-content:center;}
.toast-icon svg{width:0.85rem;height:0.85rem;fill:#fff;}
.toast-text{display:flex;flex-direction:column;gap:0.08rem;min-width:0;}
.toast-title{font-size:0.75rem;font-weight:600;color:#f1f5f9;line-height:1.2;letter-spacing:-0.01em;}
.toast-sub{font-size:0.68rem;color:#94a3b8;line-height:1.3;}
.toast-countdown{margin-left:auto;flex-shrink:0;font-size:0.72rem;font-weight:700;color:#a855f7;min-width:1.2rem;text-align:center;}
.toast-stop{flex-shrink:0;margin-left:0.4rem;font-size:0.68rem;font-weight:600;color:#e9d5ff;background:rgba(168,85,247,0.18);border:1px solid rgba(168,85,247,0.4);border-radius:0.4rem;padding:0.28rem 0.6rem;cursor:pointer;transition:background .15s,color .15s;}
.toast-stop:hover{background:rgba(168,85,247,0.34);color:#fff;}
.toast-go{flex-shrink:0;margin-left:0.4rem;font-size:0.68rem;font-weight:700;color:#0f0a1e;background:#fff;border-radius:0.4rem;padding:0.28rem 0.6rem;cursor:pointer;text-decoration:none;}
.toast-progress{position:absolute;bottom:0;left:0;height:2px;width:100%;border-radius:0 0 0.6rem 0.6rem;background:linear-gradient(90deg, #7c3aed, #a855f7);transform-origin:left;animation:shrink 3s linear forwards;}
@keyframes shrink{from{transform:scaleX(1);}to{transform:scaleX(0);}}
`;

export function RedirectToast({
  target = "https://lucas-lima.xyz/archives/fdpclient",
}: {
  target?: string;
}) {
  const [seconds, setSeconds] = useState(3);
  const [stopped, setStopped] = useState(false);
  const intervalRef = useRef(0);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setSeconds((s) => {
        const next = s - 1;
        if (next <= 0) {
          window.clearInterval(intervalRef.current);
          window.location.href = target;
        }
        return next;
      });
    }, 1000);
    return () => window.clearInterval(intervalRef.current);
  }, [target]);

  const stop = () => {
    window.clearInterval(intervalRef.current);
    setStopped(true);
  };

  return (
    <>
      <style>{TOAST_CSS}</style>
      <div id="redirect-toast" role="status" aria-live="polite">
        <div className="toast-icon">
          {stopped ? (
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06L7.25 9.69l5.47-5.47a.75.75 0 0 1 1.06 0Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
            </svg>
          )}
        </div>
        <div className="toast-text">
          <span className="toast-title">
            {stopped ? "Redirect stopped" : "Redirecting to the downloads page"}
          </span>
          <span className="toast-sub">
            {stopped
              ? "Browse the builds on this page."
              : "Taking you to our official site…"}
          </span>
        </div>
        {stopped ? (
          <a className="toast-go" href={target}>
            Go now
          </a>
        ) : (
          <>
            <span className="toast-countdown" id="toast-count">
              {seconds}
            </span>
            <button type="button" className="toast-stop" onClick={stop}>
              Stop
            </button>
            <div className="toast-progress"></div>
          </>
        )}
      </div>
    </>
  );
}
