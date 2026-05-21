import React, { useState } from "react";

export default function InstallBlock() {
  const cmd = "go install github.com/context3/ctx3@latest";
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div style={{
      background:"#0f172a",
      padding:"20px",
      borderRadius:"10px",
      fontFamily:"monospace",
      maxWidth:"600px",
      margin:"40px auto"
    }}>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <span style={{
          color: 'white'
        }}>{cmd}</span>
        <button
          style={{
            borderRadius:"8px",
            border: 'none'
          }} 
          onClick={copy}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
