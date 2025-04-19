import React from 'react';
import { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


const AIChat = ({ msg }) => {
  const synth = window.speechSynthesis;
  const [voices, setVoices] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = synth.getVoices();
      setVoices(availableVoices);
    };

    // Load voices initially
    loadVoices();

    // Ensure voices are available on some browsers (e.g., Chrome)
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = loadVoices;
    }
  }, []);

  const speakHandler = () => {
    if (msg.text.trim() && !isSpeaking) {
      const selectedVoice =
        voices.find((voice) => voice.name.includes("India") || voice.lang.includes("en-IN")) ||
        voices[0]; // Fallback to first available voice

      const sanitizedResponse = msg.text.replace(/[*_,`|\-]/g, "");

      const utterance = new SpeechSynthesisUtterance(sanitizedResponse);
      utterance.voice = selectedVoice;
      utterance.onend = () => setIsSpeaking(false);

      synth.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const stopSpeakingHandler = () => {
    synth.cancel();
    setIsSpeaking(false);
  };
  return (
    <div className="flex items-start space-x-2 mt-3">
      <img
        src="./ai_lawyer.png"
        alt="AI"
        className="w-8 h-8 rounded-full object-cover"
      />
      <div>
      <div className="bg-white rounded-lg rounded-tl-none p-4 shadow-md w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl break-words whitespace-pre-wrap">
  <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
</div>

        <div className="flex items-center justify-between mt-1 text-xs drop-shadow-sm">
          <span className="text-black">
            {msg.time?.toDate
              ? msg.time.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              : ""}
          </span>
          <div className="space-x-2">
            {isSpeaking ?
              <span className="material-icons text-sm cursor-pointer text-black hover:text-white hover:bg-blue-500 p-1 rounded-full transition duration-200"
                onClick={stopSpeakingHandler}>
                volume_off
              </span>
              :
              <span className="material-icons text-sm cursor-pointer text-black hover:text-white hover:bg-blue-500 p-1 rounded-full transition duration-200"
                onClick={speakHandler}>
                volume_up
              </span>
            }
            <CopyToClipboard text={msg.text} onCopy={() => toast.success("Copied!")}>
              <span
                className="material-icons text-sm cursor-pointer text-gray-700 hover:text-white hover:bg-blue-500 p-1.5 rounded-full transition-all duration-300 ease-in-out"
                title="Copy to clipboard"
              >
                content_copy
              </span>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
