'use client'
import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Mic = ({ setMicrophoneIsAvaliables = () => {}, setUserAnswer = () => {} }) => {
  const [isClient, setIsClient] = useState(false);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition();

  // Set flag when mounted on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Start listening only on client
  useEffect(() => {
    if (isClient) {
      setMicrophoneIsAvaliables(isMicrophoneAvailable);
      SpeechRecognition.startListening({
        continuous: true,
        language: 'en-IN',
      });
    }
  }, [isClient, isMicrophoneAvailable, setMicrophoneIsAvaliables]);

  // Send transcript to parent
  useEffect(() => {
    if (isClient) {
      setUserAnswer(transcript);
    }
  }, [transcript, setUserAnswer, isClient]);

  // Safe fallback if SSR
  if (!isClient || !browserSupportsSpeechRecognition) {
    return <div className="text-red-600">Microphone not supported</div>;
  }

  return (
    <div className='w-[80vw] sm:w-[20vw] h-10 bg-gray-600 rounded-[40px] flex items-center justify-around'>
      <div>
        <div className={`h-[10px] w-[10px] rounded-full animate-ping ${listening ? 'bg-green-600' : 'bg-red-600'}`}></div>
      </div>

      <button onClick={SpeechRecognition.stopListening} className='cursor-pointer'>Stop</button>

      <button
        onClick={() => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' })}
        className='h-[60px] w-[60px] bg-yellow-400 rounded-full cursor-pointer flex items-center justify-center hover:bg-yellow-600'
      >
        Start
      </button>

      <button onClick={resetTranscript} className='cursor-pointer'>Reset</button>
      <p>{listening ? 'L' : 'S'}</p>
    </div>
  );
};

export default Mic;
