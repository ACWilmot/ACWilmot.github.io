
// Sound effect utility for quiz interactions
class SoundEffects {
  private static readonly correctAnswer = new Audio('/sounds/correct-answer.mp3');
  private static readonly incorrectAnswer = new Audio('/sounds/incorrect-answer.mp3');
  private static readonly quizComplete = new Audio('/sounds/quiz-complete.mp3');

  private static playSound(audio: HTMLAudioElement) {
    audio.currentTime = 0; // Reset to start
    audio.play().catch(e => console.warn('Error playing sound:', e));
  }

  static playCorrectAnswer() {
    this.playSound(this.correctAnswer);
  }

  static playIncorrectAnswer() {
    this.playSound(this.incorrectAnswer);
  }

  static playQuizComplete() {
    this.playSound(this.quizComplete);
  }
}

export default SoundEffects;
