"use client";
import React, { useEffect, useState } from "react";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { useSpeech, HighlightedText } from "react-text-to-speech";
import {
  HiMiniStop,
  HiVolumeOff,
  HiVolumeUp,
} from "react-text-to-speech/icons";

export default function MarkdownTTSWrapper({
  component, // Expecting a React node as the content
}: {
  component: React.ReactNode;
}) {
  const [showMarkdown, setShowMarkdown] = useState(true);
  const [textToRead, setTextToRead] = useState("");

  // Extract text content from the rendered React component
  useEffect(() => {
    if (component) {
      const extractedText = extractTextFromComponent(component);
      setTextToRead(extractedText);
    }
  }, [component]);

  // Function to recursively extract text from React elements
  function extractTextFromComponent(node: React.ReactNode): string {
    if (typeof node === "string") {
      return node;
    }
    if (Array.isArray(node)) {
      return node.map(extractTextFromComponent).join(" ");
    }
    if (React.isValidElement(node) && node.props?.children) {
      return extractTextFromComponent(node.props.children);
    }
    return "";
  }

  // Set up the text-to-speech functionality
  const { Text, speechStatus, start, pause, stop } = useSpeech({
    text: textToRead, // Use the extracted text for TTS
    highlightText: true,
  });

  return (
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
  );
}
