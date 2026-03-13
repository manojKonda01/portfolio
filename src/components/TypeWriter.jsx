import { useState, useEffect } from 'react';

function useTypewriter(words, typingSpeed = 100, deletingSpeed = 60, delay = 1500) {
  const [index, setIndex] = useState(0);      // Which word
  const [subIndex, setSubIndex] = useState(0); // Char position
  const [deleting, setDeleting] = useState(false); // Typing or deleting
  const [blink, setBlink] = useState(true);   // Cursor blink

  useEffect(() => {
    if (index === words.length) {
      setIndex(0); // Loop back
      return;
    }

    if (subIndex === words[index].length + 1 && !deleting) {
      // Pause before delete
      setTimeout(() => setDeleting(true), delay);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex(prev => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex(prev => prev + (deleting ? -1 : 1));
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, delay, deletingSpeed, typingSpeed, words]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(prev => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return { text: words[index].substring(0, subIndex), cursor: blink ? '|' : ' ' };
}
export default useTypewriter;