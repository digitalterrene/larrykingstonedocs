"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { useSpeech, HighlightedText } from "react-text-to-speech";
import { HiMiniStop, HiVolumeOff } from "react-text-to-speech/icons";

export default function MarkdownTTSWrapper({
  id,
  component, // Expecting a React node as the content
}: {
  id: string;
  component: React.ReactNode;
}) {
  const [highlightContainer, setHighlightContainer] = useState<HTMLDivElement | null>(null);

  // Set up the text-to-speech functionality
  const { Text, speechStatus, start, pause, stop } = useSpeech({
    text: component,
    highlightText: true,
  });

  useEffect(() => {
    console.log(document.getElementById(`rtts-${id}`));
    setHighlightContainer(document.getElementById(`rtts-${id}`) as HTMLDivElement);
  }, []);

  return (
    <>
      <div className="flex w-fit px-12 flex-col ml-auto items-center space-y-2">
        <div className="flex space-x-4">
          <span role="button">
            {speechStatus !== "started" ? (
              <div className="inline-flex border cursor-pointer border-blue-200 rounded-md p-1 hover:bg-blue-100 dark:border-neutral-700">
                <button
                  type="button"
                  title="Start speech"
                  onClick={start}
                  className="inline-flex shrink-0 justify-center items-center text-xl rounded-md text-gray-500  hover:text-blue-800 focus:outline-none   focus:text-blue-800   "
                >
                  <HiOutlineSpeakerWave />
                </button>
              </div>
            ) : (
              <div className="inline-flex border cursor-pointer border-blue-200 rounded-md p-1 hover:bg-blue-100 dark:border-neutral-700">
                <button
                  type="button"
                  title="Pause speech"
                  onClick={pause}
                  className="inline-flex shrink-0 justify-center items-center text-xl rounded-md text-gray-500  hover:text-blue-800 focus:outline-none   focus:text-blue-800   "
                >
                  <HiVolumeOff />
                </button>
              </div>
            )}
          </span>
          <span role="button">
            <div className="inline-flex border cursor-pointer border-blue-200 rounded-md p-1 hover:bg-blue-100 dark:border-neutral-700">
              <button
                type="button"
                title="Stop speech"
                onClick={stop}
                className="inline-flex shrink-0 justify-center items-center text-xl rounded-md text-gray-500  hover:text-blue-800 focus:outline-none   focus:text-blue-800   "
              >
                <HiMiniStop />
              </button>
            </div>
          </span>
        </div>
      </div>
      {highlightContainer && createPortal(<Text />, highlightContainer)}
    </>
  );
}

export function HighlightedContent({ id, children }: { id: string; children: React.ReactNode }) {
  return <HighlightedText id={id}>{children}</HighlightedText>;
}
