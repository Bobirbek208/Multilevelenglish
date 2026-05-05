import { GoogleGenAI } from "@google/genai";
import { UserAnswers } from "../types";
import { EXAM_DATA } from "../data";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "AIzaSyD3mK3zzCVVd2Gl1oHXkrynesSrEjy6aQk" });

export async function getAIAnalysis(userName: string, answers: UserAnswers) {
  const model = "gemini-3-flash-preview";
  
  // Prepare the data for the prompt
  const listeningMistakes = EXAM_DATA.listening.flatMap(part => 
    part.questions.filter(q => {
      const userAns = answers.listening[q.id]?.toLowerCase().trim();
      const correctAns = q.correctAnswer.toLowerCase().trim();
      return userAns !== correctAns;
    }).map(q => ({
      id: q.id,
      part: part.title,
      userAnswer: answers.listening[q.id] || "(No answer)",
      correctAnswer: q.correctAnswer,
      context: q.text || part.text || "Multiple choice question"
    }))
  );

  const readingMistakes = EXAM_DATA.reading.flatMap(part => 
    part.questions.filter(q => {
      const userAns = answers.reading[q.id]?.toLowerCase().trim();
      const correctAns = q.correctAnswer.toLowerCase().trim();
      return userAns !== correctAns;
    }).map(q => ({
      id: q.id,
      part: part.title,
      userAnswer: answers.reading[q.id] || "(No answer)",
      correctAnswer: q.correctAnswer,
      context: q.paragraph || q.text || part.text || "Reading comprehension"
    }))
  );

  const prompt = `
    You are an expert English Language Tutor specializing in the Multilevel English Exam (similar to IELTS).
    Candidate Name: ${userName}
    
    The candidate has finished their mock test. Here are their mistakes:
    
    LISTENING MISTAKES:
    ${JSON.stringify(listeningMistakes, null, 2)}
    
    READING MISTAKES:
    ${JSON.stringify(readingMistakes, null, 2)}
    
    WRITING TASKS (if any):
    Task 1: ${answers.writing.task1}
    Task 2: ${answers.writing.task2}

    INSTRUCTIONS:
    1. Analyze the patterns in their mistakes (e.g., spelling, grammar, understanding context, vocabulary).
    2. Provide specific advice on how to improve in each section.
    3. For the Writing tasks, give a brief feedback on structure and coherence.
    4. Be encouraging but professional.
    5. Format your response in clean Markdown. Use headings, bullet points, and bold text for emphasis.
    6. Language: Use English (or Uzbek if you detect the user prefers it, but default to English for academic feedback).
    
    Response structure:
    - Overall Performance Summary
    - Listening Analysis (focus on why they missed specific questions)
    - Reading Analysis (focus on comprehension strategies)
    - Writing Feedback (if content exists)
    - Personalized Action Plan for next time.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("AI Analysis Error:", error);
    return "Sorry, I couldn't generate the AI analysis at this moment. Please check your internet connection and try again.";
  }
}
