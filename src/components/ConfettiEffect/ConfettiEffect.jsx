import { useEffect } from "react";
import confetti from "canvas-confetti";

const ConfettiEffect = () => {
  useEffect(() => {
    const count = 500;
    const defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio, opts) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    }

    function launchConfetti() {
      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });

      fire(0.2, {
        spread: 60,
      });

      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      });

      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
      });

      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    }

    // Запустити одразу при завантаженні
    launchConfetti();

    // Запускати кожні 5 секунд
    const interval = setInterval(launchConfetti, 2000);

    // Очистка інтервалу при розмонтуванні компонента
    return () => clearInterval(interval);
  }, []);

  return null;
};

export default ConfettiEffect;
