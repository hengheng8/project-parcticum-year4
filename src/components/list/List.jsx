import { useState } from "react";
import water from "../../assets/drop-silhouette (2).png";
import infinit from "../../assets/infinity 1.png";
import eye from "../../assets/view 1.png";
import reminders from "../../assets/clock-with-white-face 1.png";
import target from "../../assets/bullseye 1.png";
import note from "../../assets/writing 1.png";
import arrowdown from "../../assets/downward-arrow.png";

// FAQ Component with Arrow Icon at the End and Centered Text
const FAQ = ({ question, answer }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswer = () => {
    setIsAnswerVisible((prev) => !prev);
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="flex flex-col items-center bg-gray-400 w-[500px] rounded-md px-4 py-2 shadow-md">
        {/* Question Section */}
        <div className="flex items-center justify-between w-full mb-3">
          <h3 className="text-xl font-semibold text-center w-full">{question}</h3>
          <img
            src={arrowdown}
            alt="Toggle answer"
            className={`w-[30px] h-[30px] cursor-pointer transition-transform duration-300 ${
              isAnswerVisible ? "rotate-180" : "rotate-0"
            }`}
            onClick={toggleAnswer}
          />
        </div>
        
        {/* Answer Section */}
        {isAnswerVisible && (
          <div className="p-4 bg-gray-500 rounded-md">
            <p className="text-center">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Main List Component
const List = () => {
  return (
    <div className="m-5">
      {/* Features Section */}
      <div className="grid grid-cols-3 gap-8 mb-5">
        {[{
          img: water,
          title: "Do it every day",
          description: "Get disciplined. Doing it every day helps you form new habits, and habits are what make you reach your goals.",
        }, {
          img: infinit,
          title: "Don't break the chain",
          description: "Have a quick overview of your goals and streaks in a single beautiful board.",
        }, {
          img: eye,
          title: "Visualize your progress",
          description: "The more days you manage to chain in a row, the less likely you are to quit.",
        }, {
          img: reminders,
          title: "Reminders",
          description: "Make sure no habit is forgotten with daily reminders.",
        }, {
          img: target,
          title: "Weekly Targets",
          description: "Set how many days a week you would like to complete a habit.",
        }, {
          img: note,
          title: "Notes",
          description: "Write or dictate notes to capture all details of a habit. Great for exercise routines and daily journals.",
        }].map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={feature.img}
              alt={feature.title}
              className="w-[60px] h-[60px] mb-3"
            />
            <h2 className="mb-4 font-bold">{feature.title}</h2>
            <p className="text-center text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div>
        <h1 className="text-center text-5xl font-bold mt-8">FAQ</h1>
        <FAQ 
          question="What is HabitNest?" 
          answer="HabitNest is a habit tracker that helps you form good habits, stay on track, and achieve personal goals by tracking your daily progress."
        />
        <FAQ 
          question="How do I create a new habit?" 
          answer="To create a new habit, simply add it to your HabitNest dashboard, set your goal, and track your daily progress."
        />
        <FAQ 
          question="Can I customize reminders for each habit?" 
          answer="Yes, you can customize reminders for each habit so that you never forget to track your progress."
        />
        <FAQ 
          question="What type of habit can I track?" 
          answer="You can track any habit, from exercising to reading, journaling, or anything else you want to improve in your daily life."
        />
        <FAQ 
          question="How can I view my progress?" 
          answer="You can view your progress by looking at your daily streaks, weekly targets, and visual representations of your achievements in the app."
        />
      </div>
    </div>
  );
};

export default List;
