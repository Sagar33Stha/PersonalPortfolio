import { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const VoiceControl = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const commands = [
    {
      command: ["go to *", "open *", "show *", "navigate to *"],
      callback: (section) => {
        const validSections = [
          "about",
          "skills",
          "projects",
          "education",
          "contact",
        ];
        if (validSections.includes(section.toLowerCase())) {
          scrollToSection(section);
        }
      },
    },
    {
      command: "toggle theme",
      callback: () => {
        const themeButton = document.querySelector(
          '[aria-label="toggle theme"]'
        );
        if (themeButton) themeButton.click();
      },
    },
    {
      command: "stop listening",
      callback: () => SpeechRecognition.stopListening(),
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });
    return () => SpeechRecognition.stopListening();
  }, []);

  return null;
};

export default VoiceControl;
