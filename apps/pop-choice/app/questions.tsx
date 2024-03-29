import { DynamicForm } from "../components/DynamicForm";
import { useLocalSearchParams } from "expo-router";
import { Input } from "../models/input";
import { OutputDataProvider } from "../components/OutputDataContext";

const inputs: Input[] = [
  {
    id: 1,
    name: "favoriteMovie",
    inputType: "text",
    label: "What's your favorite movie and why?",
  },
  {
    id: 2,
    name: "mood",
    label: "What are you in the mood for?",
    inputType: "multiselect",
    options: [
      { id: "new", label: "New", value: "new" },
      { id: "classic", label: "Classic", value: "classic" },
      { id: "fun", label: "Fun", value: "fun" },
      { id: "serious", label: "Serious", value: "serious" },
      { id: "inspiring", label: "Inspiring", value: "inspiring" },
      { id: "scary", label: "Scary", value: "scary" },
    ],
  },
  {
    id: 3,
    name: "famousPerson",
    inputType: "text",
    label:
      "Which famous film person would you love to be stranded on a an island with and why?",
  },
];

type RouteParams = {
  numberOfPeople: string;
  timeAvailable: string;
};

export default function QuestionsScreen() {
  const { numberOfPeople } = useLocalSearchParams<RouteParams>();

  return (
    <DynamicForm
      numberOfPeople={Number(numberOfPeople)}
      inputs={inputs}
      buttonText="Let's go!"
    />
  );
}
